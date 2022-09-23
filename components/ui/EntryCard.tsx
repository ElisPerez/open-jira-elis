import { Card, CardActionArea, CardActions, CardContent, Typography } from '@mui/material';
import { DragEvent, useContext } from 'react';
import { UIContext } from '../../context/ui';
import { Entry } from '../../interfaces';

interface Props {
  entry: Entry;
}
export const EntryCard: React.FC<Props> = ({ entry }) => {
  const { startDragging, endDragging } = useContext(UIContext);

  const onDragStart = (e: DragEvent) => {
    // console.log(e);
    e.dataTransfer.setData('text', entry._id);

    startDragging(); // Notify State to indicate that I am doing drag
  };

  const onDragEnd = () => {
    endDragging();
  };

  return (
    <Card
      sx={{ marginBottom: 1 }}
      // drag events
      draggable
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
    >
      <CardActionArea>
        <CardContent>
          <Typography sx={{ whiteSpace: 'pre-line' }}>{entry.description}</Typography>
        </CardContent>

        <CardActions sx={{ display: 'flex', justifyContent: 'end', paddingRight: 2 }}>
          <Typography variant='body2'>30min ago</Typography>
        </CardActions>
      </CardActionArea>
    </Card>
  );
};
