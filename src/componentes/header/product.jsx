import './product.css'
export function Product({ cantidad,setMenuProp}) {
    const precio = 125000;
    const total = precio * cantidad
    const handleDelete=()=>{
        setMenuProp(0)
    }
    return (
        
        <article className="product">
            <figure className="figure_product">
                <img src="../images/image-product-1-thumbnail.jpg" alt="" />
            </figure>
            <section className="product_text">
                <p className="name">Fall Limited Edition Sneakers</p>
                <p className="Cart_precius">125.000 x{cantidad} <strong>${total}</strong></p>
            </section>
            <figure className="figure_delete" onClick={handleDelete}>
                <img src="../images/icon-delete.svg" alt="" />
            </figure>
        </article>


    )
}