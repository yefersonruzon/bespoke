import Image from 'next/image'
import styles from './page.module.scss'
import NavBar from '@/components/navBar/NavBar'
import Footer from '@/components/footer/Footer'



export default function Home() {
    
  return (
    <main className={styles.home_page}>
    <NavBar />

    <section className={styles.main_section}>
        <div className={styles.main_content}>
            <h1 >Unleash Your Fashion Potential <br /> with  Our Unique Clothing Collection</h1>
            <p>Discover a unique collection of clothing that will elevate your style to new heights. Unleash your fashion potential with us.</p>
            <div>
                <button>Contact Us</button>
                <button>Shop now <i className="ri-arrow-right-line"></i></button>
            </div>
        </div>
        <div className={styles.img_design}>
            <img src="https://images.pexels.com/photos/4066292/pexels-photo-4066292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            <img src="https://images.pexels.com/photos/7691346/pexels-photo-7691346.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        </div>
        
    </section>
    <section className={styles.section_two}>
        <div className={styles.experiences}>
            <span className={styles.tittle}>
                <h3>We provide best <br /> customer experiences</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </span>
            <article className={styles.flex_row}>
                <div className={styles.article_card}>
                    <i className="ri-shirt-line"></i>
                    <h4>Lorem, ipsum dolor.</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit elit.</p>
                </div>
                <div className={styles.article_card}>
                    <i className="ri-secure-payment-line"></i>
                    <h4>Lorem, ipsum dolor.</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit elit.</p>
                </div>
                <div className={styles.article_card}>
                    <i className="ri-t-shirt-air-line"></i>
                    <h4>Lorem, ipsum dolor.</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit elit.</p>
                </div>
                <div className={styles.article_card}>
                    <i className="ri-truck-line"></i>
                    <h4>Lorem, ipsum dolor.</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit elit.</p>
                </div>
            </article>
        </div>
        <div className={styles.filters_section}>
            <h3>sections and filters</h3>
            <div className={styles.flex}>
                <div className={styles.card}>
                    <span>Shop Men <i className="ri-arrow-right-line"></i></span>
                </div>
                <div className={styles.card}>
                    <span>Shop Men <i className="ri-arrow-right-line"></i></span>
                </div>
                <div className={styles.card}>
                    <span>Shop Men <i className="ri-arrow-right-line"></i></span>
                </div>
                <div className={styles.card}>
                    <span>Shop Men <i className="ri-arrow-right-line"></i></span>
                </div>
            </div>
        </div>
        <div className={styles.featured_section}>
            <h3>Featured Products</h3>
            <div className={styles.flex}>
                <div className={styles.card}>
                    <div className={styles.image}>
                    </div>
                    <h4>Black dress</h4>
                    <div className={styles.price}>
                        <p>$45</p><span>$52</span>
                    </div>
                    <i className="ri-shopping-cart-2-line"></i>
                </div>
                <div className={styles.card}>
                    <div className={styles.image}>
                        <span>Few units</span>
                    </div>
                    <h4>Black dress</h4>
                    <div className={styles.price}>
                        <p>$45</p>
                    </div>
                    <i className="ri-shopping-cart-2-line"></i>
                </div>
                <div className={styles.card}>
                    <div className={styles.image}>
                        <span>Few units</span>
                    </div>
                    <h4>Black dress</h4>
                    <div className={styles.price}>
                        <p>$45</p><span>$52</span>
                    </div>
                    <i className="ri-shopping-cart-2-line"></i>
                </div>
            </div>
        </div>
        <div className={`${styles.filters_section} ${styles.two}`}>
            <h3>sections and filters</h3>
            <div className={styles.flex}>
                <div className={styles.card}>
                    <span>Shop Men <i className="ri-arrow-right-line"></i></span>
                </div>
                <div className={styles.card}>
                    <span>Shop Men <i className="ri-arrow-right-line"></i></span>
                </div>
                <div className={styles.card}>
                    <span>Shop Men <i className="ri-arrow-right-line"></i></span>
                </div>
                <div className={styles.card}>
                    <span>Shop Men <i className="ri-arrow-right-line"></i></span>
                </div>
            </div>
        </div>
        <div className={styles.brands}>
            <h3>Brands</h3>
            <div className={styles.img}>
                <img src="http://s3.gomedia.us/wp-content/uploads/2015/05/Nike_Swoosh_Logo_Black_original.jpg" alt="" />
                <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.1fIGcDTCajTkyQXzJipD3wHaHa%26pid%3DApi&f=1&ipt=87aa6f9564be877f1040002500640b11c19d9cf4fadd668d6e1c7cff504958f3&ipo=images" alt="" />
                <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.karrieretag.org%2Fwp-content%2Fuploads%2F2019%2F06%2FCalvin-Klein-Logo.png&f=1&nofb=1&ipt=be4a98365c06c35b307faab0a2dc0ea87801aa341c7f76930a540040b433f574&ipo=images" alt="" />
                <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.EhkuPdLeK7IZlES6duLy3wHaHa%26pid%3DApi&f=1&ipt=6ef1e81c68b19bf10b961b193af66f9c1d41470d7c87f5d93715acda56c79aba&ipo=images" alt="" />
                <img src="https://1000logos.net/wp-content/uploads/2018/03/Thrasher-Logo.jpg" alt="" />
                <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.uKSJS96wCF43cFSVq-yvEQHaD4%26pid%3DApi&f=1&ipt=3456b2c693222f0054d4216af1d42c59d5ab757b0d9c90ebabee005d22066fdf&ipo=images" alt="" />
                <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.a-hkOXZZ5eVUeDwJk_jKNAHaCh%26pid%3DApi&f=1&ipt=4f7ae77e05264e8abd3826f953025a20ee0344c89da830c2896aff15c955d3a8&ipo=images" alt="" />
            </div>
        </div>
        
        <div className={styles.Offers}>
            <img src="https://images.pexels.com/photos/4066292/pexels-photo-4066292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="#" />
            <div>
                <b>Offer</b>
                <h3>During our discount week, we are offering a 20% discount on all of our products.</h3>
                <button>Buy now</button>
            </div>
        </div>

        <div className={styles.Contact}>
            <h3 >Contact us to learn more about our company and get customer support</h3>
            <p>Customer service hours are from 8am to 10pm.</p>
            <form action="">
                <div>
                    <i className="ri-chat-1-line"></i>
                    <input placeholder="expample@email.com" type="text" />
                </div>
                <button>Contact now</button>
            </form>
            <p>If our customer service is not efficient you can send us directly to our <a href="#">e-mail address</a></p>
        </div>
    </section>
    <Footer />

</main>
  )
}
