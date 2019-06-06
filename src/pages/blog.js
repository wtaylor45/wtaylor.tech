import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/SEO';
import { graphql, Link } from 'gatsby';
import './blog.module.css';

const Blog = ({ data }) => (
  <Layout>
    <SEO title="Blog" />
    <div styleName="container">
      <h1 styleName="title">Blog Posts</h1>
      {data.allMarkdownRemark.edges.map(post => (
        <article key="post.node.id">
          <div styleName="frontmatter">
            <h3 styleName="post-title">{post.node.frontmatter.title}</h3>
            <small>{post.node.frontmatter.date}</small>
          </div>
          {post.node.excerpt}
          <Link styleName="read-more" to={post.node.frontmatter.path}>
            Read More
          </Link>
        </article>
      ))}
    </div>
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
