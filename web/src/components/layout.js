/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useContext } from "react"
import PropTypes from "prop-types"
// import { useStaticQuery, graphql } from "gatsby"
// import "../styles/components/_layout.scss"
import { graphql, useStaticQuery } from "gatsby"

import NavBar from "./navbar/navbar"
import Footer from "./footer"
import { ModalContext } from "../context/ModalContext"
import GatsbyImage from "gatsby-image"
import useComponentVisible from "./hooks/useComponentVisible"

const Layout = ({ children }) => {
  const { isModalVisible, closeModal } = useContext(ModalContext)
  const { ref } = useComponentVisible(true)

  const data = useStaticQuery(graphql`
    query LayoutQuery {
      trailMapLg: file(
        relativePath: { eq: "Cedar_Bay_fatbike_trail_map_2021.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <div className={` relative grid   `}>
      {isModalVisible && (
        <div className="fixed flex justify-center items-center top-0 right-0 bottom-0 left-0 w-full bg-black bg-opacity-75 z-20 ">
          <div
            onClick={() => closeModal}
            className=" border-2 hover:bg-white hover:text-black flex justify-center items-center w-10 h-10 rounded-full absolute top-0 right-0 text-white mt-3 mr-3 text-2xl z-30 cursor-pointer"
          >
            X
          </div>
          {/* div is for use of ref (MODAL - click outside to close) */}
          <div ref={ref} className="w-full max-w-md sm:max-w-6xl   ">
            <GatsbyImage fluid={data.trailMapLg.childImageSharp.fluid} />
          </div>
        </div>
      )}

      <NavBar />
      <main className="grid flex-grow">{children}</main>
      <Footer className=" bg-black text-white text-2xl  " />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
