import { ChangeEvent, useEffect, useState } from "react"
import styles from "./shop.module.css"
// import ProductCard_byTeacher from "../productCard/ProductCard_byTeacher";
import ProductCard from "../productCard/ProductCard";
import ProductCard_byTeacher from "../productCard/ProductCard_byTeacher";
import Loader from "../loader/Loader";
import OneInputForm from "../oneInputForm/OneInputForm";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { getProducts } from "../../features/products/productsActions";

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
interface IOneInputForm {
    inputValue: number
}

export default function Shop() {
    // ! работа с данными в компонентах через redux:

    // * useAppDispatch -  отправка (данных) actions, функций для работы с данными
    const dispatch = useAppDispatch();

    //получаем данные из store через useAppSelector() - внутренний хук redux
    const { products, isLoading, error } = useAppSelector(state => state.products)

    //кладем в переменную  dispatch вызов функции useAppDispatch


    useEffect(() => {
        //вызываем dispatch и внутри в аргументе вызываем нужный action
        // только через dispatch мы можем отправить запрос на изменение данных в redux
        dispatch(getProducts());
    }, [dispatch])


    return (
        <div className="lesson-container">
            {error && <h3>{error}</h3>}
            {isLoading && <Loader />}
            {products.length > 0 && (
                <>
                    <h1>Oh my Shop 🛍 </h1>
                    {/* <OneInputForm/> */}
                    {/* <input
                        type="number"
                        placeholder="input number from 1 to 20"
                        value={inputValue}
                        onChange={setInputValue(inputValue)}
                        name="inputValue"
                    /> */}
                    <div className={styles.cardsContainer}>
                        {products.map((item) => (
                            // <ProductCard key={item.id} id={item.id} title={item.title} price={item.price} description={item.description} category={item.category} image={item.image} />
                            <ProductCard_byTeacher key={item.id} id={item.id} title={item.title} price={item.price} image={item.image} rate={item.rating?.rate} count={item.rating?.count} rating={item.rating} />
                        ))}
                    </div>
                </>
            )}
        </div>
    )
}
