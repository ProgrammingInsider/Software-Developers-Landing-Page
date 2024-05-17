import React, { useEffect } from 'react'
// import './index.css';

// Components
import Header from './components/Header'
import Footer from './components/Footer'
import Hero from './components/Hero'
import ITsolutions from './components/ITsolutions'
import ITsolutions2 from './components/ITsolutions2'
import DataVisualization from './components/DataVisualization'
import Features from './components/Features'
import Service from './components/Service'
import Webanalytics from './components/Webanalytics'
import Contact from './components/Contact'

const App = () => {
   return <>
       <Header/>
       <Hero/>
       <Features/>
       <DataVisualization/>
       <ITsolutions/>
       <Service/>
       <ITsolutions2/>
       <Webanalytics/>
       <Contact/>
       <Footer/>
   </>
}

export default App