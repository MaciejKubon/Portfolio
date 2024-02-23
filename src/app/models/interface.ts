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
  technologyGallery: Skills[];
  link: string;
}
export interface Skills {
  image: string;
  name: string;
  level?: string;
}
export interface Links {
  name: string;
  image: string;
  link: string;
  addres?: string;
}

export interface Header {
  title: string;
}
