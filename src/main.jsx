import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { Login } from './containers/login'
import  GlobalStyle  from './styles/globalStyles'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalStyle />
    <Login />
  </StrictMode>,
);
