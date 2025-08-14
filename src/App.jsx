import React from 'react'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-accent-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
                SuburbMates
              </h1>
            </div>
            <div className="text-sm text-secondary-600">
              Phase 0: Foundation
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="mb-8">
            <span className="text-6xl">🏠</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-secondary-900 mb-6">
            Welcome to SuburbMates
          </h1>
          <p className="text-xl text-secondary-600 mb-8 max-w-2xl mx-auto">
            Connecting Melbourne neighbors for everyday tasks. 
            Building stronger communities, one task at a time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary">
              Coming Soon: Post a Task
            </button>
            <button className="btn-accent">
              Coming Soon: Become a Helper
            </button>
          </div>
        </div>

        {/* Status Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <div className="bg-white rounded-lg p-6 shadow-sm border border-secondary-200">
            <div className="text-3xl mb-4">✅</div>
            <h3 className="text-lg font-semibold text-secondary-900 mb-2">
              Phase 0 Complete
            </h3>
            <p className="text-secondary-600">
              Foundation infrastructure deployed and verified
            </p>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-sm border border-secondary-200">
            <div className="text-3xl mb-4">🚀</div>
            <h3 className="text-lg font-semibold text-secondary-900 mb-2">
              Deployment Pipeline
            </h3>
            <p className="text-secondary-600">
              GitHub → Vercel integration working perfectly
            </p>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-sm border border-secondary-200">
            <div className="text-3xl mb-4">🔧</div>
            <h3 className="text-lg font-semibold text-secondary-900 mb-2">
              Ready for Phase 1
            </h3>
            <p className="text-secondary-600">
              User authentication and profiles coming next
            </p>
          </div>
        </div>

        {/* Technical Details */}
        <div className="bg-white rounded-lg p-8 shadow-sm border border-secondary-200">
          <h2 className="text-2xl font-bold text-secondary-900 mb-6">
            Phase 0: Technical Foundation
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-secondary-900 mb-4">
                ✅ Infrastructure Complete
              </h3>
              <ul className="space-y-2 text-secondary-600">
                <li>• React 18+ with Vite build system</li>
                <li>• Tailwind CSS with custom design system</li>
                <li>• Professional project structure</li>
                <li>• Vercel deployment configuration</li>
                <li>• GitHub repository integration</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-secondary-900 mb-4">
                🎯 Phase 1 Preview
              </h3>
              <ul className="space-y-2 text-secondary-600">
                <li>• Supabase authentication setup</li>
                <li>• User registration and login</li>
                <li>• Profile management system</li>
                <li>• Row Level Security implementation</li>
                <li>• Protected routes and navigation</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-8 p-4 bg-primary-50 rounded-lg border border-primary-200">
            <h4 className="font-semibold text-primary-900 mb-2">
              🎉 Deployment Success!
            </h4>
            <p className="text-primary-800">
              This page confirms that your entire CI/CD pipeline is working correctly. 
              You can now build features with confidence, knowing that every change 
              will be automatically deployed and testable.
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-secondary-200 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-secondary-600">
            <p className="mb-2">
              <strong>SuburbMates</strong> - Melbourne's Community Helper Marketplace
            </p>
            <p className="text-sm">
              Phase 0 Foundation • Built with React + Vite + Tailwind CSS
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

