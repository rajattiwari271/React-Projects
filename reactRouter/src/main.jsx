import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './components/Home/Home.jsx'
import Layout from'./Layout.jsx' 
import Contact from './components/Contact/Contact.jsx'

import { createBrowserRouter, createRoutesFromElements, RouterProvider,Route , } from 'react-router-dom'
import About from './components/About/About.jsx'

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element : <Layout />,
//     children : [
//       {
//         path: "",
//         element: <Home />
//       }, {
//         path: "about",
//         element: <About />
//       }
//     ]
//   }
// ])


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element = {<Layout />}>
      <Route path='home' element= {<Home />}/>
       <Route path='about' element= {<About />}/>
        <Route path='contact' element= {<Contact />}/>
    </Route>
  )
)


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {router} />
  </StrictMode>,
)
