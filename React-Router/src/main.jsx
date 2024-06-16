import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/User.jsx'
import Layout from './components/Layout'
import Github,{GithubInfo} from './components/Github/Github.jsx'
import  {Route,RouterProvider,createBrowserRouter,createRoutesFromElements} from 'react-router-dom'

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout/>,
//     children: [
//       {
//         path: '/Home',
//         element: <Home/>
//       },
//       {
//         path: '/User',
//         element: <User/>
//       },
//       {
//         loader: {GithubInfo},
//         path: '/Github',
//         element: <Github/>
//       },
//       {
//         path: '/Contact',
//         element: <Contact/>
//       },
//       {
//         path: '/about',
//         element: <About/>
//       }
//     ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='/Home' element={<Home />} />
      <Route path='About' element={<About />} />
      <Route path='Contact' element={<Contact />} />
      <Route path='User/:userid' element={<User />} />
      <Route
      loader={GithubInfo}
      path='/Github'
      element={<Github/>}
      />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
