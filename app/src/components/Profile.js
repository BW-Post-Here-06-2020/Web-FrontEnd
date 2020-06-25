import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";

import { useSelector, useDispatch } from "react-redux";

import { updateUser } from "../actions/userActions";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: "33.33%",
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
}));

const initialFormValues = {
  first_name: "",
  last_name: "",
  username: "",
  password: "",
  new_password: "",
  phone: "",
};

const Profile = () => {
  const profile = useSelector((state) => state.userReducer.currentUser);

  const dispatch = useDispatch();

  const [userInfo, setUserInfo] = useState(initialFormValues);

  useEffect(() => {
    profile ? setUserInfo(profile) : setUserInfo(initialFormValues);
  }, [profile]);

  const [open, setOpen] = useState(false);

  const openModalHandler = () => {
    setOpen(true);
  };

  const closeModalHandler = () => {
    setOpen(false);
  };

  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const handleInputChange = (event) => {
    setUserInfo({
      ...userInfo,
      [event.target.name]: event.target.value,
    });
  };

  const runUserUpdate = (e) => {
    e.preventDefault();
    dispatch(updateUser(profile.id, userInfo));
    closeModalHandler();
  };

  return (
    <div className={classes.root}>
      <ExpansionPanel
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className={classes.heading}>General settings</Typography>
          <Typography className={classes.secondaryHeading}>
            I am an expansion panel
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
            Aliquam eget maximus est, id dignissim quam.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography className={classes.heading}>User</Typography>
          <Typography className={classes.secondaryHeading}>
            You are currently logged in
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            Donec placerat, lectus sed mattis semper, neque lectus feugiat
            lectus, varius pulvinar diam eros in elit. Pellentesque convallis
            laoreet laoreet.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography className={classes.heading}>Advanced settings</Typography>
          <Typography className={classes.secondaryHeading}>
            Yay, all I get is a placeholder
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer
            sit amet egestas eros, vitae egestas augue. Duis vel est augue.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
      >
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography className={classes.heading}>Personal data</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            First Name: {profile.first_name}
            <br></br>
            <br></br>
            Last Name: {profile.last_name}
            <br></br>
            <br></br>
            Username: {profile.username}
            <br></br>
            <br></br>
            Password: **********
            <br></br>
            <br></br>
            Phone Number: {profile.phone}
            <br></br>
            <br></br>
            <button onClick={openModalHandler}>Edit</button>
          </Typography>
          <br></br>
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
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
                    Edit Personal Data
                  </Typography>

                  <form
                    onSubmit={runUserUpdate}
                    className={classes.form}
                    noValidate
                  >
                    <TextField
                      value={userInfo.first_name}
                      onChange={handleInputChange}
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
                      value={userInfo.last_name}
                      onChange={handleInputChange}
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
                      value={userInfo.username}
                      onChange={handleInputChange}
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
                      value={userInfo.password}
                      onChange={handleInputChange}
                      variant="outlined"
                      margin="normal"
                      required
                      fullWidth
                      name="password"
                      label="Old Password"
                      type="password"
                      id="password"
                      autoComplete="current-password"
                    />

                    <TextField
                      value={userInfo.new_password}
                      onChange={handleInputChange}
                      variant="outlined"
                      margin="normal"
                      required
                      fullWidth
                      name="new_password"
                      label="New Password"
                      type="password"
                      id="new_password"
                      autoComplete="current-password"
                    />

                    <TextField
                      value={userInfo.phone}
                      onChange={handleInputChange}
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

                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      color="primary"
                      className={classes.submit}
                    >
                      Submit
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
          </Container>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
};

export default Profile;
