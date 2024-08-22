import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Home } from './pages/Home.jsx'
import { About } from './pages/About.jsx'
import { Recipes } from './pages/Recipes.jsx'
import { Contact } from './pages/Contact.jsx'
import { Blog } from './pages/Blog.jsx'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import { GlobalContextFunction } from './context/GlobalContext.jsx'

const router=createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/recipe/about us",
        element:<About/>
      },
      {
        path:"/recipe/recipes",
        element:<Recipes/>
      },
      {
        path:"/recipe/blog",
        element:<Blog/>
      },
      {
        path:"/recipe/contact",
        element:<Contact/>
      },
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalContextFunction>
    <RouterProvider router={(router)}/>
    </GlobalContextFunction>
  </StrictMode>
)
