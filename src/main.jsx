import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { createBrowserRouter, RouterProvider, Route} from "react-router-dom"

import Home from './routes/Home/Home';
import  Cinemas  from './routes/Cinemas/Cinemas';
import Precos from './routes/Precos/Precos';
import NewPost from './routes/NewPost/NewPost';


const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/cinemas",
        element: <Cinemas/>
      },
      {
        path: "/precos",
        element: <Precos />
      },
      {
        path: "/novo-filme",
        element: <NewPost />
      }
    ],
  },
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
