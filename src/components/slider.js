
import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'

 function Slider(props) {
   const data = useStaticQuery(graphql`
      {
        allContentfulImageSlider {
          nodes {
            id
            images {
              title
              gatsbyImageData
              description
              url
            }
            spaceId
            node_locale
          }
        }
      }
    `)


   const imageData = data.allContentfulImageSlider.nodes[0].images

  return(
<>
  <Carousel
      autoPlay={true}
        infiniteLoop={true}
          showArrows={false}
        showIndicators={false}
      showThumbs={false}
      showStatus={false}>

      <div>
        <img src={imageData[0].url}/>
        </div>
      <div>
        <img src={imageData[1].url}/>
      </div>
      <div>
        <img src={imageData[2].url} height='325px'/>
      </div>
      <div>
        <img src={imageData[3].url}/>
      </div>
  </Carousel>

</>
  )
}




export default Slider;
