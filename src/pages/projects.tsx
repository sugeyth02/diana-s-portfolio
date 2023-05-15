import { graphql } from 'gatsby';
import React, { useState } from 'react';
import Card from '../components/Card';
import { FilterOpt } from '../components/FilterOpt';
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
  const [filters, setFilters] = useState<string[]>([]);

  const handleOnClick = (filter: string) => {
    if (checked(filter)) {
      const newFilter = filters.filter((item) => item !== filter);
      setFilters(newFilter);
      return;
    }
    setFilters((oldFilters) => [...oldFilters, filter]);
  };
  const checked = (value: string) => {
    return filters.some((item) => item === value);
  };
  return (
    <div>
      <title> Diana's Projects </title>
      <Main>
        <div className='flex flex-col p-4 w-full min-h-[90vh]'>
          <h1 className='text-4xl font-sans text-center py-12'>My Projects</h1>
          <div className='px-6'>
            <h1 className='text-2xl font-sans py-4'>Tags</h1>
            <div className='flex items-center gap-4 flex-wrap'>
              <FilterOpt
                value='CSS'
                checked={checked('CSS')}
                handleOnClick={handleOnClick}
              />
              <FilterOpt
                value='SASS'
                checked={checked('SASS')}
                handleOnClick={handleOnClick}
              />
              <FilterOpt
                value='Styled Components'
                checked={checked('Styled Components')}
                handleOnClick={handleOnClick}
              />
              <FilterOpt
                value='JavaScript'
                checked={checked('JavaScript')}
                handleOnClick={handleOnClick}
              />
              <FilterOpt
                value='TypeScript'
                checked={checked('TypeScript')}
                handleOnClick={handleOnClick}
              />
              <FilterOpt
                value='React'
                checked={checked('React')}
                handleOnClick={handleOnClick}
              />
              <FilterOpt
                value='NextJS'
                checked={checked('NextJS')}
                handleOnClick={handleOnClick}
              />
              <FilterOpt
                value='Testing'
                checked={checked('Testing')}
                handleOnClick={handleOnClick}
              />
            </div>
          </div>
          <div className='flex flex-col items-center pt-9 gap-3 mb-[50px]'>
            {projects
              .filter((project) =>
                filters.every((tag) => project.node.tags!.includes(tag))
              )
              .map((project, index) => (
                <Card data={project.node} key={index} />
              ))}
          </div>
        </div>
      </Main>
    </div>
  );
};

export default Projects;
