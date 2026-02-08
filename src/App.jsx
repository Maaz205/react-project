import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Features  from './components/Features'
import Price from './components/Price'
import Contact from './components/Contact'
import Footer from './components/Footer'


function App() {

  return (
    <>
    <section>
<Header/>
    </section>

<section>
<Hero/>
</section>

<section id='features'>
<Features/>
</section>

<section id="price">
  <Price />
</section>

<section id='contact'>
<Contact/>
</section>

<Footer/>
    </>
  )
}

export default App
