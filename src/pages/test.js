import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import * as sections from "../components/sections"
import Fallback from "../components/fallback"

export default function service(props) {
  const  servicePage  = props.data.contentfulServicePage

  console.log(props.data.contentfulServicePage.blocks[2].blocktype)

  return (
    <Layout {...servicePage}>
{console.log({ servicePage })}
  {servicePage.blocks.map((block) => {
        const { id, blocktype, ...componentProps } = block
        const Component = sections[blocktype] || Fallback
        return <Component key={id} {...componentProps} />
      })}
    </Layout>
  )
}

export const query = graphql`
  {
    contentfulServicePage {
      id
      title
      description
      image {
        id
        url
      }
      blocks: content {
        ... on AboutHero{
          id
          blocktype
          text
          heading
          image{
            url
            alt
            gatsbyImageData
          }
        }
        ... on HomepageHero{
          id
          blocktype
          text
          heading
          image{
            url
            alt
            gatsbyImageData
          }
        }
        ... on ServiceHero{
          id
          blocktype
          text
          heading
          image{
            url
            alt
            gatsbyImageData
          }
        }
      }
    }
  }
`
