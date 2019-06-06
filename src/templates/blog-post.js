import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/SEO';
import { graphql, Link } from 'gatsby';
import './blog-post.module.css';

const BlogPost = ({ data }) => {
  const post = data.markdownRemark;

  return (
    <Layout>
      <SEO title={post.frontmatter.title} />
      <article styleName="post">
        <Link to="/blog" styleName="return">
          Back
        </Link>
        <h1 styleName="title">{post.frontmatter.title}</h1>
        <small styleName="subtitle">{post.frontmatter.date}</small>
        <hr />
        <section
          dangerouslySetInnerHTML={{ __html: post.html }}
          styleName="content"
        />
      </article>
    </Layout>
  );
};

export const postQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(
      frontmatter: { path: { eq: $path }, published: { eq: true } }
    ) {
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

export default BlogPost;
