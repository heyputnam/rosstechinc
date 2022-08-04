import * as React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Container, Section, Space,Flex, Text, SuperHeading, Heading} from "./ui"
import * as styles from "./about-hero.css"

export default function AboutHero(props) {
  return (

      <Container width="normal">
      <Section>
      <SuperHeading center >
        {props.heading}
      </SuperHeading>
      </Section>
      <Section radius="large" width='narrow'>

    {props.image && (
      <GatsbyImage
        alt={props.image.alt}
        image={getImage(props.image.gatsbyImageData)}
        className={styles.aboutHeroImage}
      />
      )}






    </Section>

    </Container>
  )
}

export const query = graphql`
  fragment AboutHeroContent on AboutHero {
    id
    heading
    text
    image {
      id
      gatsbyImageData
      alt
    }
  }
`
