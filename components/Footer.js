import React from 'react'
import styles from  '../styles/Footer.module.css'
import Image from 'next/image'
import { useRouter } from 'next/router'

import logo from '../public/images/logo.png'
function Footer() {
  const router=useRouter()

  return (
    <div className={styles.footer}>
      <div className={styles.t}>
        <Image className={styles.im} src={logo} alt="logo"/>
      <div className={styles.name}>CODING FAME</div>
      </div>
      <div className={styles.cpy}>Copyright © 2022 CodingFame.com</div>
      </div>
  )
}

export default Footer
