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
      description: 'Pending: Nostrud proident dolore eu reprehenderit exercitation est.',
      status: 'pending',
    },
    {
      _id: uuidv4(),
      createdAt: Date.now() - 1000000,
      description: 'In-progress: Consequat irure do consectetur nulla consequat laboris esse.',
      status: 'in-progress',
    },
    {
      _id: uuidv4(),
      createdAt: Date.now() - 100000,
      description:
        'Finished: Cillum fugiat sunt Lorem non commodo ad enim proident laboris amet dolore.',
      status: 'finished',
    },
  ],
};

interface Props {
  children: React.ReactNode;
}

export const EntriesProvider: React.FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(entriesReducer, ENTRIES_INITIAL_STATE);

  const addNewEntry = (description: string) => {
    const newEntry: Entry = {
      _id: uuidv4(),
      createdAt: Date.now(),
      description,
      status: 'pending',
    };

    dispatch({
      type: '[Entry] - Add Entry',
      payload: newEntry,
    });
  };

  const updateEntry = (entry: Entry) => {
    dispatch({type: '[Entry] - Entry Updated', payload: entry})
  };

  return (
    <EntriesContext.Provider
      value={{
        ...state,

        // Methods
        addNewEntry,
        updateEntry,
      }}
    >
      {children}
    </EntriesContext.Provider>
  );
};
