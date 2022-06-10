import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { Container, Box, Heading } from "../components/ui"

export default function Page(props) {
  const { projects } = props.data

  return (
    <Layout {...projects}>
      <Box paddingY={5}>
        <Container width="narrow">
          <Heading as="h1">{projects.title}</Heading>
          <div
            dangerouslySetInnerHTML={{
              __html: projects.html,
            }}
          />
        </Container>
      </Box>
    </Layout>
  )
}

export const query = graphql`
  query projects($id: String!) {
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
    }
  }
`
