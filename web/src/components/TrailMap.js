import React, { useContext, useState } from "react"
import { useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import { ModalContext } from "../context/ModalContext"
import { FaHandPointer } from "react-icons/fa"

export const TrailMap = ({ className = "" }) => {
  const { openModal } = useContext(ModalContext)

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
      <div
        className={`relative cursor-pointer justify-self-center w-full ${className}`}
        onClick={() => openModal()}
        title="Click for larger map"
      >
        <Img fluid={trailMapSm.childImageSharp.fluid} />
        <div className="hidden md:block absolute flex bottom-0 right-0 bg-white rounded-full p-2 mb-2 mr-2  text-red-500 items-center animate-bounce"><FaHandPointer className=""/></div>
      </div>
      {/* {!overlayVisible && (
        <div className="bg-gray-600 bg-opacity-75">Overlay is visible</div>
      )} */}
    </>
  )
}
