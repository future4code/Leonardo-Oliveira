export type Client  = {
  name: string,
  cpf: string,
  birth_date: string,
  balance: number
}

export type Payment = {
  cpf: string,
  value: number,
  description: string,
  payment_date:string
}

export type Transfer = {
  cpf_owner: string,
  name_owner: string,
  name_recipient: string,
  cpf_recipient: string,
  value: number
}