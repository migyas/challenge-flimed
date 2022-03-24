import Grid from '@mui/material/Grid';

export function App() {

  return (
    <Grid container >
      <Grid item xs={12} md={6} lg={12} p={7} style={{background: 'yellowgreen'}}>
          <h1>Hello World</h1>
      </Grid>
      <Grid item xs={3} md={6} lg={12} mt={{xs: 2, sm: 5}} style={{background: 'green'}}>
          <h1>Hello World</h1>
      </Grid>
    </Grid>
  )
}

