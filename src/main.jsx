import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/index.css'

import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import Paths from './Paths'

// import App from './components/App'

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    {/* <App /> */}
    <BrowserRouter>
      <Paths />
    </BrowserRouter>
  </>
)
