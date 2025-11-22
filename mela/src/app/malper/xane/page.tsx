// Bismillahirrahmanirahim
// Elhamdulillahirabbulalemin
// Esselatu vesselamu ala seyyidina Muhammedin ve ala alihi ve sahbihi ecmain
// SuphanAllah velhamdulillah ve la ilahe illallah wallahu ekber
// La havle vela kuvvete illa billahil aliyyil azim
// La ilahe illallah Muhammeden resulullah
// SuphanAllah ve Bihamdihi Velhamdulillah

'use client'

import React, { useEffect, useMemo, useState, useRef } from 'react'

// Modern Kurdish word puzzle — Next.js app route (app/page.tsx)
// How to use: paste this file as `app/page.tsx` in a Next.js + Tailwind project.
// Tailwind is assumed to be set up. If you don't use Tailwind, adapt the classes.

type Puzzle = {
  id: number
  word: string
  hint?: string
}

const WORDS: Puzzle[] = [
  { id: 1, word: 'roj', hint: 'day / sunlight' },
  { id: 2, word: 'ziman', hint: 'language' },
  { id: 3, word: 'dilsozî', hint: 'kindness / sympathy' },
  { id: 4, word: 'hevpeyvîn', hint: 'conversation' },
  { id: 5, word: 'pirtûk', hint: 'book' },
  { id: 6, word: 'xwende', hint: 'reading / study' },
  { id: 7, word: 'hezkirin', hint: 'to love' },
  { id: 8, word: 'serkeftin', hint: 'success' },
  { id: 9, word: 'rojhilat', hint: 'east' },
  { id: 10, word: 'deng', hint: 'voice / sound' }
]

function shuffleLetters(s: string) {
  const arr = Array.from(s)
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[arr[i], arr[j]] = [arr[j], arr[i]]
  }
  // avoid returning the same order as original if possible
  if (arr.join('') === s && arr.length > 1) {
    const tmp = arr[0]
    arr[0] = arr[1]
    arr[1] = tmp
  }
  return arr.join('')
}

