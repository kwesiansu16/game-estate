import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <section className="h-wrapper">
        <div className="flexCenter paddings innerWidth h-container">
            <img src="./gameit.png" alt="" width={200}/>

            <div className="flexCenter h-menu">
               <a href="">Residencies</a>
               <a href="">Our Values</a>
               <a href="">Get Started</a>
               <a href="">Our Listings</a>
               
               <button className='button'>
               <a href="">Contact</a> 
               </button>
               
            </div>
        </div>
    </section>
  )
}

export default Header
