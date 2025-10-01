import React from 'react'
import Hero from '../components/hero/Hero.jsx'
import AboutUs from '../components/aboutus/AboutUs.jsx'
import ContactForm from '../components/contactform/contactForm.jsx'
import Teams from '../components/teams/Teams.jsx'

function Home() {
  return (
    <>
    <div className="bg-gray-50 min-h-screen">
    <Hero />
    <ContactForm />
    <Teams />
    <AboutUs />
    </div>
    </>
  
  )
}

export default Home