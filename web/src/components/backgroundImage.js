import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImg from "gatsby-background-image"

const BckgdImage = ({ children, className = null, fluid = null }) => {
  const data = useStaticQuery(graphql`
    query BckgdImageQuery {
      backgroundImage: file(
        relativePath: { eq: "tim-foster-RI5vBBS77fQ-unsplash.jpg" }
      ) {
        id
        childImageSharp {
          fluid(maxWidth: 1800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const backgroundImage = fluid
    ? fluid
    : data.backgroundImage.childImageSharp.fluid

  const backgroundFluidImageStack = [
    backgroundImage,
    `linear-gradient(0deg, rgba(0,0,0,0.8) 0%,rgba(0,0,0,0.8) 10%, rgba(255,255,255,0) 100%)`,
  ].reverse()

  return (
    <BackgroundImg
      fluid={backgroundFluidImageStack}
      className=""
    >
      <div className={`${className} `}>{children}</div>
    </BackgroundImg>
  )
}

export default BckgdImage
