import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import { CounterContextProvider } from './components/context/CounterContext.tsx'
import { TitleColorContextProvider } from './components/context/TitleColorContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* 2- criando provider */}
    <CounterContextProvider>
      <TitleColorContextProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </TitleColorContextProvider>
    </CounterContextProvider>
  </StrictMode>,
)
