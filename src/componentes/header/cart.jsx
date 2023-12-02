import './cart.css'
import { Product } from './product'
export function MenuCart({ c , setMenuProp}) {

    return <div className="menu_cart">
        <span className="cart_title">Cart</span>
        <section className="products">
            {c !== 0 ? <><Product cantidad={c} setMenuProp={setMenuProp}></Product><a href="#" className='checkout'>Checkout</a></> : <p className='mensaje'>Your is empty car</p>}
        </section>
    </div>
}

