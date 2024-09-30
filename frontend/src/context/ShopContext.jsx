import { createContext } from "react";
import { products } from "../assets/assets";

// use context api for getting all the value of products from assest.js
export const ShopContext = createContext();

// creating for get values from 
const ShopContextProvider = (props) => {
    const currency = '$';
    const deliveryFees = 10;

    const value = {
        products, 
        currency,
        deliveryFees
    }

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
};

export default ShopContextProvider;