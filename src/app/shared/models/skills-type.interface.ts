export interface ISkill {
  id: string,
  skill: string,
  percentage: number
}

export interface ISkillSet {
  domain: string,
  image: string,
  skills: ISkill[]
}
