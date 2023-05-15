const path = require('path');
module.exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;
  const projectTemplate = path.resolve('./src/template/project.tsx');
  const results = await graphql(`
    {
      allProjectsJson {
        edges {
          node {
            slug
          }
        }
      }
    }
  `);
  results.data.allProjectsJson.edges.forEach((edge) => {
    const project = edge.node;
    createPage({
      path: `/projects/${project.slug}`,
      component: projectTemplate,
      context: {
        slug: project.slug,
      },
    });
  });
};
