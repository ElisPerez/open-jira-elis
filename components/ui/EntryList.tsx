import { useContext, useMemo } from 'react';
import { List, Paper } from '@mui/material';
import { EntryStatus } from '../../interfaces';
import { EntryCard } from './EntryCard';
import { EntriesContext } from '../../context/entries';

interface Props {
  status: EntryStatus;
}

export const EntryList: React.FC<Props> = ({ status }) => {
  // console.log(`🚀 status`, status);
  const { entries } = useContext(EntriesContext);

  const entriesByStatus = useMemo(
    () => entries.filter(entry => entry.status === status),
    [entries, status]
  );

  return (
    // TODO: Here I'll make a drop
    <div>
      <Paper
        sx={{
          height: 'calc(100vh - 180px)',
          overflow: 'scroll',
          backgroundColor: 'transparent',
          padding: '3px 5px',
        }}
      >
        {/* TODO: will change if I am doing drag or not */}
        <List sx={{ opacity: 1 }}>
          {entriesByStatus.map(entry => (
            <EntryCard key={entry._id} entry={entry} />
          ))}
        </List>
      </Paper>
    </div>
  );
};
