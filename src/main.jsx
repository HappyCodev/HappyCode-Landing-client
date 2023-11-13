import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter as Router } from 'react-router-dom'
import './styles/styles.scss'
import { ContactProviderWrapper } from './contexts/contact.context.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <ContactProviderWrapper>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ContactProviderWrapper>
  </Router>
)
