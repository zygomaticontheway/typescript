import { useEffect, useState } from "react"
import ProductCard from "../productCard/ProductCard"
import styles from "./shop.module.css"

interface IProductCard { 
    id: number; 
    title: string; 
    price: number; 
    description: string; 
    category: string; 
    image: string 
}

export default function Shop() {
    
    const fetchShop = async () => {
        const res = await fetch ('https://fakestoreapi.com/products')
        const data = await res.json()
        
        if(res.ok){
            setProductCards(data);
        } else{
            <p>fetchShop failed ☠️</p>
        }
    }
    const [productCards, setProductCards] = useState<IProductCard[]> ([]);
    console.log(productCards);
    
    useEffect(() => {
        fetchShop();
        console.log("get data!");
        
    }, [])

  return (
    <div className="lesson-container">
        <h1>Oh my Shop </h1>
        {productCards.length > 0 && (
            <div className={styles.cardsContainer}>
                {productCards.map((item) => (
                    <ProductCard id={item.id} title={item.title} price={item.price} description={item.description} category={item.category} image={item.image} />
                ))}  
            </div>
        )}
    </div>
  )
}
