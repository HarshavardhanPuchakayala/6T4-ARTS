import React from 'react'
import './About.css'
export default function About() {
  return (
   <section className="AboutSection" id="about">
    <div className="AboutContent">
        <h2 className="sectionTitle">About me</h2>
        <span className="sectionSubtitle">My introduction</span>
    </div>
    <div className="aboutContainer container">
        <img src="./assets/Profile.jpg" alt="" className='aboutImg' />
        <div className="aboutData">   
            <p className="aboutDescription">

            Welcome to 6T4 Arts, where creativity meets expression! Our passion lies in crafting stunning artworks that capture emotions and tell unique stories. At 6T4 Arts, we specialize in drawing and representing art in its most vibrant and captivating forms. 
            Every piece we create is a reflection of our dedication to innovation and artistic excellence. 
           
                   <br/><br/>
                   Our journey is driven by the desire to inspire, connect, and bring imagination to life. Explore our gallery to witness the magic of artistry. Let 6T4 Arts add a splash of creativity to your world!
               </p>
        </div>
    </div>
   </section>
  )
}
