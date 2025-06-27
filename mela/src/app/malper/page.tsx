// Bismillahirahmanirahim
// Elhamdulillahirrabbulalemin
// Esselatu vesselamu ala seyyidina Muhammedin ve ala alihi ve sahbihi ecmain
// Elhamdulillahirabbulalemin
// Ve salatu ve selamu ala resulina Muhammedin ve alihi ve sahbihi ecmain
// Allah U Ekber, Allah U Ekber, Allah U Ekber, La ilahe illallah
// Subhanallah, Elhamdulillah, Allahu Ekber
// Estağfirullah El-Azim
// La ilahe illallah, Muhammedur Resulullah
"use client";
// Bismillahirrahmanirrahim 
// Elhamdulillahirrabbulalemin

import React, { useState, useRef } from 'react'

function ChatMessage({ message, isUser }: { message: string; isUser?: boolean }) {
  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} my-2`}>
      <div className={`rounded-lg px-4 py-2 max-w-[70%] ${isUser ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-900'}`}>
        {message}
      </div>
    </div>
  );
}

async function uploadAudioAndGetTranscript(file: File) {
  const formData = new FormData();
  formData.append("file", file);
  const response = await fetch("http://localhost:8000/asr/", {
    method: "POST",
    body: formData,
  });
  if (!response.ok) {
    throw new Error("Ses yüklenemedi!");
  }
  const data = await response.json();
  return data.transcript;
}

export default function Page() {
  const [messages, setMessages] = useState([
    { text: "Silav û rêz! Ez dikarim alîkarî bidim te. Pirsa xwe binivîse...", isUser: false },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    setMessages([...messages, { text: input, isUser: true }]);
    setInput("");
    setLoading(true);
    // Burada API'den cevap simüle ediliyor. Gerçek entegrasyon için backend'e istek atılabilir.
    setTimeout(() => {
      setMessages((msgs) => [...msgs, { text: "(Bersiva asistanê dê li vir were nîşandan)", isUser: false }]);
      setLoading(false);
    }, 800);
  };

  const handleAudioUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setMessages([...messages, { text: "(Ses dosyası gönderildi)", isUser: true }]);
      setLoading(true);
      try {
        const transcript = await uploadAudioAndGetTranscript(e.target.files[0]);
        setMessages((msgs) => [...msgs, { text: transcript, isUser: false }]);
      } catch (err) {
        setMessages((msgs) => [...msgs, { text: "Xeta: Ses dosyası yüklenemedi!", isUser: false }]);
      }
      setLoading(false);
      if (fileInputRef.current) fileInputRef.current.value = "";
    }
  };

  return (
    <main className="flex w-full min-w-0 gap-5">
      <div className="w-full min-w-0 flex flex-col h-[80vh] bg-white rounded-xl shadow p-6">
        <h1 className="text-2xl font-bold mb-4 text-green-700">Feqî – Asîstana Zekayê Sînî</h1>
        <div className="flex-1 overflow-y-auto mb-4">
          {messages.map((msg, idx) => (
            <ChatMessage key={idx} message={msg.text} isUser={msg.isUser} />
          ))}
          {loading && <div className="text-gray-400 text-sm">...</div>}
        </div>
        <form onSubmit={handleSend} className="flex gap-2 mb-2">
          <input
            className="flex-1 border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
            type="text"
            placeholder="Pirsa xwe binivîse..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            autoFocus
            disabled={loading}
          />
          <button
            type="submit"
            className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
            disabled={loading}
          >
            Şandin
          </button>
        </form>
        <div className="flex items-center gap-2">
          <input
            type="file"
            accept="audio/*"
            ref={fileInputRef}
            onChange={handleAudioUpload}
            className="hidden"
            id="audio-upload"
            disabled={loading}
          />
          <label htmlFor="audio-upload" className="bg-green-100 text-green-700 px-3 py-2 rounded-lg cursor-pointer hover:bg-green-200 transition border border-green-300">
            + Ses Dosyası Yükle
          </label>
        </div>
      </div>
      <aside className="hidden md:block w-80 min-w-[18rem] bg-gray-50 rounded-xl shadow p-6">
        <h2 className="text-lg font-semibold mb-2 text-green-700">Der barê Feqî</h2>
        <p className="text-gray-600 text-sm">Feqî asîstana zekayê sînî ya bi zimanê Kurdî ye. Pirsa xwe binivîse û bersivê bistînin! Hûn dikarin sesê xwe jî bişînin.</p>
      </aside>
    </main>
  );
}