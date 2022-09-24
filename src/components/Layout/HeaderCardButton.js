import CartIcon from "./CartIcon";
import CartContext  from "store/cart_data"
import styles from "./HeaderCartButton.module.css";
import { useContext } from "react";
import { useEffect, useState } from "react";

const HeaderCartButton =  (props) =>{
    const ItemContext = useContext(CartContext);
    const [btnAnime, setBtnAnime]  = useState(false);
    
    const {items } = ItemContext;
    
    useEffect(()=>{
        if(ItemContext.items.length === 0){
            return;
        }
        setBtnAnime(true);

        const timer =  setTimeout(()=>{
            setBtnAnime(false);
        }, 300)

        return ()=>{
            clearTimeout(timer);
        };
    }, [items])

    const numberOfCartItems =  items.reduce((currentNum, item)=>{
        return currentNum +  item.amount
    },0);

    const btnClasses =  `${styles.button} ${btnAnime && styles.bump}`

    return (
        <button onClick={props.onClick} className={btnClasses}>
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