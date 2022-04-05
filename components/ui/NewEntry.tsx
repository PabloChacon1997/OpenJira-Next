import { ChangeEvent, useState } from 'react';

import { Box, Button, TextField } from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';
import AddCircleIcon from '@mui/icons-material/AddCircle';


export const NewEntry = () => {

  const [isAdding, setIsAdding] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [touched, setTouched] = useState(false);


  const onTextFieldChanges = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  }

  const onSave = () => {
    if (inputValue.length === 0) return;
    console.log({inputValue});
  }

  return (
    <Box sx={{ marginBottom: 2, paddingX: 2 }}>

      {
        isAdding 
          ? (
            <>
              <TextField
                fullWidth
                sx={{ marginTop: 2, marginBottom: 1 }}
                placeholder='Nueva entrada'
                autoFocus
                multiline
                label='Nueva entrada'
                error={ inputValue.length <= 0 && touched}
                helperText={inputValue.length <= 0 && touched && 'Ingrese un valor'}
                value={inputValue}
                onChange={onTextFieldChanges}
                onBlur={() => setTouched(true)}
              />
              <Box display='flex' justifyContent='space-between'>
                <Button
                  variant='outlined'
                  onClick={() => setIsAdding(false)}
                >
                  Cancelar
                </Button>
                <Button
                  variant='outlined'
                  color='secondary'
                  endIcon={<SaveIcon />}
                  onClick={onSave}
                >
                  Guardar
                </Button>
              </Box>
            </>
          )
          : 
          (
            <Button
              startIcon={<AddCircleIcon />}
              fullWidth
              variant='outlined'
              onClick={() => setIsAdding(true)}
            >
              Agregar tarea
            </Button>
          )
      }
      
    </Box>
  )
}
