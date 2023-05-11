import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Main from './Layout/Main.jsx'
import Home from './components/Home.jsx'
import NewChocolate from './components/NewChocolate.jsx'
import EditChocolate from './components/EditChocolate.jsx'



const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('http://localhost:5000/allChocolate')
      },
      {
        path: 'newChocolate',
        element: <NewChocolate></NewChocolate>
      },
      {
        path: 'editChocolate/:id',
        element: <EditChocolate></EditChocolate>,
        loader: ({params}) => fetch(`http://localhost:5000/allChocolate/${params.id}`)
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
