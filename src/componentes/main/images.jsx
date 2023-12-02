import { useState } from 'react'
import './images.css'
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
    const decrementar=()=>{
        if(img=='1')return;
        const number=Number(img)-1
        const sting=number.toString()
        setImg(sting)
    }
    const aumentar=()=>{
        if(img=='4')return;
        const number=Number(img)+1
        const sting=number.toString()
        setImg(sting)
    }

    return (
        <figure className={classn}>
            <figure className='figure'>
            <figure className="conatiner_next" onClick={decrementar}>
                    <img src="../images/icon-previous.svg" alt="" className="next" />
                 </figure>
            <img src={`../images/image-product-${img}.jpg`} alt="" className='figur_img' onClick={ligth} />
            <figure className="conatiner_next" onClick={aumentar}>
                    <img src="../images/icon-next.svg" alt="" className="next" />
                 </figure>
                 </figure>
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