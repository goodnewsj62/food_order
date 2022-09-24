import { useReducer } from "react";
const { default: CartContext } = require("./cart_data");


const defaultCartState = {
    items: [],
    totalAmount: 0
}

const cartreducer = (state, action) => {
    if (action.type === "ADD") {

        const newTotalAmount = (state.totalAmount + action.item.price) * action.item.amount
        const existingCatItemIndex = state.items.findIndex(item => item.id === action.item.id);

        const existingCartItem = state.items[existingCatItemIndex];

        let updatedItems;

        if (existingCartItem) {
            const updatedItem = { ...existingCartItem, amount: existingCartItem.amount + action.item.amount };
            updatedItems = [...state.items];
            updatedItems[existingCatItemIndex] = updatedItem;
        } else {
            updatedItems = state.items.concat(action.item);
        }
        return {
            items: updatedItems,
            totalAmount: newTotalAmount
        };
    }
    if (action.type === "REMOVE") {
        const existingCatItemIndex = state.items.findIndex(item => item.id === action.id);


        const existingCartItem = state.items[existingCatItemIndex];
        const upadatedTotalAmount = state.totalAmount - existingCartItem.price;

        let updatedItems;

        if (existingCartItem.amount === 1) {
            updatedItems = state.items.filter(item => item.id !== action.id);
        }
        else {
            const updatedItem = { ...existingCartItem, amount: existingCartItem.amount - 1 };
            updatedItems = [...state.items];
            updatedItems[existingCatItemIndex] = updatedItem;
        }


        return {
            items: updatedItems,
            totalAmount: upadatedTotalAmount
        };
    }

    return defaultCartState;
};

const CartProvider = props => {
    const [cartState, dispatchCartAction] = useReducer(cartreducer, defaultCartState)

    const addItemToCartHandler = (item) => {
        dispatchCartAction({ type: "ADD", item: item });
    };
    const removeItemFromCartHandler = (id) => {
        dispatchCartAction({ type: "REMOVE", id: id });
    };

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler,
    };

    return <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
};

export default CartProvider;