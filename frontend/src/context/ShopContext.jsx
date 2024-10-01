import { useState } from 'react';
import { createContext } from "react";
import { products } from "../assets/assets";

// use context api for getting all the value of products from assest.js
export const ShopContext = createContext();

// creating for get values from 
const ShopContextProvider = (props) => {
    const currency = '$';
    const deliveryFees = 10;
    const [search, setSearch] = useState('');
    // Here we set the true so that the by default there is a search bar in our webpage
    const [showSearch, setShowSearch] = useState(true);

    const value = {
        products, 
        currency,
        deliveryFees,
        search,
        setSearch,
        showSearch,
        setShowSearch
    }

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
};

export default ShopContextProvider;