import * as React from "react"
import { graphql } from "gatsby"
import {
  Container,
  Section,
  FlexList,
  Text,
  Kicker,
  Heading,
  Subhead,
  Box,
  Icon,
  LinkList,
} from "./ui"
const styleD = {
padding: '2rem'

}

function Product(props) {
  return (
    <Box padding={1} center>
      {props.image && (
        <Icon
          alt={props.image.alt}
          image={props.image.gatsbyImageData}
          size="large"
        />
      )}
      <Subhead>{props.heading}</Subhead>
      <Text>{props.text}</Text>
      <LinkList links={props.links} />
    </Box>
  )
}

const styleB = {

  display: 'flex',
  flexWrap: 'wrap',
  listStyle: 'none',
  padding: '2rem'


}
const styleA = {

  display: 'flex',
  flexDirection: 'column',




}

const styleC = {

    width:'33%',
    padding: '2.5rem'



}

const styleE = {

    marginBottom: '1rem'



}
export default function ProductList(props) {
  return (
    <Section>
      <Container style={styleA}>
        <Box center paddingY={1}>
          <Heading>
            {props.kicker && <Kicker>{props.kicker}</Kicker>}
            {props.heading}
          </Heading>
          {props.text && <Text>{props.text}</Text>}
        </Box>
        <ul style={styleB}>
          {props.content.map((product) => (
            <li key={product.id} style={styleC}>
              <Product {...product} />
              <br/>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  )
}

export const query = graphql`
  fragment HomepageProductListContent on HomepageProductList {
    id
    kicker
    heading
    text
    content {
      id
      heading
      text
      image {
        alt
        id
        gatsbyImageData
      }
      links {
        id
        href
        text
      }
    }
  }
`
