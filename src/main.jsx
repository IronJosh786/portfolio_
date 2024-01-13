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
        path: 'simongame',
        element: <ProjectTemplate 
                    heading={'Simon Game'} 
                    description={'Embark on the captivating Simon Game, an immersive memory challenge that spans multiple levels, each unveiling a new layer of complexity. Powered by HTML, CSS, and JavaScript, this engaging journey allows you to advance through higher levels by accurately replicating sequences of colors and sounds, unlocking additional challenges along the way.'} 
                    site={'https://ironjosh786.github.io/Simon-Game/'} 
                    code={'https://github.com/IronJosh786/Simon-Game'}
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
