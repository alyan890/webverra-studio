import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Removed StrictMode to prevent 3D engine double-initialization glitches
createRoot(document.getElementById('root')).render(
    <App />
)
