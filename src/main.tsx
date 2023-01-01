import React from 'react'
import ReactDOM from 'react-dom/client'
import { theme } from './theme'
import { ConfigProvider } from 'antd'
import App from './App';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ConfigProvider theme={theme} >
      <App />
    </ConfigProvider>
  </React.StrictMode>,
)
