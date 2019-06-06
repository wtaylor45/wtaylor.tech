import React from 'react';
import Layout from '../components/layout';
import { graphql } from 'gatsby';

const BlogPost = ({ data }) => {
  const post = data.markdownRemark;

  return (
    <Layout>
      <Link to="/blog">Go Back</Link>
      <article>
        <h1>{post.frontmatter.title}</h1>
        <section dangerouslySetInnerHTML={{ __html: post.html }} />
      </article>
    </Layout>
  );
};

export const postQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        title
        date
        path
        author
      }
    }
  }
`;
