import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { Container, Box, Heading, Flex, Section } from "../components/ui"
import * as sections from "../components/sections"
import Fallback from "../components/fallback"

export default function Page(props) {
  const { page } = props.data
  const pageImage = page.body.references.map((reference)=>{
      return(


                    <img src={reference.url} key={reference.id}></img>

      )
    })
console.log(props.data)
console.log(pageImage)





  return (
    <Layout {...page}>
    <Container>

    <Heading as="h1" style={{
      textAlign: 'center',
    }}>
    {page.title}
    </Heading>
      <Section padding={4} radius="large" >

    <Flex gap={2} variant="responsive">
      <Box width="half">
        {pageImage}
      </Box>
      <Box width="half">

          <div
            dangerouslySetInnerHTML={{
                __html: page.html
                      }}
          />
      </Box>
      </Flex>
      </Section>
        </Container>
    </Layout>
  )
}

export const query = graphql`
  query PageContent($id: String!) {
    page(id: { eq: $id }) {
      id
      title
      slug
      description
      image {
        id
        url
      }
      html
      ... on ContentfulPage {
         id
        body {
       references {
          ... on ContentfulAsset {
            id
            alt
            gatsbyImageData
            url
               }
            }
         }
       }
    }
  }
`
