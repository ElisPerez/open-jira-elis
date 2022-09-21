import { EntriesState } from './';

type EntriesActionType = { type: '[Entries] - ActionName' };

export const entriesReducer = (state: EntriesState, action: EntriesActionType): EntriesState => {
  switch (action.type) {
    // case '[Entries] - ActionName':
    //   return {
    //     ...state,
    //     property: value,
    //   };

    default:
      return state;
  }
};
