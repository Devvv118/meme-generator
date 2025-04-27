import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
// https://api.imgflip.com/get_memes
// https://github.com/xdelmo/meme-generator/blob/master/src/components/Meme.js
// https://meme-generator-xdelmo.netlify.app/

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
