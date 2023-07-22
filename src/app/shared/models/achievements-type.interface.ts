export interface ICertificationDetail {
  name: string,
  path: string,
  sno: string
}

export interface ICertification {
  org: string,
  certs: ICertificationDetail[]
}
