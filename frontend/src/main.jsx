import React from 'react'
import {createRoot} from 'react-dom/client'
import './style.css'
import App from './App'
import Titlebar from './Titlebar'

const container = document.getElementById('root')

const root = createRoot(container)

root.render(
    <React.StrictMode>
        <Titlebar/>
        <App/>
    </React.StrictMode>
)
