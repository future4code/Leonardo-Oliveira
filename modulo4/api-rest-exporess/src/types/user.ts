export enum ROLE {
  NORMAL = "NORMAL",
  ADMIN = "ADMIN"
}

export type User  = {
  id: number,
  name: string,
  email: string,
  type: ROLE | string,
  age: number

}