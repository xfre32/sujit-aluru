export interface IFooterList {
  name: string,
  type: string,
  icon: string,
  path: string
}

export interface IPageNavDetail {
  path: string,
  name: string,
  icon: string
}

export interface IBreakPoints {
  minWidth: number | null,
  maxWidth: number | null,
  bp: string,
}
