import './images.css'
export function Images(){
    return (
        <figure className="figures">
                <img src="../images/image-product-1.jpg" alt=""  className='figur_img'/>
        
            <figure className="previous">
                <figure className="figure_previous">
                    <img src="../images/image-product-1-thumbnail.jpg" alt=""  className="img_previous"/>
                </figure>
                <figure className="figure_previous ">
                    <img src="../images/image-product-2-thumbnail.jpg" alt=""  className="img_previous is-selected"/>
                </figure>
                <figure className="figure_previous">
                    <img src="../images/image-product-3-thumbnail.jpg" alt=""  className="img_previous"/>
                </figure>
                <figure className="figure_previous">
                    <img src="../images/image-product-4-thumbnail.jpg" alt=""  className="img_previous"/>
                </figure>
            </figure>
        </figure>
    )
}