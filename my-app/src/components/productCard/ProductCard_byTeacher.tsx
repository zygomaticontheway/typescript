
import styles from './productCard.module.css';
import MyButton from '../myButton/MyButton';
import { Link } from 'react-router-dom';

interface IProductCardProps { /* interface можно и импортировать, но можно и так будет понятнее дублировать, ибо здесь можно что-то дописать*/
    id: number,
    title: string,
    price: number,
    description?: string,
    category?: string,
    image: string,
    rate?: number,
    count?: number,
    rating?: {
        rate: number,
        count: number
    }
}

function ProductCard_byTeacher({
    id,
    title,
    price,
    image,
    rating,
    count,
    rate
}: IProductCardProps) {

    return (
        <div key={id} className={styles.productCardGrid}>
            <h5>{title.length > 20 ? title.substring(0, 20) + '...' : title}</h5>
            <p className={styles.price}>{price} €</p>
            <div className={styles.imgWrapper}>
                <img width={200} src={image} alt={title} />
            </div>
            <span> Rating: {rating?.rate}</span> {/* Проверка на наличие значения в объекте. Если получать не значение объекта по ключу, а переменную, то проверка и не требуется, будет просто пустота в отображении без ругани */}
            {count && <span> Count: {count}</span>}{/* если объект может не прийти ибо параметр необязательный, 
            нужно делать проверку на существование данных */}
            <div>
                {/* ссылка на link добавляет к адресу id с приведением типа данных к string, значение плюсуется к url, попадает в динамический параметр */}
                <Link to={String(id)}>
                    <MyButton name='about product' />
                </Link>
            </div>
            
        </div>
    )
}

export default ProductCard_byTeacher;
