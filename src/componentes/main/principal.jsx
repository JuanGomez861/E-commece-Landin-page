//realizar responsive
//logica images-ligthbox
import { Ligthbox } from './ligtbox'
import './main.css'
import { Images } from "./images"
import { Description } from "./text"
import { useEffect, useState } from 'react'

export function Main({ setMenuProp }) {
    const [lighProp, setProp] = useState(false)
    useEffect(() => {
        console.log(lighProp)
    }, [lighProp])
    return <section className="main">
        <Images classn={'figures'} lighProp={lighProp} setProp={setProp} />
        <Description setMenuProp={setMenuProp} />
        {lighProp && <Ligthbox lighProp={lighProp} setProp={setProp} />}
    </section>
}