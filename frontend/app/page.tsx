"use client";

import React, { useState, useEffect } from 'react';

export default function Home() {
  const [status, setStatus] = useState("Connecting...");
  const [latency, setLatency] = useState(0);

  useEffect(() => {
    // Simulate real-time data
    const interval = setInterval(() => {
      setStatus("Healthy");
      setLatency(Math.floor(Math.random() * 40) + 10);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen bg-[#0a0a0b] text-white p-8 font-sans">
      {/* Header */}
      <header className="flex justify-between items-center mb-12">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center">
             <span className="text-xl font-bold">V</span>
          </div>
          <h1 className="text-2xl font-bold tracking-tight">AI Voice Platform</h1>
        </div>
        <div className="flex gap-4">
          <div className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm font-medium">
            Project: <span className="text-indigo-400">staging-v1</span>
          </div>
          <button className="px-6 py-2 bg-indigo-600 hover:bg-indigo-500 rounded-full text-sm font-semibold transition-all">
            Deploy New Agent
          </button>
        </div>
      </header>

      {/* Hero Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
        {[
          { label: "Active Agents", value: "12", trend: "+2" },
          { label: "Total Streams", value: "1.2k", trend: "+12%" },
          { label: "Avg Latency", value: `${latency}ms`, trend: "Stable" },
          { label: "System Status", value: status, trend: "99.9%" }
        ].map((stat, i) => (
          <div key={i} className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-sm">
            <p className="text-sm text-gray-400 mb-2">{stat.label}</p>
            <div className="flex justify-between items-end">
              <h2 className="text-3xl font-bold">{stat.value}</h2>
              <span className="text-xs text-green-400 font-medium bg-green-400/10 px-2 py-1 rounded-md">
                {stat.trend}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Main Content Area */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Agent List */}
        <div className="lg:col-span-2 space-y-6">
          <h3 className="text-lg font-semibold mb-4">Deployed Agents</h3>
          {[1, 2, 3].map((agent) => (
            <div key={agent} className="bg-white/5 border border-white/10 p-5 rounded-2xl flex justify-between items-center hover:bg-white/[0.07] transition-all cursor-pointer">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-indigo-500/20 border border-indigo-500/30 rounded-xl flex items-center justify-center text-indigo-400">
                  🎙️
                </div>
                <div>
                  <h4 className="font-semibold">Customer Support Agent #{agent}</h4>
                  <p className="text-sm text-gray-400">WebSocket: ws://api.voice-platform.internal/v1/ws</p>
                </div>
              </div>
              <div className="text-right">
                <div className="text-sm font-medium mb-1">Running</div>
                <div className="text-xs text-gray-500">Uptime: 4d 12h</div>
              </div>
            </div>
          ))}
        </div>

        {/* Real-time Logs / Monitoring Side */}
        <div className="bg-black/40 border border-white/10 rounded-2xl p-6 h-[600px] flex flex-col">
          <h3 className="text-lg font-semibold mb-4">Infrastructure Logs</h3>
          <div className="flex-1 overflow-y-auto space-y-2 font-mono text-xs text-green-400/80">
            <div>[INFO] 2026-05-09 14:02:44 - Initializing EKS Node Group...</div>
            <div>[INFO] 2026-05-09 14:02:45 - WebSocket Handshake successful</div>
            <div>[DEBUG] 2026-05-09 14:02:46 - Stream chunk received (512 bytes)</div>
            <div className="animate-pulse">[SUCCESS] Agent deployed to us-east-1a</div>
            <div>[INFO] 2026-05-09 14:02:47 - Prometheus scraping active</div>
          </div>
        </div>
      </div>
    </main>
  );
}
