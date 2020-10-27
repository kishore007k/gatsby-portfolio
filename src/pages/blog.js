import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Blogs from "../components/Blogs"

export const query = graphql`
  {
    allStrapiBlogs {
      nodes {
        category
        date(formatString: "DD MM YYYY")
        desc
        id
        slug
        title
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

const Blog = ({ data }) => {
  const {
    allStrapiBlogs: { nodes: blogs },
  } = data
  return (
    <Layout>
      <section className="blog-page">
        <Blogs blogs={blogs} title="blogs" />
      </section>
    </Layout>
  )
}

export default Blog
