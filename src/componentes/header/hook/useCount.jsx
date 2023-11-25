import { useState } from "react"
export function useCount(){
    let [numbersProducts, setNumbers] = useState(0)
    const incrementar = () => {
        setNumbers(numbersProducts++)
    }
    const decrementar = () => {
        setNumbers(numbersProducts--)
    }

    return {numbersProducts,incrementar,decrementar}
}