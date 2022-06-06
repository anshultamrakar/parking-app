import * as React from 'react';

export interface AppContextInterface {
  userInput: string,
  parkingSlots: any[],
  open: boolean;
  price : number;
}

const DataContext = React.createContext<AppContextInterface | null>(null);

export const AppContextProvider = DataContext.Provider;
  

export const AppContextConsumer = DataContext.Consumer;