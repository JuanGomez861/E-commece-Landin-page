import './text.css'
import { useCount } from '../header/hook/useCount';
export function Description({setMenuProp}) {
    let {numbersProducts,incrementar,decrementar}=useCount()
    const enviar=()=>{
        if(numbersProducts==0)return;
          setMenuProp(numbersProducts)
    }

    return (
        <section className="text">
            <strong className="strong">SNEAKERS COMPANY</strong>
            <h1 className="title">Fall Limited Edition Sneakers</h1>
            <p className="description">These low-profile sneakers are your perfect casual wear companion. Featuring a durable rudder outer sole. they whistand everything the weater can offert</p>
            <div className='prices'>
                <strong className='price'>$125.00</strong>
                <span className='descuento'>50%</span>
                <strong className='beforePrices'>$250.00</strong>
            </div>


            <div className="cta">
                <section className="aumento"><img src="../images/icon-minus.svg" alt="" onClick={decrementar} className='icon' />{numbersProducts}<img src="../images/icon-plus.svg" alt="" onClick={incrementar} className='icon'/></section>
                <a className="toogle" onClick={enviar}><figure><img src="../images/icon-cart_toogle.svg" alt="" className='toogle_img' /></figure>Add to cart</a>
            </div>
        </section>
    )
}