import { Link, useParams } from 'react-router-dom'
import styles from './productPage.module.css'
import { useEffect, useState } from 'react';
import { IProductCard } from '../shop/Shop'
import MyButton from '../myButton/MyButton';

const initialProduct:IProductCard = {
    id: 0,
    title: '',
    price: 0,
    image: '',
    description: '',
    category: '',
    rate: 0,
    count: 0,
    rating: {
        rate: 0,
        count: 0
    }
}

export default function ProductPage() {

    //useParams() возвращает объект с ключами параметров из адресной строки
    const { id } = useParams();

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [id])

    const [product, setProduct] = useState<IProductCard>(initialProduct)

    return (
        <div className='lesson-container'>
            <h1>{product.title}</h1>
            <p>{product.description}</p>
            <img src={product.image} alt={product.title} width={200}/>
            <div>
                <Link to={'/shop'}><MyButton name='back to Shop'/></Link>
            </div>
        </div>
        
    )
}
