import styles from './productCard.module.css';

interface IProductCardProps { /* interface можно и импортировать, но можно и так будет понятнее дублировать, ибо здесь можно что-то дописать*/
    id: number,
    title: string,
    price: number,
    description: string,
    category: string,
    image: string,
    rating?: {
        rate: number,
        count: number
    }
}


function ProductCard({id,
    title,
    price,
    description,
    category,
    image,
    }:IProductCardProps) {
    return(
        <div className={styles.productCardGrid}>
            <h4>{title}</h4>
            <p>{price}</p>
            <div>
                <img width ={200} src={image} alt={title} /> 
            </div>
            <p>Description:</p>
            <p className={styles.description}>{description}</p>
            <p>Category:</p>
            <p className={styles.description}>{category}</p>
        </div>
    )
}

export default ProductCard;
