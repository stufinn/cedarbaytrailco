import React, { useState } from "react"
import { useStaticQuery } from "gatsby"
import Img from "gatsby-image"

export const TrailMap = ({ className = "" }) => {
  const [overlayVisible, setOverlayVisible] = useState(false)
  const data = useStaticQuery(graphql`
    query TrailMap {
      trailMap: file(relativePath: { eq: "cedar bay trail map 2 pp.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const { trailMap } = data
  debugger
  return (
    <>
      <div className={`${className}`}>
        <Img fluid={trailMap.childImageSharp.fluid} />
      </div>
      {/* {!overlayVisible && (
        <div className="bg-gray-600 bg-opacity-75">Overlay is visible</div>
      )} */}
    </>
  )
}
