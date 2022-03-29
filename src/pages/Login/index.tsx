import { Box, Grid, TextField, Checkbox, FormGroup, FormControlLabel, Link } from '@mui/material';
import logoImg from '../../assets/logo.svg';
import { Container, Content, Form } from "./styled";

export function Login() {
  return (
    <Container container justifyContent="center" alignItems="center">
      <Content container direction="column" justifyContent="center" alignItems="center">
        <Grid item style={{ marginBottom: "65px" }}>
          <img src={logoImg} alt="main logo" />
        </Grid>
        <Grid item>
          <Form >
            <h2>Faça login na sua conta</h2>
            <Box component="form" style={{ display: 'flex', flexDirection: 'column' }}>
              <TextField label="E-mail" type="email" />
              <TextField label="Senha" type="password" />
              <FormGroup>
                <FormControlLabel control={<Checkbox />} label="Lembre-se da minha senha." />
              </FormGroup>
              <Link href="/">Esqueceu a senha?</Link>
            </Box>
          </Form>
        </Grid>
      </Content>
    </Container >
  )
}
