/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
// import { useStaticQuery, graphql } from "gatsby"
// import "../styles/components/_layout.scss"

import NavBar from "./navbar/navbar"
import Footer from "./footer"

const Layout = ({ children }) => {
  return (
    // <div className="grid h-full">
    <div className="grid  grid-rows-layout h-full">

      {/* <NavBar /> */}
      <main className="grid">{children}</main>
      <Footer className=" bg-black text-white text-2xl grid p-5 justify-center" />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
