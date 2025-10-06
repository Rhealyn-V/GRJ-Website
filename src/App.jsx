import React from 'react'
import Home from './pages/Home.jsx'
import Careers from './pages/Careers.jsx'
import { Route, createRoutesFromElements, RouterProvider,createBrowserRouter } from 'react-router-dom'
import RootLayouts from './layouts/RootLayouts.jsx'
import contactForm from './components/contactform/contactForm.jsx'
import Open_roles from './components/aboutus/Open_roles.jsx'
import Internship_program from './components/aboutus/Internship_program.jsx'
import Our_values from './components/aboutus/Our_values.jsx'
import General_information from './components/aboutus/General_information.jsx'
import Office_Hours from './components/aboutus/Office_Hours.jsx'
import Pawnshop from './pages/Branch/Pawnshop.jsx'

const App = () => {


  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayouts/>}> 
        <Route index element={<Home/>}/>
        <Route path='careers' element={<Careers/>}/>
        <Route path='open_roles' element={<Open_roles/>}/>
        <Route path='internship_program' element={<Internship_program/>}/>
        <Route path='our_values' element={<Our_values/>}/>
        <Route path='general_information' element={<General_information/>}/>
        <Route path='Office_Hours' element={<Office_Hours/>}/>
        <Route path='pawnshop' element={<Pawnshop/>}/>
      </Route>
    )
  )

  return (
    <RouterProvider router={router} />
  )
}

export default App
