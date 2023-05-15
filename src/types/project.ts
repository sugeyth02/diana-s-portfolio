import { ImageDataLike } from 'gatsby-plugin-image';

export interface IProject {
  slug: string;
  title: string;
  link: string;
  preview: string;
  description: string;
  applied_concepts: string[];
  tags: string[];
  images: ImageDataLike[];
  logo: ImageDataLike;
  layout: string;
}
export interface IProjects {
  allProjectsJson: {
    edges: [
      {
        node: IPreviewProject;
      }
    ];
  };
}

export interface IPreviewProject {
  slug: string;
  title: string;
  preview: string;
  tags?: string[];
  logo: ImageDataLike;
}
