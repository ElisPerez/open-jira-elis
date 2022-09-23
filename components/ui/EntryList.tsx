import { DragEvent, useContext, useMemo } from 'react';
import { List, Paper } from '@mui/material';
import { EntryStatus } from '../../interfaces';
import { EntryCard } from './EntryCard';
import { EntriesContext } from '../../context/entries';
import { UIContext } from '../../context/ui';

import styles from './EntryList.module.css';

interface Props {
  status: EntryStatus;
}

export const EntryList: React.FC<Props> = ({ status }) => {
  // console.log(`🚀 status`, status);

  const { isDragging, endDragging } = useContext(UIContext);

  const { entries, updateEntry } = useContext(EntriesContext);

  const entriesByStatus = useMemo(
    () => entries.filter(entry => entry.status === status),
    [entries, status]
  );

  const allowDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const onDropEntry = (e: DragEvent<HTMLDivElement>) => {
    // console.log(`🚀 eonDropEntry Event`, e);
    const id = e.dataTransfer.getData('text'); // ?: text es la variable que está en el archivo EntryCard: e.dataTransfer.setData('text', entry._id);
    // console.log(`🚀 id`, id);

    const entry = entries.find(e => e._id === id)!; // The sign of admiration (!) at the end is to confirm that it will always have a value (it will never be "Undefined")

    entry.status = status;

    updateEntry(entry);
    endDragging();
  };

  return (
    // TODO: Here I'll make a drop
    <div onDrop={onDropEntry} onDragOver={allowDrop} className={isDragging ? styles.dragging : ''}>
      <Paper
        sx={{
          height: 'calc(100vh - 180px)',
          overflow: 'scroll',
          backgroundColor: 'transparent',
          padding: '3px 5px',
        }}
      >
        {/* TODO: will change if I am doing drag or not */}
        <List sx={{ opacity: isDragging ? 0.3 : 1, transition: 'all .3s' }}>
          {entriesByStatus.map(entry => (
            <EntryCard key={entry._id} entry={entry} />
          ))}
        </List>
      </Paper>
    </div>
  );
};
