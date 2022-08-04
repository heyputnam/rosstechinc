import * as React from "react"
import Header from "./header"
import Footer from "./footer"
import Head from "./head"
import {Section } from "./ui.css.ts"
import "../styles.css"

const Layout = (props) => {
  return (
    <>
      <Head {...props} />
      <Header />
      
      {props.children}

      <Footer />
    </>
  )
}

export default Layout
