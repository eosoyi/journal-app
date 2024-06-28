import { Link as RouterLink } from "react-router-dom";
import { Google, Password } from "@mui/icons-material";
import { Button, Grid, Link, TextField, Typography } from "@mui/material";
import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "../../hooks/useForm";
import React, { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  checkingAuthentication,
  startGoogleSignIn,
} from "../../store/auth/Thunks";
import { RootState } from "../../store/Store";

interface FormValues {
  email: string;
  password: string;
}

const initialFormValues: FormValues = {
  email: "",
  password: "",
};

export const LoginPage = () => {
  const { formState, onInputChange } = useForm(initialFormValues);
  const dispatch = useDispatch();

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(checkingAuthentication(formState.email, formState.password));
  };

  const onGoogleSignIn = () => {
    dispatch(startGoogleSignIn());
  };

  const { status } = useSelector((state: RootState) => state.auth);

  const isAuthenticated = useMemo(() => status === 'checking', [status]);

  return (
    <AuthLayout title="Login">
      <form onSubmit={onSubmit}>
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Correo"
              type="email"
              placeholder="example@example.com"
              fullWidth
              value={formState.email}
              name="email"
              onChange={onInputChange}
            ></TextField>
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Contraseña"
              type="password"
              placeholder="Contraseña"
              fullWidth
              name="password"
              value={formState.password}
              onChange={onInputChange}
            ></TextField>
          </Grid>

          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
            <Grid item xs={12} sm={6}>
              <Button disabled={isAuthenticated} type="submit" variant="contained" fullWidth>
                Login
              </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button disabled={isAuthenticated} onClick={onGoogleSignIn} variant="contained" fullWidth>
                <Google></Google>
                <Typography sx={{ ml: 1 }}>Google</Typography>
              </Button>
            </Grid>
          </Grid>

          <Grid container direction="row" justifyContent="end">
            <Link component={RouterLink} color="inherit" to="/auth/register">
              Crear cuenta
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};
