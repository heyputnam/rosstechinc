import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import * as sections from "../components/sections"
import Fallback from "../components/fallback"

export default function project(props) {
  const  projectPage  = props.data.contentfulProjectPage

  console.log(props.data)

  return (
    <Layout {...projectPage}>
    {projectPage.blocks.map((block) => {
      const { id, blocktype, ...componentProps } = block
      const Component = sections[blocktype] || Fallback
      return <Component key={id} {...componentProps} />
    })}

    </Layout>
  )
}

export const query = graphql`
{
  contentfulProjectPage {
    id
    title
    description
    image {
      id
      url
    }
    blocks: content {
      id
      blocktype
      ...HomepageFeatureListContent
    }
  }
}
`
