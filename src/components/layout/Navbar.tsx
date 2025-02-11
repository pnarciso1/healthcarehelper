export function Navbar() {
  return (
    <nav className="fixed top-0 z-50 w-full bg-navy/80 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center space-x-2">
              {/* We'll add logo later if needed */}
              <span className="text-xl font-bold text-white">Healthcare Helper</span>
            </a>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center sm:space-x-8">
            <a href="#problem" className="text-white hover:text-primary transition-colors">Problem</a>
            <a href="#solution" className="text-white hover:text-primary transition-colors">Solution</a>
            <a href="#use-cases" className="text-white hover:text-primary transition-colors">Use Cases</a>
            <button className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors">
              Early Access
            </button>
          </div>
          
          {/* Mobile menu button */}
          <div className="sm:hidden">
            <button className="text-white p-2">
              <svg className="h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
} 