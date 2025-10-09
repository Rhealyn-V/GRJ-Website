import React from 'react'
import Hero from '../components/hero/Hero.jsx'
import AboutUs from '../components/aboutus/AboutUs.jsx'
import ContactForm from '../components/contactform/contactForm.jsx'
import Ourbusinesses from './Ourbusinesses.jsx'
import Careers from './Careers.jsx'

function Home() {
  return (
    <>
    <div className="bg-gray-50 min-h-screen">
    <Hero />
    <AboutUs /> 
    <Ourbusinesses/>
    <Careers/>
    <ContactForm />
    </div>
    </>
  
  )
}

export default Home