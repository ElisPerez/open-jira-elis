import { ChangeEvent, useContext, useState } from 'react';
import { Button, Box, TextField } from '@mui/material';

import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';

import { EntriesContext } from '../../context/entries';
import { UIContext } from '../../context/ui';

export const NewEntry = () => {
  const { addNewEntry } = useContext(EntriesContext);
  const { isAddingEntry, setIsAddingEntry } = useContext(UIContext); // isAddingEntry: boolean;

  const [inputValue, setInputValue] = useState('');

  const [touched, setTouched] = useState(false);

  const onTextFieldChanged = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleCancelButton = () => {
    setTouched(false);
    setInputValue('');
    setIsAddingEntry(false);
  };

  const onSave = () => {
    if (inputValue.trim().length <= 0) return;
    // console.log({ inputValue });

    addNewEntry(inputValue);
    handleCancelButton();
  };

  return (
    <Box sx={{ marginBottom: 2, paddingX: 1 }}>
      {isAddingEntry ? (
        <>
          <TextField
            autoFocus
            error={inputValue.trim().length <= 0 && touched}
            fullWidth
            helperText={inputValue.trim().length <= 0 && touched && 'Enter a value'}
            label='New Entry'
            multiline
            onChange={onTextFieldChanged}
            placeholder='New entry'
            sx={{ marginTop: 2, marginBottom: 1 }}
            value={inputValue}
            onBlur={() => setTouched(true)} // onBlur is when it loses the focus when leaving the input
          />
          <Box display='flex' justifyContent='space-between'>
            <Button color='info' onMouseDown={handleCancelButton} variant='contained'>
              Cancel
            </Button>
            <Button
              color='secondary'
              endIcon={<SaveOutlinedIcon />}
              onClick={onSave}
              variant='contained'
            >
              Save
            </Button>
          </Box>
        </>
      ) : (
        <Button
          fullWidth
          startIcon={<AddCircleOutlineOutlinedIcon />}
          onClick={() => setIsAddingEntry(true)}
          variant='outlined'
        >
          Add ToDo
        </Button>
      )}
    </Box>
  );
};
