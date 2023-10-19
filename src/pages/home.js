import React from 'react'
import Navbar from '../components/navbar/navbar'
import Hero from '../components/heroslider/Hero'
import Footer from '../components/footer/footer'
import HeroCat from '../components/heroslider/herocat'

function Home() {
    return (
        <>
            <Navbar />
            <Hero />
            <HeroCat />
            <Footer />
        </>
    )
}

export default Home