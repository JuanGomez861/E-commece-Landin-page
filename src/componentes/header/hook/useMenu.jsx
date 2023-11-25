import { useState } from "react"
export function useMenu(){
    const [menu,setMenu]=useState(false)
    const menuClass=`nav ${menu ? 'nav_visible': ''}`
    const classIcon= `hamburgues ${menu ? 'close':''}`
    const gentareMenu=()=>{
        setMenu(!menu)

    } 

    return {menuClass,classIcon,gentareMenu}
    
}