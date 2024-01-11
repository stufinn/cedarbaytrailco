import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

import BackgroundImage from "./backgroundImage"
// backgroundImage has a default image if fluid is null
const Hero = ({ children, className, fluid = null }) => {
  const data = useStaticQuery(graphql`
    query HeroQuery {
      logo: file(relativePath: { eq: "CBTCo_wh_hiRes.png" }) {
        id
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const { logo } = data

  return (
    <BackgroundImage
      className={`flex flex-col items-center justify-center text-white h-400px relative ${className} relative`}
      fluid={fluid}
    >
      <Link
        to="/"
        className="md:absolute md:top-0 md:left-0 ml-5 mt-5 w-48 md:w-52"
      >
        <Img className="" fluid={logo.childImageSharp.fluid} />
      </Link>

      {children}
    </BackgroundImage>
  )
}

export default Hero
