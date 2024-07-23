import { Link } from 'react-router-dom';
import MyButton from '../myButton/MyButton';
import styles from './productCard.module.css';

interface IProductCardProps { /* interface можно и импортировать, но можно и так будет понятнее дублировать, ибо здесь можно что-то дописать*/
    id: number,
    title: string,
    price: number,
    description: string,
    category: string,
    image: string,
    count: number,
    rate: number,
    rating?: {
        rate: number,
        count: number
    }
}


function ProductCard({
    id,
    title,
    price,
    image,
    description,
    category,  
    rating,
    count,
    rate
    }:IProductCardProps) {
    
        return(
        <div className={styles.productCardGrid}>
            <h5>{title.length > 20 ? title.substring(0, 20) + '...' : title}</h5>
            <p className={styles.price}>{price}</p>
            <div className={styles.imgWrapper}>
                <img width ={200} src={image} alt={title} /> 
            </div>
            <p>Description:</p>
            <p className={styles.description}>{description.length > 70 ? description.substring(0, 70) + '...' : description}</p>
            <p>Category:</p>
            <p className={styles.description}>{category}</p>
            <span> Rating: {rating?.rate}</span> {/* Проверка на наличие значения в объекте. Если получать не значение объекта по ключу, а переменную, то проверка и не требуется, будет просто пустота в отображении без ругани */}    
            {count && <span> Count: {count}</span>}
            
        </div>
    )
}

export default ProductCard;
