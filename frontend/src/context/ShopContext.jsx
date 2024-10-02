import { useEffect, useState } from 'react';
import { createContext } from "react";
import { products } from "../assets/assets";
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

// use context api for getting all the value of products from assest.js
export const ShopContext = createContext();

// creating for get values from 
const ShopContextProvider = (props) => {
    const currency = '$';
    const deliveryFees = 10;
    const [search, setSearch] = useState('');
    // Here we set the true so that the by default there is a search bar in our webpage
    const [showSearch, setShowSearch] = useState(true);
    const [cartItems, setCartItems] = useState({});
    const navigate = useNavigate();

    // ***********      ADD TO CART functionality     *****************
    const addToCart = async (itemId, size) => {
        if(!size){
            toast.error('Please select a size of product')
            return;
        }
        // Clone the current cart data to avoid direct mutation
        let cartData = structuredClone(cartItems);
    
        // Check if the item already exists in the cart
        if (cartData[itemId]) {
            // Check if the specific size of the item exists in the cart
            if (cartData[itemId][size]) {
                // If it exists, increase the quantity by 1
                cartData[itemId][size] += 1;
            } else {
                // If the size doesn't exist, add the size with quantity 1
                cartData[itemId][size] = 1;
            }
        } else {
            // If the item doesn't exist, create a new entry for the item
            cartData[itemId] = {};
            // Add the size with quantity 1
            cartData[itemId][size] = 1;
        }
    
        // Update the cart state with the new data
        setCartItems(cartData);
    };

    // *************    Get Cart Count Logic      ****************
    // When we add the item or remove the item that time the value of count should be change
    // logic for this is below code
    const getCartCount = () => {
        // Start with a total count of zero to track the number of items in the cart
        let totalCount = 0;
    
        // Iterate over each item in the cart
        for (const items in cartItems) {
            // For each item, loop through its available sizes
            for (const item in cartItems[items]) {
                try {
                    // If the quantity for a specific size is greater than zero, add it to the total count
                    if (cartItems[items][item] > 0) {
                        totalCount += cartItems[items][item];
                    }
                } catch (error) {
                    // Catch and log any errors that might occur during the counting process
                    console.log(error); 
                }
            }
        }
    
        // Return the final total count of all items in the cart
        return totalCount;
    };

    // ***********   Update quntity **********
    const updateQuantity =  async (itemId, size, quantity) => {
        // Clone the current cart data to avoid direct mutation
        let cartData = structuredClone(cartItems);

        // Update the quantity for the specified item and size
        cartData[itemId][size] = quantity;

        // Update the cart state with the new data
        setCartItems(cartData);
    };

    
    // **********    Total amount    ***************
    const getCartAmount =  () => {
        let totalAmount = 0;
        for (const items in cartItems) {
            // find by id
            let itemInfo = products.find((product) => product._id === items);
            for (const item in cartItems[items]) {
                try {
                    if (cartItems[items][item] > 0) {
                        let itemPrice = itemInfo.price;
                        let itemQuantity = cartItems[items][item];
                        totalAmount += itemPrice * itemQuantity;
                    }
                } catch (error) {
                    console.log(error);
                }
            }
        }
        return totalAmount;
    };
    const value = {
        products, 
        currency,
        deliveryFees,
        search,
        setSearch,
        showSearch,
        setShowSearch,
        cartItems,
        addToCart,
        getCartCount,
        updateQuantity,
        getCartAmount,
        navigate
    }

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
};

export default ShopContextProvider;