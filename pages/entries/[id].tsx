import { Layout } from '../../components/layouts';

import { EntryStatus } from '../../interfaces';


import { Button, capitalize, Card, CardActions, CardContent, CardHeader, FormControl, FormControlLabel, FormLabel, Grid, Radio, RadioGroup, TextField, IconButton } from '@mui/material';
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import DeleteIcon from '@mui/icons-material/Delete';


const validStatus: EntryStatus[] = ['pending', 'in-progress', 'finished'];


export const EntryPage = () => {
  return (
    <Layout title='....'>
      <Grid
        container
        justifyContent='center'
        sx={{ marginTop: 2 }}
      >
        <Grid item xs={12} sm={8} md={6}>
          <Card>
            <CardHeader 
              title='Entrada:' 
              subheader={`Creada hace .... minutos`}  
            />
            <CardContent>
              <TextField 
                sx={{ marginTop: 2, marginBottom: 1 }}
                fullWidth
                placeholder='Nueva Entrada'
                label='Nueva entrada'
              />
              {/* Radio */}
              <FormControl>
                <FormLabel>Estado:</FormLabel>
                <RadioGroup
                  row={true}
                >
                  {
                    validStatus.map( option => (
                      <FormControlLabel 
                        key={option}
                        value={option}
                        control={<Radio />}
                        label={capitalize(option)}
                      />
                    ))
                  }
                </RadioGroup>
              </FormControl>
            </CardContent>
            <CardActions>
              <Button
                startIcon={<SaveOutlinedIcon />}
                variant='contained'
                fullWidth
              >
                Save
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
      <IconButton
        sx={{ 
          position: 'fixed',
          bottom: 30,
          right: 30,
          backgroundColor: 'error.dark'
        }}
      >
        <DeleteIcon />
      </IconButton>
    </Layout>
  )
}


export default EntryPage;