import React from "react"
import { graphql, Link } from "gatsby"
import SEO from "../components/seo"
import Img from "gatsby-image"
import {IoLogoFacebook} from "react-icons/io"

import Layout from "../components/layout"
import BckgdImage from "../components/backgroundImage"
import ButtonLink from "../components/ButtonLink"
import { FaFacebook, FaWrench } from "react-icons/fa"

const IndexPage = ({ data }) => {
  const { logo } = data
  return (
    <Layout>
      <SEO title="Home" />

      <BckgdImage className=" min-h-screen flex flex-col row-gap-4 items-center justify-center text-white py-10 shadow-xl text-center">
        <div className="w-3/4 md:w-1/2 lg:w-1/3">
          <Img fluid={logo.childImageSharp.fluid} className=" w-full" />
          
        </div>
        <h1 className="mt-10 mx-3 font-bold text-center grid text-5xl md:text-6xl">Website coming soon!<br/><span className="flex justify-self-center mt-5  items-center">Stay tuned<FaWrench className="ml-5"/></span><span className="justify-self-center text-6xl  "><a href="https://www.facebook.com/groups/326260264407436"><FaFacebook className=" mt-10"/></a></span></h1>
        
      </BckgdImage>
      

    </Layout>
  )
}

export const query = graphql`
  query IndexQuery {
    logo: file(relativePath: { eq: "CBTCo_wh_hiRes.png" }) {
      id
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default IndexPage
