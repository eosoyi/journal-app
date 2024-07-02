import { Link as RouterLink } from "react-router-dom";
import {
  Alert,
  Button,
  Grid,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "../../hooks/useForm";
import { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startCreatingUserWhitEmailPassword } from "../../store/auth/Thunks";
import { RootState } from "../../store/Store";

interface FormData {
  email: string;
  password: string;
  displayName: string;
  isFormValid: any;
}

interface Validation {
  (value: string): boolean;
}

interface FormValidations {
  [key: string]: [Validation, string];
}

const initData: FormData = {
  displayName: "",
  email: "",
  password: "",
  isFormValid: "",
};

const formValidations: FormValidations = {
  email: [
    (value: string) => value.includes("@"),
    "El correo debe de tener una @",
  ],
  password: [
    (value: string) => value.length >= 6,
    "El password debe tener mas de 6 letras",
  ],
  displayName: [
    (value: string) => value.length >= 1,
    "El nombre es obligatorio",
  ],
};

export const RegisterPage = () => {
  const {
    formState,
    onInputChange,
    isFormValid,
    displayNameValid,
    emailValid,
    passwordValid,
  } = useForm(initData, formValidations);

  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
  const dispatch = useDispatch();
  const { status, errorMessage } = useSelector(
    (state: RootState) => state.auth
  );

  const isCheckingAuthentication = useMemo(
    () => status === "checking",
    [status]
  );

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormSubmitted(true);
    if (!isFormValid) return;
    dispatch(
      startCreatingUserWhitEmailPassword(
        formState.email,
        formState.password,
        formState.displayName
      )
    );
  };

  return (
    <AuthLayout title="Create acount">
      <form onSubmit={onSubmit}>
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Nombre completo"
              type="text"
              placeholder="Ingresa tu nombre"
              fullWidth
              name="displayName"
              value={formState.displayName}
              onChange={onInputChange}
              error={!!displayNameValid && formSubmitted}
              helperText={formSubmitted ? displayNameValid : ""}
            ></TextField>
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Correo"
              type="email"
              placeholder="example@example.com"
              fullWidth
              name="email"
              value={formState.email}
              onChange={onInputChange}
              error={!!emailValid && formSubmitted}
              helperText={formSubmitted ? emailValid : ""}
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
              error={!!passwordValid && formSubmitted}
              helperText={formSubmitted ? passwordValid : ""}
            ></TextField>
          </Grid>

          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
            <Grid item xs={12} display={!!errorMessage ? "" : "none"}>
              <Alert severity="error">{errorMessage}</Alert>
            </Grid>
            <Grid item xs={12} sm={12}>
              <Button
                disabled={isCheckingAuthentication}
                type="submit"
                variant="contained"
                fullWidth
              >
                Crear cuenta
              </Button>
            </Grid>
          </Grid>

          <Grid container direction="row" justifyContent="end">
            <Typography sx={{ mr: 1 }}>¿Ya tienes cuenta?</Typography>
            <Link component={RouterLink} color="inherit" to="/auth/login">
              Ingresar
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};
