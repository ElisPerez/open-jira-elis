import { createContext } from 'react';
import { Entry } from '../../interfaces';

interface ContextProps {
entries: Entry[]; // TODO: the array data type is missing.
}

export const EntriesContext = createContext({} as ContextProps);
