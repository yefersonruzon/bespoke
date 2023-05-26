'use client';   


import React from 'react'
import styles from './auth.module.scss'
import Image from 'next/image'
import logo from '#/logoB.svg'
import 'remixicon/fonts/remixicon.css'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { fireAuth } from '../firebase'
import { useState, useEffect } from 'react'



export default function auth() {
    
    const [userLogin, setUserLogin] = useState(false);

    useEffect(() => {
      fireAuth.onAuthStateChanged((firebaseUSer) => {
        setUserLogin(firebaseUSer)

      })
    }, []);


    const googleAuth = async (e) =>{
        const provider = new GoogleAuthProvider()
        try{
            const credentials = await signInWithPopup(fireAuth, provider)
            console.log(credentials)
        }catch(error){
            console.log(error)
        }
    }

    const login = async (e)  => {
        e.preventDefault();
        const loginEmail = e.target.emailInput.value;
        const loginPassword = e.target.passwordInput.value;
          
        try{
          const credentials = await signInWithEmailAndPassword(fireAuth, loginEmail, loginPassword);
          console.log(credentials)
        }catch(error){
          console.log(error)
          }
        }
  


    return (
        userLogin ? 
        <main>
            <button onClick={()=> fireAuth.signOut()}>Log out</button>
        </main>
        :
        <main className={styles.LoginPage}>
            <nav className={styles.NavBar}>
                <div className={styles.logoContainer}>
                    <a>
                        <Image className={styles.Image} src={logo} width={35} height={35}/>
                        <p>Bespoke</p>
                    </a>
                </div>
            </nav>
        <form onSubmit={login} id='loginForm' className={styles.Form}>
            <h3>Admin access</h3>
            <p>Enter your details to access your account</p>
            <div className={styles.LoginRow}>
                <span className={styles.GoogleLogin} onClick={(e)=> googleAuth(e)} >
                    <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.HG6XtzIxf4Nbo_vZt8T3EAHaHa%26pid%3DApi&f=1&ipt=a0b79a377e723d23f521558c8b5d479fd9d1c49a245f49673e43aa345d6b4ce1&ipo=images" alt="" />
                    Login with Google
                    
                </span>
                 {/* <span className={styles.GoogleLogin}>
                    <img src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.clipartbest.com%2Fcliparts%2FRcA%2F66L%2FRcA66L65i.png&f=1&nofb=1&ipt=eacc13ba08d0f25b54dd8ef8e5ffdfabf72d810a749964343ad5098e669b2f9c&ipo=images" alt="" />
                    Login with Apple
                    
                </span>  */}
            </div>
            <b className={styles.bTag}>Or</b>
             {/* <div className={styles.InputContainer}>
                <label htmlFor="nameInput">Name<span>*</span></label>
                <input type="text" name="nameInput" placeholder="Enter your name" />
            </div>  */}
            <div className={styles.InputContainer}>
                <label htmlFor="emailInput">Email<span>*</span></label>
                <input type="text" name="emailInput" id='emailInput' placeholder="example@gmail.com" />
            </div>
            <div className={styles.InputContainer}>
                <label htmlFor="passwordInput">Password<span>*</span></label>
                <input type="password" name="passwordInput" id='passwordInput' placeholder="Enter your password" />
            </div>
            <div className={styles.checkBoxContainer}>
                <input type="checkbox" name="keepLogged" id="" />
                <label htmlFor="keepLogged">keep me logged </label>
            </div> 
            <button className={styles.FormBtn}>Login</button>
            <p className={styles.registerlink}>Don't have an account yet? <a>create an account</a></p>
        </form>
        <aside className={styles.asidePage}>
            <div className={styles.content}>
                <h1>Unleash Your Fashion Potential with Our Unique Clothing Collection</h1>
                <p>Discover a unique collection of clothing that will elevate your style to new heights. Unleash your fashion potential with us.</p>
                <div className={styles.rowBtn}>
                    <span><i className="ri-truck-line"></i>Free national delivery</span><span><i className="ri-shield-star-fill"></i>Purchase protection</span>
                </div>
            </div>
        </aside>
        </main> 
  )
}
