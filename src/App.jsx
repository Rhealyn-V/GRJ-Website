import React from 'react'
import Home from './pages/Home.jsx'
import Careers from './pages/Careers.jsx'
import { Route, createRoutesFromElements, RouterProvider,createBrowserRouter } from 'react-router-dom'
import RootLayouts from './layouts/RootLayouts.jsx'


const App = () => {


  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayouts/>}> 
        <Route index element={<Home/>}/>
        <Route path='careers' element={<Careers/>}/>
      </Route>
    )
  )

  return (
    <RouterProvider router={router} />
  )
}

export default App
