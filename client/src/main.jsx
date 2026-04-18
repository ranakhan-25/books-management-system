import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./index.css"
import {createBrowserRouter,RouterProvider} from "react-router"
import ErrorPage from './pages/ErrorPage'
import Home from './pages/home/Home'
import App from "./App.jsx"
import ProviderContext from './context/ProviderContext.jsx'
import Books from './components/Books.jsx'
import UpdateBook from './components/UpdateBook.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "shop",
        element: <Books />
      },
      {
        path: "book/:id",
        element: <UpdateBook />
      }
    ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ProviderContext>
      <RouterProvider router={router} />
    </ProviderContext>
  </StrictMode>,
)
