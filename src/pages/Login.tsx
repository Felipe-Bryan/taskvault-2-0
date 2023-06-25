import React, { useState } from 'react';
import { Paper, Grid, Typography, TextField, Button, FormControlLabel, Checkbox } from '@mui/material';
import { ToastContainer } from 'react-toast';
import PasswordField from '../components/PasswordField';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginAction } from '../store/modules/loggedUser';

const Login: React.FC = () => {
  const dispatch = useDispatch<any>();
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleLogin = () => {
    const userToLogin = {
      email,
      password
    };

    dispatch(loginAction(userToLogin));

    navigate('/home');
  };

  return (
    <>
      <Paper elevation={3} style={{ padding: '5px', maxWidth: '500px', backgroundColor: 'white' }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography align="center" variant="h4">
              <img style={{ height: '40px' }} src="./assets/images/taskVault-logo.png" alt="logo" />
            </Typography>
          </Grid>

          <Grid item xs={12}>
            <Typography align="center" variant="h4">
              Fazer Login
            </Typography>
          </Grid>

          <Grid item xs={12}>
            <TextField
              //   error={userEmailError}
              //   helperText={userEmailError ? 'Digite um e-mail válido, no mínimo 5 caracteres' : ''}
              onChange={e => setEmail(e.target.value)}
              fullWidth
              label="Email"
              variant="outlined"
            />
          </Grid>

          <Grid item xs={12}>
            <PasswordField
              //   onKeyDown={handleKeyDown}
              //   error={userPasswordError}
              //   helperText={userPasswordError ? 'Digite uma senha válida, no mínimo 5 caracteres' : ''}
              onChange={e => setPassword(e.target.value)}
              label="Senha"
            ></PasswordField>
          </Grid>

          <Grid item xs={12}>
            <Button
              fullWidth
              variant="contained"
              //   disabled={!valid}
              onClick={handleLogin}
              //   className={valid ? 'animate__animated animate__pulse animate__infinite infinite' : ''}
            >
              Entrar
            </Button>
          </Grid>

          <Grid item xs={12}>
            <FormControlLabel
              control={
                <Checkbox
                  // onChange={handleStayLogged}
                  defaultChecked
                />
              }
              label="Permanecer conectado"
            />
          </Grid>

          <Grid item xs={12}>
            <Typography>Ainda não possui uma conta?</Typography>
            <Button
              // onClick={handleChangePage}
              variant="text"
            >
              Faça seu cadastro.
            </Button>
          </Grid>
        </Grid>
        {/* <AlertDialogSlide
          onKeyDownAction={handleKeyDownButton}
          description="Você será redirecionado(a) para a página de recados."
          actionConfirm={() => navigate('/home')}
          actionCancel={() => navigate('/home')}
          openDialog={openAlert}
          title="Usuário logado com sucesso!"
          confirmButtonTitle="OK"
        /> */}
      </Paper>
      <ToastContainer delay={3000} position="bottom-right" />
    </>
  );
};

export default Login;
