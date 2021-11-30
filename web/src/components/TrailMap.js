import React, { useContext, useState } from "react"
import { useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import { ModalContext } from "../context/ModalContext"

export const TrailMap = ({ className = "" }) => {
  const { openModal } = useContext(ModalContext)
  const [overlayVisible, setOverlayVisible] = useState(false)
  const data = useStaticQuery(graphql`
    query TrailMap {
      trailMapSm: file(
        relativePath: { eq: "Cedar_Bay_fatbike_trail_map_2021.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const { trailMapSm } = data

  return (
    <>
      <div className={` max-w-2xl ${className}`} onClick={() => openModal()}>
        <Img fluid={trailMapSm.childImageSharp.fluid} />
      </div>
      {/* {!overlayVisible && (
        <div className="bg-gray-600 bg-opacity-75">Overlay is visible</div>
      )} */}
    </>
  )
}
