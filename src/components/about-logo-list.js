import * as React from "react"
import { graphql } from "gatsby"
import { Container, Heading, FlexList, LinkList, Section, Box } from "./ui"
import { LogoItem } from "./logo-list"

export default function AboutLogoList(props) {
  return (
  <></>
  )
}

export const query = graphql`
  fragment AboutLogoListContent on AboutLogoList {
    id
    heading
    links {
      id
      href
      text
    }
    logos {
      id
      alt
      image {
        id
        gatsbyImageData
        alt
      }
    }
  }
`
