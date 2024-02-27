import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import {Skills, Home, ProjectTemplate} from './components/index.js'
import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'pagepalette',
        element: <ProjectTemplate 
                    heading={'Page Palette'} 
                    description={'A dynamic web application skillfully crafted with React and JavaScript. Uncover an extensive collection of books fetched from the Google Books API. Seamlessly explore genres, utilize the search feature to find your next read, and effortlessly bookmark favorites for later. Delve into detailed views for an informed and delightful reading experience.'} 
                    site={'https://page-palette.netlify.app/'} 
                    code={'https://github.com/IronJosh786/PagePalette'}
                  />
      },
      {
        path: 'ecommerce',
        element: <ProjectTemplate 
                    heading={'Ecommerce Shop'} 
                    description={'A dynamic Ecommerce Application built using React and JavaScript. It provides a modern and responsive design for optimal user interaction across various devices. The application leverages the Context API for streamlined state management.'} 
                    site={'https://frontend-clothing-shop.netlify.app/'} 
                    code={'https://github.com/IronJosh786/Ecommerce-Frontend-App'}
                  />
      },
      {
        path: 'todo',
        element: <ProjectTemplate 
                    heading={'To Do'} 
                    description={'A user-friendly React-based application designed for efficient state management through Redux Toolkit. This application empowers users with a seamless interface to effortlessly add, delete, and update todos, providing a streamlined and intuitive experience for managing tasks. Users can enjoy a responsive and organized platform to enhance their productivity and task management efficiency.'} 
                    site={'https://superb-dieffenbachia-c58623.netlify.app/'} 
                    code={'https://github.com/IronJosh786/Todo-Redux-Toolkit'}
                  />
      },
      {
        path: 'skills',
        element: <Skills />
      },
      {
        path: '',
        element: <Home />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
