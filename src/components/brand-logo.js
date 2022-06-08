import * as React from "react"
import Logo from '../../docs/images/logo.png'


const logoStyle =  {
  width: '6rem',
  height: '6rem',
}
export default function GatsbyContentfulLogo() {
  return (


    <img src={Logo} style={logoStyle}></img>

  )
}
