import { graphql } from 'gatsby';
import React from 'react';
import Card from '../components/Card';
import Main from '../components/layouts/main';
import { IProjects } from '../types/project';

export const query = graphql`
  query {
    allProjectsJson(sort: { fields: jsonId, order: ASC }) {
      edges {
        node {
          slug
          title
          preview
          tags
          logo {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED, width: 50, height: 50)
            }
          }
        }
      }
    }
  }
`;

interface IProps {
  data: IProjects;
}

const Projects = ({ data }: IProps) => {
  const projects = data.allProjectsJson.edges;

  return (
    <div>
      <title> Diana's Projects </title>
      <Main>
        <div className='flex flex-col p-4 w-full min-h-[90vh]'>
          <h1 className='text-4xl font-sans text-center py-8'>Projects</h1>
          <div className='flex flex-col items-center  gap-6 mb-[50px] px-4'>
            {projects.map((project, index) => (
              <Card data={project.node} key={index} />
            ))}
          </div>
        </div>
      </Main>
    </div>
  );
};

export default Projects;
