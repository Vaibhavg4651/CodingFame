import React, { useState } from 'react'
import styles from '../styles/Navbar.module.css'
import { useRouter } from 'next/router'
import {GiHamburgerMenu } from "react-icons/gi";

function Navbar() {
  const[shownav,setshownav]=useState(false)
  const router=useRouter()
  return (
    
    <nav className={styles.navbar}>
      <div className={styles.hamburger} onClick={()=>{shownav?setshownav(false):setshownav(true)}}>
       <GiHamburgerMenu />
      </div>
      {
        shownav?<div className={styles.slider}>
          <ul className={styles.navul_s}>
            <li className={styles.navol_s } onClick={()=>{router.push('/')}}>HOME</li>
            <li className={styles.navol_s} onClick={()=>{router.push('/blogs')}}>BLOGS</li>
            <li className={styles.navol_s} onClick={()=>{router.push('/contact')}}>CONTACT</li>
        </ul>

        </div>:null
      }
      <div className={styles.logo_div} onClick={()=>{router.push('/')}}>CODING FAME</div>
        <ul className={styles.navul}>
            <li className={styles.navol } onClick={()=>{router.push('/')}}>HOME</li>
            <li className={styles.navol} onClick={()=>{router.push('/blogs')}}>BLOGS</li>
            <li className={styles.navol} onClick={()=>{router.push('/contact')}}>CONTACT</li>
        </ul>
    </nav>
  )
}

export default Navbar
