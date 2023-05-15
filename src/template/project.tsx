import React from 'react';
import { graphql } from 'gatsby';
import DetailProject from '../components/DetailProject';
import MultiProject from '../components/layouts/multiProject';
import Main from '../components/layouts/main';
import { IProject } from '../types/project';

export const query = graphql`
  query ($slug: String!) {
    projectsJson(slug: { eq: $slug }) {
      slug
      title
      preview
      description
      link
      layout
      tags
      applied_concepts
      images {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, width: 600, height: 400)
        }
      }
      logo {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, width: 50, height: 50)
        }
      }
    }
  }
`;
interface IProps {
  data: {
    projectsJson: IProject;
  };
}

const Project = ({ data }: IProps) => {
  const project = data.projectsJson;
  return (
    <div>
      <div>
          <Main>
            <DetailProject data={project} />
          </Main>
      </div>
    </div>
  );
};
export default Project;
