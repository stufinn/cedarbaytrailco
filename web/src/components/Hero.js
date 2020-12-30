import React from "react"
import { useStaticQuery } from "gatsby"

import BackgroundImage from "./backgroundImage"
// backgroundImage has a default image if fluid is null
const Hero = ({ children, className, fluid = null }) => {
  return (
    <BackgroundImage
      className={`flex flex-col items-center justify-center text-white h-400px relative ${className}`}
      fluid={fluid}
    >
      {children}
    </BackgroundImage>
  )
}

export default Hero
