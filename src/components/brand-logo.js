import * as React from "react"
import Logo from '../../docs/images/logo2.png'


const logoStyle =  {
  width: '7.5rem',
  height: '7.5rem',
}
export default function GatsbyContentfulLogo() {
  return (

    <img src={Logo} style={logoStyle} alt='logo' ></img>

  )
}
