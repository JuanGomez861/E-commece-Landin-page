import { useState } from "react"
import { Header } from "./componentes/header/header"
import { Main } from "./componentes/main/principal"

export function App() {
  const [menuProp,setMenuProp]=useState(0)
 

  return (
    <>
      <Header menuProp={menuProp} setMenuProp={setMenuProp}/>
      <Main  setMenuProp={setMenuProp}/>
      
    </>
  )
}