export interface NameSection {
  id: number;
  name: string;
  className: string;
}
export interface ProjectList {
  id: number;
  name: string;
  className: string;
  folder: string;
  photoGallery: string[];
  description: string;
  technologyGallery: technology[];
  link: string;
}
export interface technology {
  image: string;
  name: string;
}
export interface language {
  image: string;
  level: string;
}
export interface Links {
  name: string;
  image: string;
  link: string;
}

export interface Header {
  title: string;
}
