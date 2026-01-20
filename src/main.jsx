import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ThemeProvider } from './context/ThemeContext'
import { SqlProvider } from './context/SqlContext'
import { TsProvider } from './context/TsContext'
import { LanguageProvider } from './context/LanguageContext'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <SqlProvider>
        <TsProvider>
          <LanguageProvider>
            <App />
          </LanguageProvider>
        </TsProvider>
      </SqlProvider>
    </ThemeProvider>
  </StrictMode>,
)
