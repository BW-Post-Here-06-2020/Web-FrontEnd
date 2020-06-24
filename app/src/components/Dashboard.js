import React, { useEffect } from "react";

import { useDispatch } from "react-redux";

import { dummyData as data } from "./DummyData";

import { getData } from "../actions/postActions";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const Dashboard = () => {
  const classes = useStyles();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData());
  }, []);

  useEffect(() => {
    console.log(data);
  }, []);

  return (
    <div>
      {data.length ? (
        <div>
          {data.map((item) => (
            <div>
              <Card className={classes.root} variant="outlined">
                <CardContent>
                  <Typography
                    className={classes.title}
                    color="textSecondary"
                    gutterBottom
                  >
                    User Name Goes Here
                  </Typography>
                  <Typography variant="h5" component="h2">
                    {item.title}
                  </Typography>
                  {/* <Typography className={classes.pos} color="textSecondary">
                    adjective
                  </Typography> */}
                  <p></p>
                  <Typography variant="body2" component="p">
                    {item.post}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </Card>
            </div>
          ))}
        </div>
      ) : (
        <p>There is nothing to display</p>
      )}
    </div>
  );
};

export default Dashboard;
