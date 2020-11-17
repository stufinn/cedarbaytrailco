import React from "react"
import { Link, graphql } from "gatsby"
import PortableText from "@sanity/block-content-to-react"
import urlBuilder from "@sanity/image-url"
// import Img from "gatsby-image"
import Moment from "react-moment"

import Layout from "../components/layout"
import SEO from "../components/seo"
import FeatureImage from "../components/FeatureImage"

// TO DO: Add rich text content!

const urlFor = source =>
  urlBuilder({
    projectId: process.env.SANITY_ID,
    dataset: process.env.SANITY_DATASET,
  }).image(source)

const serializer = {
  types: {
    inlineImage: props => (
      <img
        className="settings__inlineImage"
        alt={props.node.alt}
        src={urlFor(props.node.asset).url()}
        style={{ maxHeight: "250px", objectFit: "cover", margin: "20px 0" }}
      />
    ),
  },
}

const BlogPostTemplate = ({ data }) => {
  const createdAtDate = data.sanityBlogPost._createdAt
  const rawPostContent = data.sanityBlogPost._rawPostContent
  const publishedDate = data.sanityBlogPost.publishedDate || null

  // only assign if the data exists
  const featureImage = data.sanityBlogPost.featureImage
    ? data.sanityBlogPost.featureImage.asset.fluid
    : null

  return (
    <Layout>
      <SEO title={`${data.sanityBlogPost.title}`} />
      <div className="blogPost">
        <div className="blogPost__container">
          <div className="blogPost__topContent">
            <h1 className="blogPost__title">{data.sanityBlogPost.title}</h1>
            <div className="blogPost__date">
              Published:&nbsp;
              <Moment format="YYYY/MM/DD">
                {publishedDate || createdAtDate}
              </Moment>
            </div>
          </div>

          {featureImage ? <FeatureImage fluid={featureImage} /> : null}

          <div className="blogPost__contentContainer">
            <PortableText blocks={rawPostContent} serializers={serializer} />
          </div>
          {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
        </div>

        <Link className="settings__mainButton blogpost__button" to="/updates">
          View all posts
        </Link>
      </div>
    </Layout>
  )
}

// "$slug: String!" means that we are pulling in the slug from the context (passed in BlogPostTemplate) and that it must be a string value
// "(slug: { current: { eq: $slug } })" means that the slug from the query needs to match the value from the context, so that we get info for the correct page.
//see video 16 of LUT gatsby/shopify

export const query = graphql`
  query sanityBlogPostQuery($slug: String!) {
    sanityBlogPost(slug: { current: { eq: $slug } }) {
      id
      _createdAt
      publishedDate
      title
      summary
      _rawPostContent
      featureImage {
        asset {
          fluid {
            ...GatsbySanityImageFluid
          }
        }
      }
    }
  }
`

export default BlogPostTemplate
