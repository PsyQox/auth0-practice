import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { Auth0Provider } from '@auth0/auth0-react'

createRoot(document.getElementById('root')).render(
  <Auth0Provider
  domain='dev-anf78jyfpwsgqql8.us.auth0.com'
  clientId='gwPODv6GaeWbUiWNj0vYbtkoWbi7AQsz'
  authorizationParams={{
    redirect_uri: window.location.origin
  }}
  >
    <BrowserRouter>
          <App />
    </BrowserRouter>
  </Auth0Provider>

)