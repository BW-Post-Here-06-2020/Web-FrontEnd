import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const ButtonAppBar = () => {
  const token = useSelector((state) => state.userReducer.token);

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Hello
          </Typography>
          {token ? (
            <Link
              to="/logout"
              style={{ textDecoration: "none", color: "white" }}
            >
              <Button color="inherit">Logout</Button>
            </Link>
          ) : (
            <>
              <Link to="/" style={{ textDecoration: "none", color: "white" }}>
                <Button color="inherit">Home</Button>
              </Link>
              <Link
                to="/login"
                style={{ textDecoration: "none", color: "white" }}
              >
                <Button color="inherit">Login</Button>
              </Link>
            </>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default ButtonAppBar;
