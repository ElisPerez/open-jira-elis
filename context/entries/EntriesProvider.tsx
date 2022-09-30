import { useEffect, useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { EntriesContext, entriesReducer } from './';
import { Entry } from '../../interfaces';
import { entriesApi } from '../../apis';

export interface EntriesState {
  entries: Entry[];
}

const ENTRIES_INITIAL_STATE: EntriesState = {
  entries: [],
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
      type: '[Entry] - Add-Entry',
      payload: newEntry,
    });
  };

  const updateEntry = (entry: Entry) => {
    dispatch({ type: '[Entry] - Entry-Updated', payload: entry });
  };

  const refreshEntries = async () => {
    const { data } = await entriesApi.get<Entry[]>('/entries');
    // console.log(`🚀 data`, data);
    dispatch({ type: '[Entry] - Refresh-Data', payload: data });
  };

  useEffect(() => {
    refreshEntries();
  }, []);

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
