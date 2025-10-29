import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.js'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
	React.createElement(StrictMode, null, React.createElement(App, null))
)
