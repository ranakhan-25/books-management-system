import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./index.css"
import {createBrowserRouter,RouterProvider} from "react-router"
import ErrorPage from './pages/ErrorPage'
import Home from './pages/home/Home'
import App from "./App.jsx"


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />
      }
    ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
