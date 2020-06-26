import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { loginUser, registerUser } from "../actions/userActions";

import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const Copyright = () => {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Post Here
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
};

const initialLoginValues = {
  username: "",
  password: "",
};

const initialRegisterValues = {
  first_name: "",
  last_name: "",
  username: "",
  password: "",
  phone: "",
};

const Login = () => {
  const dispatch = useDispatch();
  const { push } = useHistory();

  const [loginValues, setLoginValues] = useState(initialLoginValues);

  const [registerValues, setRegisterValues] = useState(initialRegisterValues);

  const classes = useStyles();

  const [open, setOpen] = useState(false);

  const openModalHandler = () => {
    setOpen(true);
  };

  const closeModalHandler = () => {
    setOpen(false);
  };

  const handleLoginChange = (event) => {
    setLoginValues({ ...loginValues, [event.target.name]: event.target.value });
  };

  const handleRegisterChange = (event) => {
    setRegisterValues({
      ...registerValues,
      [event.target.name]: event.target.value,
    });
  };

  const login = (e) => {
    e.preventDefault();
    dispatch(loginUser(loginValues));
    setLoginValues(initialLoginValues);
    push("/");
  };

  const createAccount = (e) => {
    e.preventDefault();
    dispatch(registerUser(registerValues));
    dispatch(
      loginUser({
        username: registerValues.username,
        password: registerValues.password,
      })
    );
    closeModalHandler();
    setRegisterValues(initialRegisterValues);
  };

  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>{/* <LockOutlinedIcon /> */}</Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form onSubmit={login} className={classes.form} noValidate>
          <TextField
            value={loginValues.username}
            onChange={handleLoginChange}
            type="text"
            variant="outlined"
            fullWidth
            margin="normal"
            required
            id="username"
            label="Username"
            name="username"
            autoComplete="username"
            autoFocus
          />

          <TextField
            value={loginValues.password}
            onChange={handleLoginChange}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2" onClick={openModalHandler}>
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>

        <Dialog
          open={open}
          onClose={closeModalHandler}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogContent>
            <Avatar className={classes.avatar}></Avatar>
            <Typography component="h1" variant="h5">
              {" "}
              Create Account
            </Typography>

            <form onSubmit={createAccount} className={classes.form} noValidate>
              <TextField
                value={registerValues.first_name}
                onChange={handleRegisterChange}
                type="text"
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="first_name"
                label="First Name"
                name="first_name"
                autoComplete="first_name"
                autoFocus
              />
              <TextField
                value={registerValues.last_name}
                onChange={handleRegisterChange}
                type="text"
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="last_name"
                label="Last Name"
                name="last_name"
                autoComplete="last_name"
              />
              <TextField
                value={registerValues.username}
                onChange={handleRegisterChange}
                type="text"
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
                autoComplete="username"
              />

              <TextField
                value={registerValues.password}
                onChange={handleRegisterChange}
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />

              <TextField
                value={registerValues.phone}
                onChange={handleRegisterChange}
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="phone"
                label="Phone Number"
                type="number"
                id="phone"
                autoComplete="current-phone"
              />

              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Sign Up
              </Button>
            </form>
          </DialogContent>

          <DialogActions>
            <Button onClick={closeModalHandler} color="primary">
              {" "}
              Cancel{" "}
            </Button>
          </DialogActions>
        </Dialog>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
};

export default Login;
