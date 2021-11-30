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

const Layout = ({ children }) => {
  const { isModalVisible, closeModal } = useContext(ModalContext)

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
      <div>
        {isModalVisible && (
          <div
            onClick={() => closeModal()}
            className="fixed flex justify-center items-center top-0 right-0 bottom-0 left-0 w-full bg-black bg-opacity-75 z-30"
          >
            <GatsbyImage
              fluid={data.trailMapLg.childImageSharp.fluid}
              className="w-full max-w-5xl"
            />
          </div>
        )}
      </div>
      <NavBar />
      <main className="grid">{children}</main>
      <Footer className=" bg-black text-white text-2xl  " />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
