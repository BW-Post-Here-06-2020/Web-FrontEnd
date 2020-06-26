import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import { dummyData as data } from "./DummyData";

import { getData } from "../actions/postActions";
import { getRecommendation } from "../actions/postActions";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import LinearProgress from "@material-ui/core/LinearProgress";

const loadingStyle = makeStyles((theme) => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: "center",
    minWidth: 275,
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
}));

const initialFormValues = {
  title: "",
  body: "",
};

const Dashboard = () => {
  const classes = useStyles();

  const loadingClasses = loadingStyle();

  const dispatch = useDispatch();
  const { isLoading, dataArray } = useSelector((state) => state.postReducer);

  const [formValues, setFormValues] = useState(initialFormValues);

  // useEffect(() => {
  //   dispatch(getData());
  // }, []);

  const handleChange = (event) => {
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div>
      <br></br>
      <form className={classes.root} noValidate autoComplete="off">
        <div>
          <TextField
            name="title"
            id="title"
            type="text"
            label="Post Title"
            multiline
            value={formValues.title}
            onChange={handleChange}
          />
          <TextField
            name="body"
            id="body"
            type="text"
            label="Post Content"
            multiline
            value={formValues.body}
            onChange={handleChange}
          />
          <br></br>
          <br></br>
          <Button onClick={() => dispatch(getRecommendation(formValues))}>
            Get Recommendation
          </Button>
        </div>
      </form>
      {isLoading ? (
        <div className={loadingClasses.root}>
          <br></br>
          <LinearProgress />
        </div>
      ) : (
        <></>
      )}
      <br></br>
      {dataArray.length ? (
        <div>
          {dataArray.map((item) => (
            <div key={item.id}>
              <Card className={classes.root} variant="outlined">
                <CardContent>
                  <Typography variant="h5" component="h2">
                    {item.title}
                  </Typography>
                  <p></p>
                  <Typography variant="body2" component="p">
                    {item.post}
                  </Typography>
                  <br></br>
                  {item.prediction.map((item) => (
                    <div>
                      <Typography
                        className={classes.title}
                        color="textSecondary"
                        gutterBottom
                      >
                        {item}
                      </Typography>
                    </div>
                  ))}
                </CardContent>
                <CardActions>
                  <Button size="small">Add To Favorites</Button>
                </CardActions>
              </Card>
            </div>
          ))}
        </div>
      ) : (
        <div className={classes.root}>
          <br></br>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            Please submit a post to recieve a recommendation.
          </Typography>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
