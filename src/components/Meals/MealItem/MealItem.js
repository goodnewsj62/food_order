import MealItemForm from "./MealitemForm";
import styles from "./MealItem.module.css";
import CartContext from "store/cart_data";
import { useContext } from "react";



const MealItem =  (props) =>{
    const CartCtx = useContext(CartContext);
    const price =  `$${props.price.toFixed(2)}`
    
    const addToCartHandler =  amount =>{
        CartCtx.addItem({
            id: props.id,
            name: props.name,
            amount: amount,
            price: props.price
        });
    }
    
    return <li className={styles.meal}>
        <div>
            <div><h3>{props.name}</h3></div>
            <div className={styles.description}>{props.description}</div>
            <div className={styles.price}>{price}</div>
        </div>
        <div>
            <MealItemForm  onAddToCart={addToCartHandler }/>
        </div>
    </li>
};


export default MealItem;