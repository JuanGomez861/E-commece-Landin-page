import './text.css'
export function Description() {
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
                <section className="aumento"><figure className='icon'><img src="../images/icon-plus.svg" alt="" /></figure>0<figure className='icon'><img src="../images/icon-minus.svg" alt="" /></figure></section>
                <a className="toogle"><figure><img src="../images/icon-cart.svg" alt="" className='toogle_img' /></figure>Add to cart</a>
            </div>
        </section>
    )
}