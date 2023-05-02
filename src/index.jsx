import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import AuthProvider from './providers/AuthProvider.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import { ConfigProvider, theme } from 'antd'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ConfigProvider
      theme={{
        // algorithm: theme.darkAlgorithm,
        token: {
          colorPrimary: '#b57482',
          colorLink: '#b57482',
        }
      }}
    >
    <AuthProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AuthProvider>
    </ConfigProvider>
  </React.StrictMode>,
)