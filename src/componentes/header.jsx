
import './header.css'
export function Header(){
    

    return(
        <header className='header'>
        <section className='header_section'>
            <figure className="figure_header">
                <img src="../images/logo.svg" alt="" />
            </figure>
            <nav className="nav">
                <li className="nav_item" >Collections</li>
                <li className="nav_item" >Men</li>
                <li className="nav_item" >Women</li>
                <li className="nav_item" >About</li>
            </nav>
            <section className="header_icons">

                    <img src="../images/icon-cart.svg" alt=""  className='cart'/>
                

                    <img src="../images/image-avatar.png" alt="" className='avatar'/>

            </section>
        </section>
        </header>
    )
}