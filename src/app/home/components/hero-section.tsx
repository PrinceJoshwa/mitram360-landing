import { ChevronDown } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-600 min-h-screen flex items-center overflow-hidden">
      {/* Network Background Pattern */}
      <div className="absolute inset-0">
        {/* Network nodes */}
        <div className="absolute top-20 left-20 w-3 h-3 bg-cyan-400 rounded-full animate-pulse"></div>
        <div className="absolute top-32 left-40 w-2 h-2 bg-cyan-300 rounded-full animate-pulse delay-100"></div>
        <div className="absolute top-40 right-60 w-3 h-3 bg-cyan-400 rounded-full animate-pulse delay-200"></div>
        <div className="absolute bottom-40 left-60 w-2 h-2 bg-cyan-300 rounded-full animate-pulse delay-300"></div>
        <div className="absolute bottom-60 right-40 w-3 h-3 bg-cyan-400 rounded-full animate-pulse delay-500"></div>
        <div className="absolute top-60 left-1/3 w-2 h-2 bg-cyan-300 rounded-full animate-pulse delay-700"></div>
        <div className="absolute bottom-80 right-1/3 w-3 h-3 bg-cyan-400 rounded-full animate-pulse delay-1000"></div>

        {/* Connection Lines */}
        <svg className="absolute inset-0 w-full h-full opacity-30">
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(34, 211, 238, 0.6)" />
              <stop offset="100%" stopColor="rgba(34, 211, 238, 0.1)" />
            </linearGradient>
          </defs>
          <line x1="80" y1="80" x2="160" y2="128" stroke="url(#lineGradient)" strokeWidth="1" />
          <line x1="160" y1="128" x2="400" y2="160" stroke="url(#lineGradient)" strokeWidth="1" />
          <line x1="240" y1="240" x2="400" y2="160" stroke="url(#lineGradient)" strokeWidth="1" />
          <line x1="240" y1="320" x2="500" y2="240" stroke="url(#lineGradient)" strokeWidth="1" />
          <line x1="300" y1="400" x2="600" y2="300" stroke="url(#lineGradient)" strokeWidth="1" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 tracking-wide">
            THE FUTU
            <span className="relative inline-block">
              <span className="text-orange-500">R</span>
              <div className="absolute -top-3 -right-3 w-10 h-10 border-3 border-orange-500 rounded-full flex items-center justify-center">
                <div className="w-4 h-4 bg-orange-500 rounded-full"></div>
              </div>
            </span>
            E OF LENDING
          </h1>
          <div className="mt-20">
            <ChevronDown className="w-10 h-10 text-white mx-auto animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  )
}
