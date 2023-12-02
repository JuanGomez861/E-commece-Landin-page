import { useState } from "react"
export function useCount(){
    const [numbersProducts, setNumbers] = useState(0)
    const incrementar = () => {
        setNumbers(numbersProducts+1)
    }
    const decrementar = () => {
    
        setNumbers(numbersProducts-1)
    }

    

    return {numbersProducts,incrementar,decrementar}
}