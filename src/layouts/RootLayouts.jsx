import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/header/Header.jsx'
import Footer from '../components/footer/Footer.jsx'
import ScorllTotop from '../components/ScrollToTop.jsx'

function RootLayouts() {
  return (
    <div>
        <ScorllTotop />
        <Header />
        <Outlet />
        <Footer />
    </div>
  )
}

export default RootLayouts