export interface IAboutMeItems {
  org: string,
  role: string,
  duration: string,
  description: string
}

export interface IAboutMe {
  section: string,
  caption: string,
  items: IAboutMeItems[]
}

export interface IPhilosophy {
  section: string,
  philosophicalValue: string,
  imageSrc: string
}

export interface IStrengthDetails {
  name: string,
  description: string,
  icon: string
}

export interface IStrength {
  section: string,
  caption: string,
  strengths: IStrengthDetails[]
}

export interface IGetInTouchFormElements {
  fieldType: string,
  inputType: string,
  cols: string,
  id: string,
  placeholder: string,
  label: string
}

export interface IGetInTouch {
  section: string,
  imgPath: string,
  formAction: string,
  formMethod: string,
  formElements: IGetInTouchFormElements[]
}
