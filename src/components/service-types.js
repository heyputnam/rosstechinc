import * as React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Container, Section, Text, SuperHeading } from "./ui"
import * as styles from "./about-hero.css"

export default function ServiceType(props) {
  return (
    <Section>
      <Container>
      
        <SuperHeading className={styles.aboutHeroHeader}>
          {props.heading}

        </SuperHeading>
        {props.description && (
          <Text className={styles.aboutHeroText}>{props.description}</Text>
        )}
      </Container>
      <Container width="wide">
        {props.image && (
          <GatsbyImage
            alt={props.image.alt}
            image={getImage(props.image.gatsbyImageData)}
            className={styles.aboutHeroImage}
          />
        )}
      </Container>
    </Section>
  )
}

export const query = graphql`
  fragment ServiceTypeContent on ServiceType {
    id
    heading
    description
    image {
      id
      gatsbyImageData
      alt
    }
  }
`
