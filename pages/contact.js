import React, { useRef } from 'react';
import Navbar from '../components/Navbar'
import styles from '../styles/Contact.module.css'
import Image from 'next/dist/client/image'
import { useState } from 'react'
import Head from 'next/head'
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from 'react-toastify'
import validator from 'validator'
import loader from '../public/loader/loader.gif'
import emailjs from '@emailjs/browser';
import Footer from '../components/Footer';


function Contact() {
    const [name,setname]=useState('')
    const [email,setemail]=useState('')
    const [message,setmessage]=useState('')
  const [loading, setloading] = useState(false)
   
  const form = useRef(); 

    const err = (msg) => {

        toast.error(msg, {
            'position': 'bottom-right',
            'theme': 'colored'
        })
    }
    
    const validate = () => {
        if (!email) {
            err('provide email')
            return false
        }
        if (!name) {
            err('provide name')
            return false
        }
        else if (!message) {
            err('provide message')
            return false
        }
  
        else if(!validator.isEmail(email)){
            err('Invalid Email Provided')
            return false
        }
        return true
    }
    

    
    const submithandler=async (e)=>{
        e.preventDefault()
        const v = validate()
        if(v){
         setloading(true)
         emailjs.sendForm(process.env.NEXT_PUBLIC_SERVICE_ID, process.env.NEXT_PUBLIC_TEMPLATE_ID, form.current, process.env.NEXT_PUBLIC_PUBLIC_KEY)
         .then((result) => {
            setloading(false)
            toast.success('Message Sent Successfully', {
                'position': 'bottom-right',
                'theme': 'colored'
              })
              setmessage('')
              setname('')
              setemail('')
         }).catch((error)=>{
                setloading(false)
                err("something went wrong !")
         });
    }}
    
  return (
  <>
   <Head>
        <title>CONTACT | MOHD  AMMMAR</title>                    
        <meta name="description" content="contact Mohd Ammar" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap" rel="stylesheet"></link>
        <link rel="icon" href="/favicon.ico" />                   
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
         <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Secular+One&display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Nerko+One&display=swap" rel="stylesheet"/>
       </Head>
  <div className={styles.container}>
  <Navbar />
  <div className={styles.contact_form}>
    <div className={styles.part_1}>
        <h1>Lets talk about</h1>
        <h3>everything !</h3>
    </div>
    <div className={styles.part_2}>
        <form ref={form}  className={styles.contact_form2}>
            <input type='text' value={name} name='name'  onChange={(e)=>{setname(e.target.value)}} className={styles.form_inp} placeholder='enter your name here ' />
            <input type='text' value={email} name='email'  onChange={(e)=>{setemail(e.target.value)}} className={styles.form_inp} placeholder='enter your email here' />
            <textarea type='text' value={message} name='message' onChange={(e)=>{setmessage(e.target.value)}} className={styles.form_text} placeholder='enter message here' />
            {loading ? <div className={styles.load} ><Image height={60} className={styles.loaderimage} src={loader} alt='loader' /></div> : <button className={styles.sub}  onClick={submithandler} type='submit' >Send</button>}

        </form>


    </div>

  </div>
  </div>
  <Footer />
  <ToastContainer />
  </>
  )
}

export default Contact
