// Bismillahirahmanirahim
// ELHAMDULILLAHI RABBIL ALAMIN
// Esselatu vesselamu ala Resulillah 
// Suphanallah wa bihamdi, subhanallahil azim
// Allah u Ekber La ilahe illallah
"use client";
import { useState } from "react";

function ChatMessage({ message, isUser }: { message: string; isUser?: boolean }) {
  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} my-2`}>
      <div className={`rounded-lg px-4 py-2 max-w-[70%] ${isUser ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-900'}`}>
        {message}
      </div>
    </div>
  );
}

export default function Home() {
  const [messages, setMessages] = useState([
    { text: "Selam aleykum! Size nasıl yardımcı olabilirim?", isUser: false },
  ]);
  const [input, setInput] = useState("");

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    setMessages([...messages, { text: input, isUser: true }]);
    setInput("");
    // Burada asistan cevabı simüle ediliyor. Gerçek API entegrasyonu için burası güncellenmeli.
    setTimeout(() => {
      setMessages((msgs) => [...msgs, { text: "(Asistan cevabı buraya gelecek)", isUser: false }]);
    }, 800);
  };

  return (
    <main className="flex w-full min-w-0 gap-5">
      <div className="w-full min-w-0 flex flex-col h-[80vh] bg-white rounded-xl shadow p-6">
        <div className="flex-1 overflow-y-auto mb-4">
          {messages.map((msg, idx) => (
            <ChatMessage key={idx} message={msg.text} isUser={msg.isUser} />
          ))}
        </div>
        <form onSubmit={handleSend} className="flex gap-2">
          <input
            className="flex-1 border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            type="text"
            placeholder="Mesajınızı yazın..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            autoFocus
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
          >
            Gönder
          </button>
        </form>
      </div>
      <aside className="hidden md:block w-80 min-w-[18rem] bg-gray-50 rounded-xl shadow p-6">
        <h2 className="text-lg font-semibold mb-2">Asistan Hakkında</h2>
        <p className="text-gray-600 text-sm">Bu asistan, sorularınızı yanıtlamak ve size yardımcı olmak için tasarlanmıştır. Sağdaki paneli özelleştirebilirsiniz.</p>
      </aside>
    </main>
  );
}