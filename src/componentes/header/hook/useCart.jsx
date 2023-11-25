import { useState } from "react"
export function useCart(){
    const [cart,setCart]=useState(false)
    const generateCart=()=>{
        setCart(!cart)
    }

    return {cart,generateCart}
   
}