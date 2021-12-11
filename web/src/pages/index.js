import React from "react"
import { graphql, Link } from "gatsby"
import SEO from "../components/seo"
import Img from "gatsby-image"
import { IoLogoFacebook } from "react-icons/io"

import Layout from "../components/layout"
import BackgroundImage from "../components/backgroundImage"
import ButtonLink from "../components/ButtonLink"
import RegisterBar from "../components/RegisterBar"
import MapIframe from "../components/MapIframe"
import { TrailMap } from "../components/TrailMap"
import TrailConditionsWidget from "../components/trailConditions/TrailConditionsWidget"

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

      <RegisterBar className=" " />
      <div className="bg-gray-200 grid">
        <div className=" grid items-center w-full  justify-self-center px-3 md:px-10 my-16 ">
          <h1 className="text-primary  text-center font-semibold text-6xl  leading-none mb-10">
            Welcome to Cedar Bay Trail&nbsp;Co.
          </h1>
          <p className="italic font-bold text-center text-3xl mt-3 ">
            Additional features coming soon: <br />
            Trail condition reports, Event updates, and more!
          </p>
          <div className="  justify-self-center mt-10 grid">
            {/* Trail Map */}
            <div className="flex-col lg:flex-row flex items-center lg:items-start justify-center relative">
              <TrailMap className=" lg:sticky lg:top-2 shadow-lg" />

              {/* <TrailConditionsWidget /> */}
            </div>
            {/* Trail Map End */}

            {/* Location Map */}
            <MapIframe />
            {/* Location Map End*/}
          </div>

          <p className="text-4xl text-center mt-8">
            Before hitting the trails, please register:
          </p>
          <ButtonLink
            to="/register"
            className=" text-4xl font-extrabold text-white  border-yellow-600 bg-yellow-600 justify-self-center  hover:bg-white hover:text-yellow-600 mt-10 px-8 text-center"
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
