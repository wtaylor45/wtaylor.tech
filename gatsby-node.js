const path = require('path');

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;
  const postTemplate = path.resolve('src/templates/blog-post.js');

  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            html
            id
            frontmatter {
              path
              date
              title
            }
            excerpt
          }
        }
      }
    }
  `).then(res => {
    if (res.errors) {
      return Promise.reject(res.errors);
    }

    res.data.allMarkdownRemark.edges.forEach(({ node }) => {
      console.log(node.frontmatter.path);
      createPage({
        path: node.frontmatter.path,
        component: postTemplate
      });
    });
  });
};
