import { createContext, useState } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null)

const StoreContextProvided = (props) => {

    const [cartItem ,setCartItem] = useState({})

    const addCart = (itemId) => {

        // to add food item in cart 
        if (!cartItem[itemId]){
            setCartItem((pre)=>({...pre,[itemId]:1}))
            console.log(cartItem)
        }
        // to increase quantity in item 
        else {
            setCartItem((pre)=>({...pre,[itemId]:pre[itemId]+1}))
            console.log(cartItem)
        }
    }
        // to decrease quantity in item 

    const removeCart = (itemId) => {
        setCartItem((pre)=>({...pre,[itemId]:pre[itemId]-1}))
    }

    const getTotalCartAmount = () => {
        let totalAmount = 0
        for (const item in cartItem){
            if(cartItem[item]>0){
            let itemInfo = food_list.find((product)=> product._id == item)
            totalAmount += itemInfo.price * cartItem[item]
            console.log(itemInfo);
         }
        }
        return totalAmount
    }

    const contextValue = {
        food_list,
        cartItem,
        setCartItem,
        addCart,
        removeCart,
        getTotalCartAmount
    }

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvided


