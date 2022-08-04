import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import * as sections from "../components/sections"
import Fallback from "../components/fallback"
import Slider from "../components/slider"
import Cat from "../../docs/images/logo3.png"
import People from "../../docs/images/people.jpg"
import Idk from "../../docs/images/b.webp"
import Plant from "../../docs/images/plant.jpg"
import GoogleMap from '../components/map'

import {
  Nudge,
  Container,
  Section,
  Heading,
  SuperHeading,
  Text,
  ButtonList,
  Kicker,
  Flex,

  Box,
  Subhead,
} from "../components/ui"

export default function service(props) {
      const { aboutPage } = props.data
console.log(props)
  return (
    <Layout>
   <Container size="large">

    <Section center>
    <SuperHeading center>Let's Work Together</SuperHeading>
      <Flex gap={5} variant="responsive">
            <Box width="third">

                  <img src={People}></img>


                    </Box>
                      <Box width="third">
                        <img src={Idk} height="400px" width="400px"></img>
                          </Box>
                          <Box width="third">
                            <img src={Plant} height="400px" width="400px"></img>
                            </Box>
                  </Flex>
                  </Section>
                  <Section padding={2} radius="large" background="muted" center>
                      <Heading>RTS, Inc. is a 100% woman-owned business (WBE) firm located in Baltimore, MD.
                       We provide: Engineering, Inspection, Construction and Project management and assistance,
                       safety and confined space trained Field Technicians, Close-Out services, GIS, and contract assistance.
                        We specialize in Water & Wastewater:  Start-Up Operations, Operator training, and O & M manuals,
                        provided by MD licensed Operators and a Superintendent.
                  </Heading>

                  </Section>
    <Section padding={5} radius="large" background="background">
      <Flex gap={6} variant="responsive">
      <Box width="half">

        <Heading>Have Questions or looking for a 100% woman-owned business (WBE)
        located in the Baltimore Area?</Heading>

    </Box>
        <Box width="half">

              <img src={Cat}></img>

        </Box>

        </Flex>
        </Section>
        <Container>

        {aboutPage.blocks.map((block) => {
          const { id, blocktype, ...componentProps } = block
          const Component = sections[blocktype] || Fallback
          return <Component key={id} {...componentProps} />
        })}
        </Container>

<Section  width="wide" >
<Heading center>Conviently located in Ellicott City</Heading>
<Kicker center>Ross Technical Services</Kicker>
<Kicker center>3300 N Ridge Road</Kicker>
<Kicker center>Ellicott City, MD 21043</Kicker>
<br/>
<GoogleMap/>
</Section>


    </Container>
    </Layout>
  )
}


export const rtsQuery = graphql`
  {
    aboutPage {
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
        ...AboutHeroContent
        ...AboutStatListContent
        ...HomepageProductListContent
        ...AboutLeadershipContent
        ...HomepageBenefitListContent

      }
    }
  }
`
