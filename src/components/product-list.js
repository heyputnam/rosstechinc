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
  height: '6rem',
  
}

function Product(props) {
  return (
    <Box center>
      {props.image && (
        <Icon
          alt={props.image.alt}
          image={props.image.gatsbyImageData}
          size="large"
        />
      )}
      <Subhead style={styleD}>{props.heading}</Subhead>
      <Text>{props.text}</Text>
      <LinkList links={props.links} />
    </Box>
  )
}

const styleB = {

  display: 'flex',
  flexWrap: 'wrap',
  listStyle: 'none',

}
const styleA = {

  display: 'flex',
  flexDirection: 'column'


}

const styleC = {

  width:'30%',

  margin: '0.5rem'

}
export default function ProductList(props) {
  return (
    <Section>
      <Container style={styleA}>
        <Box center paddingY={4}>
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
