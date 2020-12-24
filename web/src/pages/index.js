import React from "react"
import { graphql, Link } from "gatsby"
import SEO from "../components/seo"
import Img from "gatsby-image"
import { IoLogoFacebook } from "react-icons/io"

import Layout from "../components/layout"
import BackgroundImage from "../components/backgroundImage"
import ButtonLink from "../components/ButtonLink"

const IndexPage = ({ data }) => {
  const { logo } = data
  return (
    <Layout>
      <SEO title="Home" />

      <BackgroundImage className="flex flex-col row-gap-4 items-center justify-center text-white py-10 shadow-xl">
        <div className="w-3/4 md:w-1/2 lg:w-1/3">
          <Img fluid={logo.childImageSharp.fluid} className=" w-full" />
        </div>
      </BackgroundImage>
      <div className="bg-gray-200">
        <div className="grid  items-center col-span-2  justify-self-center  m-5 lg:m-10">
          <h1 className="text-4xl lg:text-5xl text-center font-semibold md:w-4/5 lg:w-4/5 xl:w-3/5 justify-self-center">
            Before hitting the trails, please register with Cedar&nbsp;Bay
            Trail&nbsp;Co.
          </h1>

          <ButtonLink
            to="/register"
            className=" font-extrabold text-white  border-orange-600 bg-orange-600 justify-self-center  hover:bg-white hover:text-orange-600 mt-10 "
            text="Let's Do This"
          />
        </div>
        <div></div>
      </div>
      {/* <div className=" flex justify-center text-6xl  my-10"> 
      <IoLogoFacebook/>
      </div>
      
      <h1 className="text-5xl text-center mb-10">Check out our Facebook page for the latest updates on the trails!</h1> */}
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
