import React, { Suspense, lazy } from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
const SampleControl = lazy(() => import('microfrontend1/SampleControl').catch(() => {
  return { default: () => <div className='error'>Component is not available!</div> };
})
);

const App = () => (
  <div className="container">
    <div>Name: host</div>
    <div>Framework: react</div>
    <div>Language: TypeScript</div>
    <div>CSS: Empty CSS</div>
    <Suspense fallback={<div>Loading...</div>}>
      <SampleControl />
    </Suspense>
  </div>
)
const rootElement = document.getElementById('app')
if (!rootElement) throw new Error('Failed to find the root element')

const root = ReactDOM.createRoot(rootElement as HTMLElement)

root.render(<App />)
