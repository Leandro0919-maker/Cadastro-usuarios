import React from 'react'
import ReactDom from 'react-dom/client'
import { GlobalStyles } from './styles/GlobalStyles.js'
import {RouterProvider} from 'react-router-dom'
import router from './routes.jsx'

ReactDom.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyles />
    <RouterProvider router={router} />
  </React.StrictMode>,
)
