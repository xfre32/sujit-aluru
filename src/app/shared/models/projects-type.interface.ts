export interface IProjectWorks {
  title: string,
  description: string,
  previewImg: string
}

export interface IProjects {
  domain: string,
  works: IProjectWorks[]
}
