import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { ThemeProvider } from './context/ThemeContext'
import { SqlProvider } from './context/SqlContext'
import { TsProvider } from './context/TsContext'
import { LanguageProvider } from './context/LanguageContext'
import { AuthProvider } from './context/AuthProvider'
import { AudioProvider } from './context/AudioContext'
import { RouterProvider } from 'react-router-dom'
import { router } from './router'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <AuthProvider>
        <LanguageProvider>
          <AudioProvider>
            <SqlProvider>
              <TsProvider>
                <RouterProvider router={router} />
              </TsProvider>
            </SqlProvider>
          </AudioProvider>
        </LanguageProvider>
      </AuthProvider>
    </ThemeProvider>
  </StrictMode>,
)
