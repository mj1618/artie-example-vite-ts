import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-white mb-8">
          Vite + React + TypeScript
        </h1>
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
          <button
            onClick={() => setCount((count) => count + 1)}
            className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg transition-colors duration-200 shadow-lg hover:shadow-indigo-500/25"
          >
            Count is {count}
          </button>
          <p className="mt-6 text-slate-300">
            Edit <code className="bg-slate-700 px-2 py-1 rounded text-indigo-400">src/App.tsx</code> and save to test HMR
          </p>
        </div>
        <p className="mt-8 text-slate-400 text-sm">
          Click on the Vite and React logos to learn more
        </p>
      </div>
    </div>
  )
}

export default App
