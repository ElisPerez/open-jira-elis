import { List, Paper } from '@mui/material';
import { EntryCard } from './EntryCard';

export const EntryList = () => {
  return (
    // TODO: Here I'll make a drop
    <div>
      <Paper
        sx={{ height: 'calc(100vh - 180px)', overflow: 'scroll', backgroundColor: 'transparent', padding: '3px 5px' }}
      >
        {/* TODO: will change if I am doing drag or not */}
        <List sx={{opacity: 1}}>
          <EntryCard />
        </List>
      </Paper>
    </div>
  );
};
