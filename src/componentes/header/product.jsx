import './product.css'
export function Product({ cantidad }) {
    const precio = 125000;
    const total = precio * cantidad
    return (

        <article className="product">
            <figure className="figure_product">
                <img src="../images/image-product-1-thumbnail.jpg" alt="" />
            </figure>
            <section className="product_text">
                <p className="name">Fall Limited Edition Sneakers</p>
                <p className="Cart_precius">125.000 x{cantidad} <strong>${total}</strong></p>
            </section>
            <figure className="figure_delete">
                <img src="../images/icon-delete.svg" alt="" />
            </figure>
        </article>


    )
}