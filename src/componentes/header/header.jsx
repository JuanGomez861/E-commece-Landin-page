import { MenuCart } from './cart'
import './header.css'
import { Menu } from './menuHeader'
import { useMenu } from './hook/useMenu'
import { useCart } from './hook/useCart'
export function Header({menuProp,setMenuProp}) {
    const {cart,generateCart}=useCart()
    const {menuClass,classIcon,gentareMenu}=useMenu()

    const men=()=>{
        gentareMenu()
    }
    const handler=()=>{
        generateCart()
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
            {cart && <MenuCart c={menuProp} setMenuProp={setMenuProp}/>}
        </header>
    )
}