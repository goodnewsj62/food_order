import Modal from "components/UI/Modal";
import { useContext } from "react";
import CartItem from "./CartItem";
import CartContext from "store/cart_data";
import styles from "./Cart.module.css";

const Cart = (props) => { 
    const CartCtx=  useContext(CartContext)
    
    const cartItemRemoveHandler  =  id  =>{
        CartCtx.removeItem(id);    
    };
    const cartItemAddHandler  =  item =>{
        CartCtx.addItem({...item, amount:1});
    }
    
    const cartlist = CartCtx.items.map((item)=>{
        return <CartItem key={item.id} name = {item.name}  amount= {item.amount} price={item.price} onRemove = {cartItemRemoveHandler.bind(null, item.id) } onAdd={cartItemAddHandler.bind(null, item)} />
    })
    const totalAmount =  `$${CartCtx.totalAmount.toFixed(2)}`;
    const hasItems =  CartCtx.items.length >  0;
    const Cartitems =  <ul className={styles["cart-items"]}>{cartlist}</ul>
    return (
        <Modal onClick={props.onClick}>
            {Cartitems}
            <div className={styles.total}>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>
            <div className={styles.actions}>
                <button onClick={props.onClick} className={styles["button--alt"]}>Close</button>
                {hasItems && <button className={styles.button}>Order</button>}
            </div>
        </ Modal>
    )

};


export default Cart;