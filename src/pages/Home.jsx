import React from 'react'
import Hero from '../components/hero/Hero.jsx'
import AboutUs from '../components/aboutus/AboutUs.jsx'
import ContactForm from '../components/contactform/contactForm.jsx'
import Ourbusinesses from './Ourbusinesses.jsx'
import Careers from './Careers.jsx'
import Faq1 from '@/components/FAQs/Faq1.jsx'
import OurStory from '@/components/ourstory/OurStory.jsx'

function Home() {
  return (
    <>
    <div className="min-h-screen">
    <Hero />
    <AboutUs /> 
    <Ourbusinesses/>
    <Careers/>
    <OurStory />
    <ContactForm />
    <Faq1 />
    </div>
    </>
  
  )
}

export default Home