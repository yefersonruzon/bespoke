import React from 'react'
import logo from '#/logoBW.svg'
import Image from 'next/image'
import styles from './Footer.module.scss'


export default function Footer() {
  return (
    <footer className={styles.footer}>
        <section className={styles.grid_fototer_section}>
            <div className={styles.logo}>
                <a className={styles.logo_container}>
                    <Image className={styles.Image} src={logo} width={32} height={32}/>
                    <p>Bespoke</p>
                </a>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem.</p>
            </div>
        <ul className={styles.list}>
            <h5>Shop</h5>
            <li>
                <a href="">
                    <p>Women's Clothing</p>
                </a>
            </li>
            <li>
                <a href="">
                    <p>For Sale</p>
                </a>
            </li>
            <li>
                <a href="">
                    <p>Men's Clothing</p>
                </a>
            </li>
            <li>
                <a href="">
                    <p>Accessories</p>
                </a>
            </li>
        </ul>
        <ul className={styles.list}>
            <h5>About Us</h5>
            <li>
                <a href="">
                    <p>Our Story</p>
                </a>
            </li>
            <li>
                <a href="">
                    <p>Our Team</p>
                </a>
            </li>
            <li>
                <a href="">
                    <p>Testimonials</p>
                </a>
            </li>
            <li>
                <a href="">
                    <p>Contact Us</p>
                </a>
            </li>
        </ul>
        <ul className={styles.list}>
            <h5>Products</h5>
            <li>
                <a href="">
                    <p>Size guide</p>
                </a>
            </li>
            <li>
                <a href="">
                    <p>Care instructions</p>
                </a>
            </li>
            <li>
                <a href="">
                    <p>Material information</p>
                </a>
            </li>
            <li>
                <a href="">
                    <p>Product reviews</p>
                </a>
            </li>
        </ul>
            <ul className={`${styles.list} ${styles.social}`}>
                <h5>Connect With Us</h5>
                <li>
                    <a href="">
                        <p>Social Media Links</p>
                    </a>
                </li>
                <li>
                    <a href="">
                        <p>Newsletter Signup</p>
                    </a>
                </li>
                <li>
                    <a href="">
                        <p>Affiliates Program</p>
                    </a>
                </li>
            </ul>
        </section>
    </footer>

  )
}