export default function KurdishPuzzlePage() {
  const [index, setIndex] = useState(0)
  const [scrambled, setScrambled] = useState('')
  const [input, setInput] = useState('')
  const [message, setMessage] = useState<string | null>(null)
  const [autoMs, setAutoMs] = useState(20000) // auto-refresh every 20s by default
  const [running, setRunning] = useState(true)
  const intervalRef = useRef<number | null>(null)

  const current = useMemo(() => WORDS[index % WORDS.length], [index])

  useEffect(() => {
    setScrambled(shuffleLetters(current.word))
    setInput('')
    setMessage(null)
  }, [current])

  // Auto-refresh logic
  useEffect(() => {
    // clear previous
    if (intervalRef.current) window.clearInterval(intervalRef.current)
    if (!running) return
    intervalRef.current = window.setInterval(() => {
      setIndex((i) => (i + 1) % WORDS.length)
    }, autoMs)
    return () => {
      if (intervalRef.current) window.clearInterval(intervalRef.current)
    }
  }, [autoMs, running])

  function checkAnswer() {
    const cleanUser = input.trim().toLowerCase()
    const cleanWord = current.word.trim().toLowerCase()
    if (!cleanUser) {
      setMessage('Ji kerema xwe peyama xwe binivîse.')
      return
    }
    if (cleanUser === cleanWord) {
      setMessage('Bajêr! Rast e ✨')
    } else {
      setMessage('Nexêr — biceribîne dîsa.')
    }
  }

  function nextOne() {
    setIndex((i) => (i + 1) % WORDS.length)
  }

  function prevOne() {
    setIndex((i) => (i - 1 + WORDS.length) % WORDS.length)
  }

  function reveal() {
    setMessage(`Peyv: "${current.word}"`)
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-sky-50 flex items-center justify-center p-6">
      <div className="w-full max-w-2xl bg-white/90 backdrop-blur-md rounded-2xl shadow-xl p-6">
        <header className="flex items-start justify-between gap-4 mb-4">
          <div>
            <h1 className="text-2xl font-semibold">Kelime Bulmaca — Zimanê Kurdî</h1>
            <p className="text-sm text-slate-600">Auto-nûkirin — her {Math.round(autoMs / 1000)} s. Click "Pause" bo rawestan.</p>
          </div>
          <div className="flex gap-2 items-center">
            <button
              onClick={() => setRunning((r) => !r)}
              className="px-3 py-1 rounded-lg border"
            >
              {running ? 'Pause' : 'Play'}
            </button>
            <select
              value={String(autoMs)}
              onChange={(e) => setAutoMs(Number(e.target.value))}
              className="border rounded-lg px-2 py-1 text-sm"
            >
              <option value={10000}>10s</option>
              <option value={20000}>20s</option>
              <option value={30000}>30s</option>
              <option value={60000}>60s</option>
            </select>
          </div>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
          <div className="md:col-span-2">
            <div className="text-center py-6 px-4 rounded-xl border border-slate-100">
              <p className="text-sm text-slate-500">Scrambled</p>
              <div className="mt-3 text-4xl font-bold tracking-wider">{scrambled}</div>
              <p className="mt-2 text-slate-500">({current.word.length} tîpan)</p>
            </div>

            <div className="mt-4 flex gap-2">
              <input
                aria-label="answer"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && checkAnswer()}
                placeholder="Lêkolîn..."
                className="flex-1 rounded-lg border px-3 py-2"
              />
              <button onClick={checkAnswer} className="px-4 py-2 rounded-lg border">Check</button>
            </div>

            {message && (
              <div className="mt-3 text-sm p-3 rounded-md bg-slate-100">
                {message}
              </div>
            )}

            <div className="mt-4 flex gap-2">
              <button onClick={prevOne} className="px-3 py-1 rounded border">Prev</button>
              <button onClick={nextOne} className="px-3 py-1 rounded border">Next</button>
              <button onClick={reveal} className="px-3 py-1 rounded border">Reveal</button>
              <button
                onClick={() => setScrambled(shuffleLetters(current.word))}
                className="px-3 py-1 rounded border"
              >
                Shuffle
              </button>
            </div>
          </div>

          <aside className="md:col-span-1 bg-slate-50 p-4 rounded-xl border">
            <h3 className="font-medium">Hint</h3>
            <p className="text-slate-600 mt-2">{current.hint ?? 'N/A'}</p>

            <div className="mt-4">
              <h4 className="text-sm font-medium">Stats</h4>
              <ul className="text-sm text-slate-600 mt-2 space-y-1">
                <li>Index: {index + 1}/{WORDS.length}</li>
                <li>Length: {current.word.length} characters</li>
              </ul>
            </div>

            <div className="mt-4">
              <h4 className="text-sm font-medium">Settings</h4>
              <label className="block text-xs mt-2">
                <span className="text-slate-600">Auto-refresh</span>
                <div className="mt-2 flex gap-2">
                  <button onClick={() => setAutoMs(10000)} className="px-2 py-1 rounded border text-xs">10s</button>
                  <button onClick={() => setAutoMs(20000)} className="px-2 py-1 rounded border text-xs">20s</button>
                  <button onClick={() => setAutoMs(60000)} className="px-2 py-1 rounded border text-xs">60s</button>
                </div>
              </label>
            </div>
          </aside>
        </section>

        <footer className="mt-6 text-sm text-slate-500 text-center">
          <p>© {new Date().getFullYear()} Kurdish Puzzle • Made with ❤️ — Hûn dikarin wan peyvan biguhêjin an zêde bikin.</p>
        </footer>
      </div>
    </main>
  )
}

/*
Optional: server API (if you prefer server-side route) - place in `app/api/words/route.ts` (Next.js app router)

import { NextResponse } from 'next/server'

export async function GET() {
  const words = [
    { id: 1, word: 'roj', hint: 'day' },
    // ...same list as above
  ]
  const idx = Math.floor(Math.random() * words.length)
  return NextResponse.json(words[idx])
}

Client can fetch from `/api/words` to get dynamic words from server.
*/
