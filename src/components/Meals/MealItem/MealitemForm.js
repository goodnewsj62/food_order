import { useRef, useState } from "react";
import Input from "components/UI/Input";
import styles from "./MealItemForm.module.css";

const MealItemForm =  props =>{
    const [amountIsValid, setAmountIsValid] = useState(true);
    const amountInputRef = useRef(); 
    
    const submitHandler =  event =>{
        event.preventDefault();

        const enterdAmount =  amountInputRef.current.value;
        const enteredAmountNumber = +enterdAmount;

        if (enterdAmount.trim().length  === 0  || enteredAmountNumber < 1 || enteredAmountNumber > 5 ){
            setAmountIsValid(false);
            return;
        }

        props.onAddToCart(enteredAmountNumber);
    };
    return (
        <form onSubmit={submitHandler} className={styles.form}>
            <Input ref={amountInputRef} label="amount"  input={{
                id:"amount",
                type: "number",
                min: "1",
                max: "5",
                step: "1",
                defaultValue: '1'
            }} />
            <button>
                + Add
            </button>
            {!amountIsValid && <p>Please enter an amount (1 - 5) </p>}
        </form>
    );
};


export default MealItemForm;