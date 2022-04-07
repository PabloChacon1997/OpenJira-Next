import { createContext } from 'react';


interface ContextProps {
  sidemenuOpen: boolean,
  isAddingEntry: boolean,
  // Methods
  opensideMenu: () => void,
  closesideMenu: () => void,
  setIsAddingEntry: (isAdding: boolean) => void,
}

export const UIContext = createContext({} as ContextProps);