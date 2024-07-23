import { useEffect, useState } from "react"
import styles from "./shop.module.css"
// import ProductCard_byTeacher from "../productCard/ProductCard_byTeacher";
import ProductCard from "../productCard/ProductCard";
import ProductCard_byTeacher from "../productCard/ProductCard_byTeacher";
import Loader from "../loader/Loader";

export interface IProductCard {
    id: number;
    title: string;
    price: number;
    description?: string;
    category?: string;
    image: string;
    rate?: number;
    count?: number;
    rating?: {
        rate: number;
        count: number;
    }
}

export default function Shop() {

    const [isLoading, setIsLoading] = useState(false);

    const fetchShop = async () => {

        setIsLoading(true)

        const res = await fetch('https://fakestoreapi.com/products')
        const data = await res.json()

        if (res.ok) {
            setProductCards(data);
            setIsLoading(false)
        } else {
            <p>fetchShop failed ☠️</p>
        }
    }

    const [productCards, setProductCards] = useState<IProductCard[]>([]);
    // console.log(productCards);

    useEffect(() => {
        fetchShop();
    }, [])

    return (
        <div className="lesson-container">
            {isLoading && <Loader />}
            {productCards.length > 0 && (
                <>
                    <h1>Oh my Shop </h1>
                    <div className={styles.cardsContainer}>
                        {productCards.map((item) => (
                            // <ProductCard key={item.id} id={item.id} title={item.title} price={item.price} description={item.description} category={item.category} image={item.image} />
                            <ProductCard_byTeacher key={item.id} id={item.id} title={item.title} price={item.price} image={item.image} rate={item.rating?.rate} count={item.rating?.count} rating={item.rating} />
                        ))}
                    </div>
                </>
            )}
        </div>
    )
}
