import * as React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Container, Section, Space, Text, SuperHeading, Heading} from "./ui"
import * as styles from "./about-hero.css"

export default function AboutHero(props) {
  return (
    <Section>
      <Container>
        <Section radius="large" background="primary">
        <SuperHeading>
          {props.heading}
        </SuperHeading>
            </Section>
            <Section>
        {props.text && (
          <Heading  center>{props.text}</Heading>
        )}
</Section>
      </Container>

      <Container width="narrow">
      <Section>
        {props.image && (
          <GatsbyImage
            alt={props.image.alt}
            image={getImage(props.image.gatsbyImageData)}
            className={styles.aboutHeroImage}
          />
        )}
        </Section>
      </Container>
    </Section>
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
