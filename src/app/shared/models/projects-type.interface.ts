export interface IProjectWorks {
  title: string,
  description: string,
  previewImg: string,
  preview: string,
  source: string
}

export interface IProjects {
  domain: string,
  works: IProjectWorks[]
}
