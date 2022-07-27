import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import * as sections from "../components/sections"
import Fallback from "../components/fallback"
import Slider from "../components/slider"

export default function service(props) {
console.log(props)
  return (
    <div>
    <h1>hello world</h1>
    <Slider/>
    </div>
  )
}


export const testquesy = graphql`

{
   allContentfulImageSlider {
     nodes {
       id
       name
       images {
         title
         gatsbyImageData
         description
       }
     }
   }
 }
`
