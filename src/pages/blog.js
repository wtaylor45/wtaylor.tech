import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/SEO';
import { graphql, Link } from 'gatsby';

const Blog = ({ data }) => (
  <Layout>
    <SEO title="Blog" />
    <h1>Latest Posts</h1>
    {data.allMarkdownRemark.edges.map(post => (
      <div key="post.node.id">
        <h3>{post.node.frontmatter.title}</h3>
        <small>Posted on {post.node.frontmatter.date}</small>
        <Link to={post.node.frontmatter.path}>Read More</Link>
      </div>
    ))}
  </Layout>
);

export const pageQuery = graphql`
  query MyQuery {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            author
            path
            date
            title
          }
          excerpt
        }
      }
    }
  }
`;

export default Blog;
