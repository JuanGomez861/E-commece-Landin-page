import { MenuCart } from './cart'
import './header.css'
import { useState } from 'react'
import { Menu } from './menuHeader'
export function Header() {
    const [cart,setCart]=useState(false)
    const [menu,setMenu]=useState(false)
    const headerClass=`header_section ${cart ? 'header_section-r': ''}`
    const menuClass=`nav ${menu ? 'nav_visible': ''}`
    const classIcon= `hamburgues ${menu ? 'close':''}`
    const men=()=>{
        setMenu(!menu)
    }
    const handler=()=>{
        setCart(!cart)
    }
   
    
   
    return (
        <header className='header'>
            <section className={headerClass}>
            <section  className={classIcon} onClick={men}></section>
                    <img src="../images/logo.svg" alt="" />
                <Menu menuClass={menuClass}/>
                <section className="header_icons">
                    <img src="../images/icon-cart.svg" alt="" className='cart' onClick={handler}/>
                    <img src="../images/image-avatar.png" alt="" className='avatar' />
                </section>
                {cart && <MenuCart/>}
            </section>
           
        </header>
    )
}