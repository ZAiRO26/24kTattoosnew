import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ErrorBoundary from './components/ErrorBoundary.jsx'
import { preloadCriticalResources } from './utils/performanceOptimizations.js'
import { runAllTests } from './utils/testingUtils.js'

// Preload critical resources
preloadCriticalResources([
  'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400', // Logo placeholder
  'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap'
])

// Run comprehensive testing in development
if (import.meta.env.DEV) {
  // Wait for DOM to be ready before running tests
  document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
      runAllTests().then(({ results, recommendations }) => {
        console.log('🎯 Testing completed successfully!');
        if (recommendations.length > 0) {
          console.warn('⚠️ Recommendations for improvement:', recommendations);
        }
      }).catch(error => {
        console.error('❌ Testing failed:', error);
      });
    }, 2000); // Wait 2 seconds for initial render
  });
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>,
)

