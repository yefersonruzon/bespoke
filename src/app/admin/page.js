'use client';   


import React from 'react'
import styles from './auth.module.scss'
import Image from 'next/image'
import logo from '#/logoB.svg'
import 'remixicon/fonts/remixicon.css'
import { signInWithEmailAndPassword,getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { fireAuth } from '../firebase'
import { useState, useEffect } from 'react'
import AdminNavBar from '@/components/adminNavBar/AdminNavBar';
import { getDownloadURL,getStorage , ref, uploadBytesResumable, deleteObject} from 'firebase/storage'
import { uuidv4 } from "@firebase/util";
import { db } from '../firebase';
import { setDoc, doc, collection, getDocs, deleteDoc } from "firebase/firestore";


export default function auth() {
    
    const [userLogin, setUserLogin] = useState(false);
    const [AddProduct, setAddProduct] = useState(false);
    const [ImageProduct, setImageProduct] = useState("");
    const [price, setPrice] = useState(0);
    const [pricePreview, setPricePreview] = useState(0);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [discount, setDiscount] = useState(0);
    //preview
    const [previewImageProduct, setPreviewImageProduct] = useState("");
    //getDocs
    const [listProducts, setListProducts] = useState([]);


    const auth = getAuth()
    const storage = getStorage()

    const SubmitProduct = async (title, description, discount, price, ImageProduct) =>{
        const id = uuidv4()
        const storangeRef =  ref(storage,  "products/" + title + '-' + id + '.png')
        const snapshot = await uploadBytesResumable(storangeRef, ImageProduct)
        const url = await getDownloadURL(storangeRef).then(
            setTimeSleep(!TimeSleep)
        )
        await setDoc(doc(db, "products", title  + "-" + id),{
          Title:title,
          Description:description,
          Price:price,
          Discount:discount,
          ProductImage:url,
          Id:id,
        })
      }

      const submitProductInfo = (e) =>{
          e.preventDefault();
          let valueTitle = e.target.title.value;
          let valueDescription = e.target.description.value;
          let valueDiscount = e.target.discount.value;
          let valuePrice = e.target.price.value;

        
        //   let totalPrice = valuePrice - (valuePrice * (valueDiscount / 100))

          SubmitProduct(valueTitle, valueDescription, valueDiscount, valuePrice, ImageProduct).then(console.log("complete")).then(
            document.getElementById("formAddProduct").reset(),
            setImageProduct(""),
            setPreviewImageProduct(""),
            setDescription(""),
            setTitle(""),
            setPrice(""),
            setDiscount(""),
            setAddProduct(false),
            
            );
        }


    const handlerChangeImage = (e) =>{
        if (e.target.files[0]){
            setImageProduct(e.target.files[0])
            setPreviewImageProduct(URL.createObjectURL(e.target.files[0]));

        }
    }



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
  
        
        const postCollectionRef = collection(db, "products");
        const [TimeSleep, setTimeSleep] = useState(false);

        useEffect(() => {
            const getDocuments = async () => {
                const data = await getDocs(postCollectionRef);
                setListProducts(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
            };
            getDocuments();
        }, [TimeSleep]);

        setTimeout(() => {
            setTimeSleep(true)
        }, 2000);

    const DeleteDoc = async (title, id) =>{
        let DeleteRef = doc(db,"products", title  + "-" + id)
        deleteDoc(DeleteRef)
        let ImageRef = ref(storage, "products/" + title + "-" + id + ".png")
        deleteObject(ImageRef)
        
    }


    return (
        userLogin ? 

        <>
            <main className={styles.AddProductMain}>
            <AdminNavBar AddProduct={AddProduct} setAddProduct={setAddProduct}/>
 

            {
                AddProduct ?
                    <section className={styles.addProductSection}>
                        <div className={styles.ProductForm}>
                            <form onSubmit={submitProductInfo} id="formAddProduct">
                                <h2>Add a new product</h2>
                                
                                <div className={styles.input_container}>
                                    <label htmlFor="title">Title</label>
                                    <input required onChange={(e) => {setTitle(e.target.value)}} placeholder='title...' type="text" id='title' />
                                </div>
                                <div className={styles.input_container}>
                                    <label htmlFor="description">Description</label>
                                    <textarea required onChange={(e) => {setDescription(e.target.value)}} placeholder='description...' id='description' />
                                </div>
                                <div className={styles.input_container}>
                                    <label htmlFor="price">Price</label>
                                    <input required onChange={(e) => {setPrice(e.target.value); setPricePreview(e.target.value)}} min="0" placeholder='price...' type="number" id='price' />
                                </div>
                                <div className={styles.input_container}>
                                    <label htmlFor="discount">Discount</label>
                                    <input onChange={(e) => {setDiscount(e.target.value);}} max="90" min="0" placeholder='discount...' type="number" id='discount' />
                                </div>
                                <div className={styles.input_container}>
                                    <label className={styles.imageLabel} htmlFor="ProductImage"><i className="ri-upload-cloud-2-line"></i></label>
                                    <input required className={styles.imageInput} onChange={(e) =>{handlerChangeImage(e); }} type="file" id='ProductImage' />
                                </div>
                                <button className={styles.submitButton} type='submit'>Add Product</button>
                            </form>
                            </div>
                            <div className={styles.ProductPreview}>
                                <div className={styles.ProductPreviewImage}>
                                    {
                                        previewImageProduct ? <img src={previewImageProduct} alt="productImage" /> : null
                                    }
                                </div>
                                <div className={styles.ProductPreviewInfo}>
                                    <h4>{title}<span>${pricePreview}<b>-{discount}%</b></span></h4>
                                    <p>{description}</p>
                                    <i className="ri-shopping-cart-2-line"></i>
                                </div>
                            </div>
                        </section> 
                    : 
                    null
                    
                            
                }
                <section className={styles.ListProductsSection}>
                    {
                        TimeSleep ? 

                        listProducts.map(item =>(
                            <div key={item.Id} className={styles.ListItem}>
                                <img src={item.ProductImage} alt={item.Description} />
                                <div className={styles.titleContainer}>
                                    <h4>{item.Title} <p>{item.Price}<span>-{item.Discount}%</span></p></h4>
                                    <p>{item.Description}</p>
                                    
                                </div>
                                <div className={styles.BtnContainer}>
                                    <button onClick={() => {DeleteDoc(item.Title, item.Id);  setTimeSleep(!TimeSleep)}}>
                                        <i className="ri-delete-bin-5-line"></i>
                                    </button>
                                    <button>
                                        <i className="ri-edit-2-line"></i>
                                    </button>
                                </div>
                            </div>
                        )) 
                        : null
                    }
                </section>

            </main>
        </>



        :
        <main className={styles.LoginPage}>
            <nav className={styles.NavBar}>
                <div className={styles.logoContainer}>
                    <a>
                        <Image className={styles.Image} src={logo} width={35} height={35} alt='Logo'/>
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
