import React from 'react'
import styles from './NavBar.module.scss'
import Image from 'next/image'
import logo from '#/logoB.svg'
import 'remixicon/fonts/remixicon.css'


export default function NavBar() {
  return (
    <nav className={styles.nav_bar}>
        <div className={styles.logo_container}>
            <Image className={styles.Image} src={logo} width={35} height={35}/>
            <p>Bespoke</p>
        </div>
        <ul className={styles.nav_list}>
            <li>
                <a href="#">
                    <p>Shop</p>
                    <i className="ri-arrow-down-s-line"></i>
                </a>
            </li>
            <li>
                <a href="#">
                    <p>Top sellers</p>
                </a>
            </li>
            <li>
                <a href="#">
                    <p>New products</p>
                </a>
            </li>
            <li>
                <a href="#">
                    <p>More</p>
                </a>
            </li>
        </ul>
        <div className={styles.search_container}>
            <span>
                <i className="ri-search-2-line"></i>
                <input placeholder="Search" type="text" />
            </span>
        </div>
        <div className={styles.btn_container}>
            <button><i className="ri-shopping-cart-2-line"></i></button>
        </div>
    </nav>
  )
}
