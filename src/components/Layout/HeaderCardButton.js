import CartIcon from "./CartIcon";
import styles from "./HeaderCartButton.module.css";

const HeaderCartButton =  (props) =>{
    return (

        <button className={styles.button}>
            <span className={styles.icon}>
                <CartIcon />
            </span>
            <span> Yout Cart</span>
            <span className={styles.badge}>
                3
            </span>
        </button>
    )
}


export default HeaderCartButton;