import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './app/App'
import 'bootstrap/dist/css/bootstrap.min.css';

import { register } from 'swiper/element/bundle';
register();
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
