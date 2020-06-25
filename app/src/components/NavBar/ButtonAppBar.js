import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { logoutUser } from "../../actions/userActions";

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

  const dispatch = useDispatch();

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
            A Subreddit Predictor
          </Typography>
          {token ? (
            <>
              <Link to="/" style={{ textDecoration: "none", color: "white" }}>
                <Button color="inherit">Dashboard</Button>
              </Link>
              <Link
                to="/profile"
                style={{ textDecoration: "none", color: "white" }}
              >
                <Button color="inherit">Profile</Button>
              </Link>
              <Link to="/" style={{ textDecoration: "none", color: "white" }}>
                <Button onClick={() => dispatch(logoutUser())} color="inherit">
                  Logout
                </Button>
              </Link>
            </>
          ) : (
            <>
              {/* <Link to="/" style={{ textDecoration: "none", color: "white" }}>
                <Button color="inherit">Home</Button>
              </Link> */}
              <Link to="/" style={{ textDecoration: "none", color: "white" }}>
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
