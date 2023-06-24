import React from 'react'
import styles from './AdminNavBar.module.scss'
import Image from 'next/image'
import logo from '#/logoB.svg'
import 'remixicon/fonts/remixicon.css'
import { fireAuth } from '@/app/firebase'

export default function AdminNavBar({AddProduct, setAddProduct}) {
    
  return (
    <nav className={styles.nav_bar}>
        <div className={styles.logo_container}>
            <Image alt='Logo' className={styles.Image} src={logo}/>
            <p>Bespoke</p>
        </div>
        
        
        <div className={styles.btn_container}>
            <div className={styles.search_container}>
                <span>
                    <i className="ri-search-2-line"></i>
                    <input placeholder="Search" type="text" />
                </span>
            </div>
            <button name='Add' onClick={()=> setAddProduct(true)}><i className="ri-add-line"></i></button>
            <button name='Log out' onClick={()=> fireAuth.signOut()}><i className="ri-logout-box-line"></i></button>

        </div>
    </nav>
  )
}
