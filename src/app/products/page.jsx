import React from 'react'
import NavBar from '@/components/navBar/NavBar'
import styles from './products.module.scss'

export default function ProductsPage() {
  return (
    <main className={styles.main}>
        <NavBar />
        <section className={styles.FilterSection}>
            <h6>Home {">"} span</h6>
            <ul className={styles.filterList}>
                <li>
                    <div className={styles.title}>women <i className="ri-arrow-right-s-line"></i></div>

                    <div className={styles.dropdown}>
                        <ul>
                            <li>Subelemento 1</li>
                            <li>Subelemento 2</li>
                        </ul>
                    </div>
                    
                </li>
                <li>
                    <div className={styles.title}>women <i className="ri-arrow-right-s-line"></i></div>

                    <div className={styles.dropdown}>
                        <ul>
                            <li>Subelemento 1</li>
                            <li>Subelemento 2</li>
                        </ul>
                    </div>
                    
                </li>
                <li>
                    <div className={styles.title}>women <i className="ri-arrow-right-s-line"></i></div>

                    <div className={styles.dropdown}>
                        <ul>
                            <li>Subelemento 1</li>
                            <li>Subelemento 2</li>
                        </ul>
                    </div>
                    
                </li>
                <li>
                    <div className={styles.title}>women <i className="ri-arrow-right-s-line"></i></div>

                    <div className={styles.dropdown}>
                        <ul>
                            <li>Subelemento 1</li>
                            <li>Subelemento 2</li>
                        </ul>
                    </div>
                    
                </li>
                <li>
                    <div className={styles.title}>women <i className="ri-arrow-right-s-line"></i></div>

                    <div className={styles.dropdown}>
                        <ul>
                            <li>Subelemento 1</li>
                            <li>Subelemento 2</li>
                        </ul>
                    </div>
                    
                </li>
                <li>
                    <div className={styles.title}>women <i className="ri-arrow-right-s-line"></i></div>

                    <div className={styles.dropdown}>
                        <ul>
                            <li>Subelemento 1</li>
                            <li>Subelemento 2</li>
                        </ul>
                    </div>
                    
                </li>
                <li>
                    <div className={styles.title}>women <i className="ri-arrow-right-s-line"></i></div>

                    <div className={styles.dropdown}>
                        <ul>
                            <li>Subelemento 1</li>
                            <li>Subelemento 2</li>
                        </ul>
                    </div>
                    
                </li>
            </ul>
        </section>
    </main>
  )
}
