import * as React from "react"
import Logo from '../../docs/images/logo.png'


const logoStyle =  {
  width: '20rem',
  height: '10rem',
}
export default function GatsbyContentfulLogo() {
  return (

    <img src={Logo} style={logoStyle} alt='logo' ></img>

  )
}
