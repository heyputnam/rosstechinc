import React from 'react'
import { graphql } from "gatsby"
import { BLOCKS, MARKS } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { GatsbyImage, getImage } from "gatsby-plugin-image"



const Bold = ({ children }) => <b>{children}</b>;

const Text = ({ children }) => <p className="align-center">{children}</p>;

const richTextImages = {};

const options = {
  renderMark: {
    [MARKS.BOLD]: text => <Bold>{text}</Bold>,
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
    [BLOCKS.EMBEDDED_ASSET]: (node, children) => {
      // render the EMBEDDED_ASSET as you need
  console.log(node.data.target)

      const imageData = richTextImages[node.data.target.sys.id];
      const image = getImage(imageData.image)
      console.log(image)
      return (
        <div className="align-center">
          <GatsbyImage image={image} alt={imageData.alt}/>
        </div>
      );
    },
  },
};
export default function RichText(props){

console.log(props.data.contentfulPage.body.references[0].id)
        props.data.contentfulPage.body.references.map(reference => (
          richTextImages[reference.contentful_id] = {"image": reference.gatsbyImageData, "alt": reference.title}
        ))

        return (
            <div>
            { documentToReactComponents(JSON.parse(props.data.contentfulPage.body.raw), options) }
            </div>
          
        )

}

export const query = graphql`
{
  contentfulPage(slug: {eq: "cm"}){
    html
    body{
      raw
      references {
        ... on ContentfulAsset{
          id
          alt
          gatsbyImageData
          url
        }
      }

    }
    }
  }
`
