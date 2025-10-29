import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.js'
import App from './App.jsx'
import React from 'react'

const rootElement = document.getElementById('root')
const root = createRoot(rootElement)

root.render(
	React.createElement(StrictMode, null, React.createElement(App, null))
)
