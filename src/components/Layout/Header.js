import food from "assets/img/meals.jpg";
import styles from "./Header.module.css";
import HeaderCartButton from "./HeaderCardButton";


const Header =  (props)=>{
    
    return(
        <>
            <header className={`${styles.header}`}>
                <h1>React Meals</h1>
                <HeaderCartButton onClick={props.onShowCart}  />
            </header>
            <div className={`${styles["main-image"]}`}>
                <img src={food} alt="some food img" />
            </div>
        </>
    ) 
};



export  default Header;