import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { Container, Box, Heading } from "../components/ui"

export default function Page(props) {
  const { service } = props.data

  return (
    <Layout {...service}>
      <Box paddingY={5}>
        <Container width="narrow">
          <Heading as="h1">{service.title}</Heading>
          <div
            dangerouslySetInnerHTML={{
              __html: service.html,
            }}
          />
        </Container>
      </Box>
    </Layout>
  )
}

export const query = graphql`
  query serviceContent($id: String!) {
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
