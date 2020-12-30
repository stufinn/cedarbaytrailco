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

      <BackgroundImage className="flex flex-col items-center justify-center text-white  shadow-xl">
        <div className="w-3/4 md:w-1/2   min-h-50vh grid items-center my-10">
          <Img fluid={logo.childImageSharp.fluid} className="w-full" />
        </div>
      </BackgroundImage>

      <div className="bg-gray-200 grid">
        <div className=" grid  items-center col-span-2  justify-self-center mx-10 my-16 px-10 py-12  ">
          <h1 className="text-primary  text-center font-semibold text-5xl ">
            <span className="text-6xl">Welcome to Cedar Bay Trail Co.!</span>
          </h1>
          <p className="text-4xl text-center mt-8">
            Before hitting the trails, please register online with
            Cedar&nbsp;Bay Trail&nbsp;Co.
          </p>
          <ButtonLink
            to="/register"
            className=" text-4xl font-extrabold text-white  border-orange-600 bg-orange-600 justify-self-center  hover:bg-white hover:text-orange-600 mt-10 px-8"
            text="REGISTER NOW"
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
