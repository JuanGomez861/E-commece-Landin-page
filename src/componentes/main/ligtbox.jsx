import { Images } from "./images"
import './ligtbox.css'
export function Ligthbox({ lighProp, setProp }) {
    const handle = () => {
        setProp(!lighProp)
    }
    return (
        <section className="ligth">

            <section className="flex">
                <img src="../images/icon-previous.svg" alt="" className="next" />
                <Images classn={'figures ligthbox'} />
                <img src="../images/icon-next.svg" alt="" className="next" />
                <img src="../images/icon-close-2.svg" alt="" className='close-l' onClick={handle} />
            </section>

        </section>

    )
}