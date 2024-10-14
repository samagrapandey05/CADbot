import { useEffect, useState } from 'react'
function About() {
    useEffect(()=>{
        console.log("About module loaded")
    },[])
    return (
      <div className="homeBody">
        <h1 className="homeBodyTitle">Our Mission: To Make Your Life Easier</h1>
        <p className="aboutText">Hi there, my name is Samagra Pandey. As a frequent user of CAD tools, I know how time-consuming designing parts can be. I created CADBot to be a digital assistant helping you in your product designing journey. The current beta version supports building a variety of shapes of different dimensions, but the ultimate goal is to immediately generate any shape with a simple description.</p>
      </div>
      
    )
  }
  
  export default About