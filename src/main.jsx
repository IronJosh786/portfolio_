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
        path: 'currencyconverter',
        element: <ProjectTemplate 
                  heading={'Currency Converter'} 
                  description={'A dynamic web application crafted with React. This tool empowers users to seamlessly convert between various currencies, leveraging real-time exchange rates sourced from the Currency API. The user-friendly interface ensures a smooth and intuitive experience, while dynamic updates guarantee accuracy by fetching real-time data from the Currency API. Effortlessly navigate the world of currency exchange with this responsive and feature-rich Currency Converter.'} 
                  site={'https://guileless-bubblegum-5258c0.netlify.app/'} 
                  code={'https://github.com/IronJosh786/Currency-Converter'}
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
