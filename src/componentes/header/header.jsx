import { MenuCart } from './cart'
import './header.css'
import { useState } from 'react'
import { Menu } from './menuHeader'
import { useMenu } from './hook/useMenu'
export function Header({menuProp}) {
    const [cart,setCart]=useState(false)
    const {menuClass,classIcon,gentareMenu}=useMenu()

    const men=()=>{
        gentareMenu()
    }
    const handler=()=>{
        setCart(!cart)
       
    }
   

   
    return (
        <header className='header'>
            <section className='header_section'>
            <section  className={classIcon} onClick={men}></section>
                    <img src="../images/logo.svg" alt="" />
                <Menu menuClass={menuClass}/>
                <section className="header_icons">
                    <img src="../images/icon-cart.svg" alt="" className='cart' onClick={handler}/>
                    <img src="../images/image-avatar.png" alt="" className='avatar' />
                </section>
            </section>
            {cart && <MenuCart c={menuProp}/>}
        </header>
    )
}