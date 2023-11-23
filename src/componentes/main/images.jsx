import { useState } from 'react'
import './images.css'
import { Ligthbox } from './ligtbox'
export function Images({ lighProp, classn, setProp }) {
    const [img, setImg] = useState('1')
    const mostar = (e) => {
        const elemento = e.target
        const id = elemento.id
        console.log(elemento)
        setImg(id)
    }
    const ligth = () => {
        setProp(!lighProp)
    }

    return (
        <figure className={classn}>
            <img src={`../images/image-product-${img}.jpg`} alt="" className='figur_img' onClick={ligth} />

            <figure className="previous">
                <figure className="figure_previous" onClick={mostar}>
                    <img src="../images/image-product-1-thumbnail.jpg" alt="" className="img_previous" id='1' />
                </figure>
                <figure className="figure_previous " onClick={mostar} >
                    <img src="../images/image-product-2-thumbnail.jpg" alt="" className="img_previous is-selected" id='2' />
                </figure>
                <figure className="figure_previous" onClick={mostar} >
                    <img src="../images/image-product-3-thumbnail.jpg" alt="" className="img_previous" id='3' />
                </figure>
                <figure className="figure_previous" onClick={mostar}>
                    <img src="../images/image-product-4-thumbnail.jpg" alt="" className="img_previous" id='4' />
                </figure>
            </figure>
        </figure>
    )
}