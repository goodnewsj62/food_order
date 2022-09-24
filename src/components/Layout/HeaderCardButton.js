import CartIcon from "./CartIcon";
import CartContext  from "store/cart_data"
import styles from "./HeaderCartButton.module.css";
import { useContext } from "react";

const HeaderCartButton =  (props) =>{
    const ItemContext = useContext(CartContext);

    const numberOfCartItems =  ItemContext.items.reduce((currentNum, item)=>{
        return currentNum +  item.amount
    },0);

    return (
        <button onClick={props.onClick} className={styles.button}>
            <span className={styles.icon}>
                <CartIcon />
            </span>
            <span> Yout Cart</span>
            <span className={styles.badge}>
                {numberOfCartItems}
            </span>
        </button>
    )
}


export default HeaderCartButton;