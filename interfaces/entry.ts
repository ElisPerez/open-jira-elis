export interface Entry {
  _id: string;
  createdAt: number;
  description: string;
  status: EntryStatus; // 'pending' | 'in-progress' | 'finished'
}

export type EntryStatus = 'pending' | 'in-progress' | 'finished'