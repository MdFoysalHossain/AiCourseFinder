import React, { useState } from "react";
import {
    Search, Loader2, Sparkles, FolderHeart, Eye, ThumbsUp,
    Calendar, ChevronLeft, ChevronRight, LayoutDashboard,
    GraduationCap, AlertCircle, Bookmark, History, Settings,
    Layers, ChevronDown, HelpCircle, Flame, ArrowUpRight
} from "lucide-react";

const SearchComponent = () => {
    const [mode, setMode] = useState("skill"); // "skill" | "playlist" | "problem"
    const [query, setQuery] = useState("");
    const [loading, setLoading] = useState(false);
    const [items, setItems] = useState([]);
    const [error, setError] = useState("");

    // Pagination & Search Memory
    const [nextPageToken, setNextPageToken] = useState(null);
    const [prevPageToken, setPrevPageToken] = useState(null);
    const [currentSearchQuery, setCurrentSearchQuery] = useState("");

    // ENV VARIABLES
    const YOUTUBE_API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;
    const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

    const formatCount = (num) => {
        if (!num) return "N/A";
        const count = Number(num);
        if (count >= 1000000) return (count / 1000000).toFixed(1) + "M";
        if (count >= 1000) return (count / 1000).toFixed(1) + "K";
        return count;
    };

    // ===============================
    // Dynamic Gemini AI Prompt Engine
    // ===============================
    const getGeminiPrompt = async () => {
        try {
            let prompt = "";
            if (mode === "skill") {
                prompt = `You are an expert educational curriculum curator. The user entered: "${query}". Output ONLY a clean, razor-focused YouTube search query targeting individual top-tier structured videos, courses, or masterclasses. Append educational intent words like "complete course" or "tutorial". No markdown, no quotes, no chat filler, no random video which will distract the user, no fun video for entertainment, no shorts.`;
            } else if (mode === "playlist") {
                prompt = `You are an expert curriculum designer. The user wants a complete learning roadmap series for: "${query}". Output ONLY a razor-focused YouTube search query designed to surface complete video playlists. Append phrases like "full playlist" or "complete series". No markdown, no quotes, no random video which will distract the user, no fun video for entertainment, no shorts.`;
            } else {
                prompt = `You are an expert troubleshooting specialist. The user entered a bug description: "${query}". Output ONLY a razor-focused YouTube search query targeting immediate, tactical bug-fixes or solution walkthroughs. Append terms like "fix" or "error solved". No markdown, no quotes, no random video which will distract the user, no fun video for entertainment, no shorts.`;
            }

            const response = await fetch(
                `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}`,
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }] }),
                }
            );

            const data = await response.json();
            let aiResponse = data?.candidates?.[0]?.content?.parts?.[0]?.text || query;
            return aiResponse.replace(/["`\n]/g, "").trim();
        } catch (err) {
            console.error(err);
            return query;
        }
    };

    // ===============================
    // Extra Statistics Fetching Pipeline
    // ===============================
    const fetchDetailedStats = async (searchResults, isPlaylist) => {
        if (!searchResults.length) return [];
        const ids = searchResults.map((item) => (isPlaylist ? item.id?.playlistId : item.id?.videoId)).filter(Boolean).join(",");

        try {
            if (isPlaylist) {
                const playlistUrl = `https://www.googleapis.com/youtube/v3/playlists?part=contentDetails,statistics&id=${ids}&key=${YOUTUBE_API_KEY}`;
                const res = await fetch(playlistUrl);
                const detailData = await res.json();
                return searchResults.map((item) => {
                    const details = detailData.items?.find((d) => d.id === item.id.playlistId);
                    return {
                        ...item,
                        stats: { videoCount: details?.contentDetails?.itemCount || 0, viewCount: details?.statistics?.viewCount || null },
                    };
                });
            } else {
                const videoUrl = `https://www.googleapis.com/youtube/v3/videos?part=statistics&id=${ids}&key=${YOUTUBE_API_KEY}`;
                const res = await fetch(videoUrl);
                const detailData = await res.json();
                return searchResults.map((item) => {
                    const details = detailData.items?.find((d) => d.id === item.id.videoId);
                    return {
                        ...item,
                        stats: { viewCount: details?.statistics?.viewCount || 0, likeCount: details?.statistics?.likeCount || 0 },
                    };
                });
            }
        } catch (err) {
            console.error(err);
            return searchResults;
        }
    };

    // ===============================
    // YouTube Core API Engine
    // ===============================
    const searchYouTube = async (searchText, pageToken = "") => {
        const maxResults = 4;
        const typeParam = mode === "playlist" ? "playlist" : "video";
        let url = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(searchText)}&maxResults=${maxResults}&type=${typeParam}&order=relevance&key=${YOUTUBE_API_KEY}`;
        if (pageToken) url += `&pageToken=${pageToken}`;

        const response = await fetch(url);
        const data = await response.json();

        setNextPageToken(data.nextPageToken || null);
        setPrevPageToken(data.prevPageToken || null);

        return await fetchDetailedStats(data.items || [], mode === "playlist");
    };

    const handleSearch = async () => {
        if (!query.trim()) return;
        setLoading(true);
        setError("");
        setItems([]);

        try {
            const optimizedSearch = await getGeminiPrompt();
            setCurrentSearchQuery(optimizedSearch);
            const enrichedResults = await searchYouTube(optimizedSearch);
            setItems(enrichedResults);
        } catch (err) {
            console.error(err);
            setError("An operational error occurred while connecting to index clusters.");
        } finally {
            setLoading(false);
        }
    };

    const handlePageChange = async (token) => {
        if (!token || !currentSearchQuery) return;
        setLoading(true);
        document.getElementById("main-workspace")?.scrollTo({ top: 0, behavior: "smooth" });

        try {
            const enrichedResults = await searchYouTube(currentSearchQuery, token);
            setItems(enrichedResults);
        } catch (err) {
            console.error(err);
            setError("Failed to resolve the requested page cluster.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex  w-full  font-sans text-zinc-200 overflow-hidden relative">

            <div id="search" className="h-10 w-50 absolute -top-80 left-0">

            </div>



            {/* MAIN APPLICATION FRAME AREA */}
            <div className="flex flex-col flex-1 min-w-0 max-w-[1330px]  mx-auto">


                {/* 3. CENTRAL WORKSPACE SCROLL CONTENT CONTAINER */}
                <main id="main-workspace" className="flex-1 overflow-y-auto p-6 lg:p-8 space-y-8 ">

                    {/* Operational Crash Alerts Overlay Context */}
                    {error && (
                        <div className="bg-red-500/5 border border-red-500/20 text-red-400 p-4 rounded-xl flex items-center gap-3 text-xs font-medium">
                            <AlertCircle size={16} className="shrink-0" />
                            <span>{error}</span>
                        </div>
                    )}

                    {/* WORKSPACE RESULTS DATA MATRIX GRID */}
                    {items.length > 0 && (
                        <div className="space-y-6">
                            <div className="flex items-center justify-between">
                                <h3 className="text-xs font-bold text-zinc-400 uppercase tracking-widest">Compiled Response Telemetry</h3>
                                <span className="text-[11px] px-2 py-0.5 bg-zinc-900 border border-zinc-800 rounded-md font-mono text-zinc-500">8 Resource Links Returned</span>
                            </div>

                            <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-5">
                                {items.map((item) => {
                                    const isPlaylist = mode === "playlist";
                                    const itemId = isPlaylist ? item.id?.playlistId : item.id?.videoId;
                                    const snippet = item.snippet;

                                    if (!itemId) return null;

                                    const redirectUrl = isPlaylist
                                        ? `https://www.youtube.com/playlist?list=${itemId}`
                                        : `https://www.youtube.com/watch?v=${itemId}`;

                                    return (
                                        <div
                                            key={itemId}
                                            className="group bg-zinc-900/40 border border-zinc-800/80 hover:border-zinc-700 rounded-2xl overflow-hidden transition-all duration-300 flex flex-col h-full hover:shadow-xl hover:shadow-black/20"
                                        >
                                            {/* Media Image Framing */}
                                            <div className="relative aspect-[16/9] w-full bg-zinc-950 overflow-hidden shrink-0">
                                                <img
                                                    src={snippet.thumbnails?.high?.url || snippet.thumbnails?.medium?.url}
                                                    alt={snippet.title}
                                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-60" />

                                                {isPlaylist && (
                                                    <div className="absolute top-3 left-3">
                                                        <span className="bg-emerald-500 text-zinc-950 font-extrabold px-2 py-0.5 rounded-md text-[9px] tracking-widest uppercase flex items-center gap-1 shadow-md">
                                                            <FolderHeart size={10} /> Playlist
                                                        </span>
                                                    </div>
                                                )}
                                            </div>

                                            {/* Content Informational Layout Container */}
                                            <div className="p-4 flex flex-col justify-between flex-1 min-w-0">
                                                <div className="space-y-3 min-w-0">
                                                    <h4
                                                        className="text-sm font-semibold text-white tracking-tight line-clamp-2 group-hover:text-indigo-400 transition-colors duration-200"
                                                        dangerouslySetInnerHTML={{ __html: snippet.title }}
                                                    />

                                                    {/* Data Telemetry Statistics Panel */}
                                                    <div className="bg-zinc-950/60 border border-zinc-800/40 rounded-xl p-3 grid grid-cols-2 gap-x-2 gap-y-1.5 text-zinc-400 text-[11px] font-mono">
                                                        {!isPlaylist ? (
                                                            <>
                                                                <div className="flex items-center gap-1.5 font-medium min-w-0">
                                                                    <Eye size={12} className="text-zinc-500 shrink-0" />
                                                                    <span className="truncate">{formatCount(item.stats?.viewCount)}</span>
                                                                </div>
                                                                <div className="flex items-center gap-1.5 font-medium min-w-0">
                                                                    <ThumbsUp size={11} className="text-zinc-500 shrink-0" />
                                                                    <span className="truncate">{formatCount(item.stats?.likeCount)}</span>
                                                                </div>
                                                            </>
                                                        ) : (
                                                            <div className="flex items-center gap-1.5 font-medium col-span-2 min-w-0">
                                                                <Layers size={12} className="text-emerald-500 shrink-0" />
                                                                <span className="truncate text-emerald-400/90 font-semibold">{item.stats?.videoCount} System Nodes</span>
                                                            </div>
                                                        )}
                                                        <div className="flex items-center gap-1.5 text-zinc-500 col-span-2 pt-1.5 mt-0.5 border-t border-zinc-800/40 min-w-0">
                                                            <Calendar size={11} className="shrink-0" />
                                                            <span className="truncate">{new Date(snippet.publishedAt).toLocaleDateString(undefined, { year: 'numeric', month: 'short' })}</span>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Card Sub-Footer Control Link Component */}
                                                <div className="mt-4 pt-3 border-t border-zinc-800/50 flex items-center justify-between gap-2 min-w-0">
                                                    <span className="text-[11px] font-medium text-zinc-500 truncate">{snippet.channelTitle}</span>
                                                    <a
                                                        href={redirectUrl}
                                                        target="_blank"
                                                        rel="noreferrer"
                                                        className="flex items-center gap-1 text-[11px] font-bold text-zinc-300 hover:text-white bg-zinc-800 hover:bg-zinc-700 px-2.5 py-1 rounded-lg transition-all shrink-0"
                                                    >
                                                        Check <ArrowUpRight size={12} />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>

                            {/* SAAS FOOTER PAGINATION CONSOLE BAR */}
                            {(prevPageToken || nextPageToken) && (
                                <div className="flex justify-between items-center gap-4 bg-zinc-900/40 border border-zinc-800 rounded-xl p-3 mt-4">
                                    <button
                                        onClick={() => handlePageChange(prevPageToken)}
                                        disabled={!prevPageToken || loading}
                                        className="flex items-center gap-1 px-3 py-1.5 bg-zinc-900 border border-zinc-800 rounded-lg text-xs font-semibold text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800 disabled:opacity-30 disabled:hover:bg-zinc-900 disabled:hover:text-zinc-400 transition-all"
                                    >
                                        <ChevronLeft size={14} /> Back
                                    </button>

                                    <span className="text-[10px] font-mono font-bold text-zinc-600 uppercase tracking-widest">Pagination Index</span>

                                    <button
                                        onClick={() => handlePageChange(nextPageToken)}
                                        disabled={!nextPageToken || loading}
                                        className="flex items-center gap-1 px-3 py-1.5 bg-zinc-900 border border-zinc-800 rounded-lg text-xs font-semibold text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800 disabled:opacity-30 disabled:hover:bg-zinc-900 disabled:hover:text-zinc-400 transition-all"
                                    >
                                        Next <ChevronRight size={14} />
                                    </button>
                                </div>
                            )}
                        </div>
                    )}

                    <div className="bg-zinc-900/90 border border-zinc-800 rounded-2xl p-5 shadow-2xl shadow-black/40 space-y-4">
                        <div className="flex flex-wrap items-center gap-2 border-b border-zinc-800/60 pb-4">
                            <button
                                onClick={() => { setMode("skill"); setItems([]); setNextPageToken(null); setPrevPageToken(null); }}
                                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all border ${mode === "skill"
                                        ? "bg-indigo-500/10 border-indigo-500/40 text-indigo-400 shadow-inner"
                                        : "bg-transparent border-transparent text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/40"
                                    }`}
                            >
                                <Layers size={14} />
                                Want Video Recommendation?
                            </button>

                            <button
                                onClick={() => { setMode("playlist"); setItems([]); setNextPageToken(null); setPrevPageToken(null); }}
                                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all border ${mode === "playlist"
                                        ? "bg-emerald-500/10 border-emerald-500/40 text-emerald-400 shadow-inner"
                                        : "bg-transparent border-transparent text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/40"
                                    }`}
                            >
                                <FolderHeart size={14} />
                                Course Playlist Recommendation
                            </button>

                            <button
                                onClick={() => { setMode("problem"); setItems([]); setNextPageToken(null); setPrevPageToken(null); }}
                                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all border ${mode === "problem"
                                        ? "bg-amber-500/10 border-amber-500/40 text-amber-400 shadow-inner"
                                        : "bg-transparent border-transparent text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/40"
                                    }`}
                            >
                                <AlertCircle size={14} />
                                Having any problem? Ask in your language..
                            </button>
                        </div>

                        {/* HIGH EFFICIENCY CAPTURE TEXT FIELD HUB */}
                        <div className="flex flex-col sm:flex-row gap-3">
                            <div className="flex-1 relative">
                                <Sparkles className="absolute left-4 top-1/2 -translate-y-1/2 text-indigo-400" size={16} />
                                <input
                                    type="text"
                                    value={query}
                                    onChange={(e) => setQuery(e.target.value)}
                                    onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                                    placeholder={
                                        mode === "skill"
                                            ? "Describe target learning matrix... (e.g., Next.js architectures)"
                                            : mode === "playlist"
                                                ? "Search specific curriculum tracks... (e.g., Advanced Go Microservices)"
                                                : "Describe your issue, the AI will try to find close solutions.."
                                    }
                                    className="w-full bg-zinc-950 border border-zinc-800 focus:border-zinc-700 rounded-xl py-3 pl-11 pr-4 text-sm text-white placeholder-zinc-500 outline-none transition-all shadow-inner"
                                />
                            </div>

                            <button
                                onClick={handleSearch}
                                disabled={loading}
                                className={`transition-all px-6 py-3 rounded-xl text-white font-semibold text-xs tracking-wider uppercase flex items-center justify-center gap-2 shadow-lg shrink-0 ${mode === "playlist"
                                        ? "bg-emerald-600 hover:bg-emerald-500 shadow-emerald-900/10"
                                        : mode === "problem"
                                            ? "bg-amber-600 hover:bg-amber-500 shadow-amber-900/10"
                                            : "bg-indigo-600 hover:bg-indigo-500 shadow-indigo-900/10"
                                    }`}
                            >
                                {loading ? (
                                    <>
                                        <Loader2 className="animate-spin" size={14} /> Engineering...
                                    </>
                                ) : (
                                    <>
                                        <Search size={14} /> Trigger Analysis
                                    </>
                                )}
                            </button>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default SearchComponent;