export interface IViagemDTO {
  id?: string;
  description: string;
  planet: string;
  durationInDays: number;
  name: string;
  date: string;
}

export interface IViagemPageProps {
  arrayViagem: IViagemDTO[] | undefined;
}

export interface IChildrenProps {
  children: JSX.Element | JSX.Element[];
}

export interface IViagemContextType {
  viagens: IViagemDTO[];
  setViagens: (viagens: IViagemDTO[]) => void;
}

export interface IFormValues {
  email: string;
  password: string;
}

export interface IAuthDTO {
  success: boolean;
  token: string;
}
