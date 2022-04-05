import { FC, useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Entry } from '../../interfaces';


import { EntriesContext, entriesReducer } from './';

export interface EntriesState {
  entries: Entry[];
}


const ENTRIES_INITIAL_STATE: EntriesState = {
  entries: [
    {
      _id: uuidv4(),
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit',
      status: 'pending',
      createAt: Date.now(),
    },
    {
      _id: uuidv4(),
      description: 'In-progres Lorem ipsum, dolor sit amet consectetur adipisicing elit',
      status: 'in-progress',
      createAt: Date.now() - 100000,
    },
    {
      _id: uuidv4(),
      description: 'finished - Lorem ipsum, dolor sit amet consectetur adipisicing elit',
      status: 'finished',
      createAt: Date.now() - 1000,
    },
  ],
}

export const EntriesProvider:FC= ({ children }) => {
 const [state, dispatch] = useReducer(entriesReducer, ENTRIES_INITIAL_STATE);

 return (
   <EntriesContext.Provider value={{
     ...state,
   }}>
     { children }
   </EntriesContext.Provider>
 )
}