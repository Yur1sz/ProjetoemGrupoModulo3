import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { createBrowserRouter, RouterProvider, Route} from "react-router-dom"

import Home from './routes/Home/Home';
import  Cinemas  from './routes/Cinemas/Cinemas';
import Precos from './routes/Precos/Precos';


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
      }
    ],
  },
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider basename={process.env.PUBLIC_URL} router={router}/>
  </React.StrictMode>
)
