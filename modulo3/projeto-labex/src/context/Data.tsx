/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext, useContext, useEffect, useMemo, useState } from "react";

import api from "../api/apiUrl";
import { IChildrenProps, IViagemContextType, IViagemDTO } from "../interfaces/InfoDTO";



const ViagemContext = createContext<IViagemContextType>({
  viagens: [],
  setViagens: () => { },
});


export const useViagem = function (): IViagemContextType {
  const context = useContext(ViagemContext);
  if (!context) {
    throw new Error("useViagem deve ser usado dentro de um DataProvider!");
  }
  const { viagens, setViagens } = context;

  return { viagens, setViagens };
};


const DataProvider = function ({ children }: IChildrenProps): JSX.Element {
  const [viagens, setViagens] = useState<IViagemDTO[]>([]);

  // Usando o useMemo para o react não renderizar o 
  // componente desnecessariamente.
  const value = useMemo(() => ({
    viagens, setViagens
  }), [viagens])

  const loadTrips = async (): Promise<void> => {
    try {
      const response = await api.get(
        "trips"
      );
      const tripsData: IViagemDTO[] = await response.data.trips;
      setViagens(tripsData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadTrips();
  }, []);

  return (
    <ViagemContext.Provider value={value}>
      {children}
    </ViagemContext.Provider>
  );
};


export default DataProvider;
