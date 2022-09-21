import { useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { EntriesContext, entriesReducer } from './';
import { Entry } from '../../interfaces';

export interface EntriesState {
  entries: Entry[];
}

const ENTRIES_INITIAL_STATE: EntriesState = {
  entries: [
    {
      _id: uuidv4(),
      createdAt: Date.now(),
      description: 'Nostrud proident dolore eu reprehenderit exercitation est.',
      status: 'pending',
    },
    {
      _id: uuidv4(),
      createdAt: Date.now() - 1000000,
      description: 'Consequat irure do consectetur nulla consequat laboris esse.',
      status: 'in-progress',
    },
    {
      _id: uuidv4(),
      createdAt: Date.now() - 100000,
      description: 'Cillum fugiat sunt Lorem non commodo ad enim proident laboris amet dolore.',
      status: 'finished',
    },
  ],
};

interface Props {
  children: React.ReactNode;
}

export const EntriesProvider: React.FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(entriesReducer, ENTRIES_INITIAL_STATE);
  return (
    <EntriesContext.Provider
      value={{
        ...state,
      }}
    >
      {children}
    </EntriesContext.Provider>
  );
};
