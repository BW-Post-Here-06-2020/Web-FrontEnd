const express = require("express");
const bodyParser = require("body-parser");
const CORS = require("cors");

const app = express();
const token =
  "ahuBHejkJJiMDhmODZhZi0zaeLTQ4ZfeaseOGZgesai1jZWYgrTA07i73Gebhu98";

app.use(bodyParser.json());
app.use(CORS());

let dummyData = [
  {
    title: "Is Fusion nullified for the Extreme Z Awakening Event?",
    post:
      "On JP I missed out on my chance to do SSJ3 Goku the first time so I'm doing it now. Been lucked out of rotations for most of these stages and I've noticed that for my Fusions team, LR Gogeta would NEVER fuse. I'm genuinely curious if the mechanic is nullified for the event or i'm just getting AWFUL RNG.",
    prediction: [
      "DBZDokkanBattle",
      "Subreddit2",
      "Subreddit3",
      "Subreddit4",
      "Subreddit5",
      "Subreddit6",
      "Subreddit7",
      "Subreddit8",
      "Subreddit9",
      "Subreddit10",
    ],
  },
  {
    title: "Is Fusion nullified for the Extreme Z Awakening Event?",
    post:
      "On JP I missed out on my chance to do SSJ3 Goku the first time so I'm doing it now. Been lucked out of rotations for most of these stages and I've noticed that for my Fusions team, LR Gogeta would NEVER fuse. I'm genuinely curious if the mechanic is nullified for the event or i'm just getting AWFUL RNG.",
    prediction: [
      "DBZDokkanBattle",
      "Subreddit2",
      "Subreddit3",
      "Subreddit4",
      "Subreddit5",
      "Subreddit6",
      "Subreddit7",
      "Subreddit8",
      "Subreddit9",
      "Subreddit10",
    ],
  },
  {
    title: "Is Fusion nullified for the Extreme Z Awakening Event?",
    post:
      "On JP I missed out on my chance to do SSJ3 Goku the first time so I'm doing it now. Been lucked out of rotations for most of these stages and I've noticed that for my Fusions team, LR Gogeta would NEVER fuse. I'm genuinely curious if the mechanic is nullified for the event or i'm just getting AWFUL RNG.",
    prediction: [
      "DBZDokkanBattle",
      "Subreddit2",
      "Subreddit3",
      "Subreddit4",
      "Subreddit5",
      "Subreddit6",
      "Subreddit7",
      "Subreddit8",
      "Subreddit9",
      "Subreddit10",
    ],
  },
  {
    title: "Is Fusion nullified for the Extreme Z Awakening Event?",
    post:
      "On JP I missed out on my chance to do SSJ3 Goku the first time so I'm doing it now. Been lucked out of rotations for most of these stages and I've noticed that for my Fusions team, LR Gogeta would NEVER fuse. I'm genuinely curious if the mechanic is nullified for the event or i'm just getting AWFUL RNG.",
    prediction: [
      "DBZDokkanBattle",
      "Subreddit2",
      "Subreddit3",
      "Subreddit4",
      "Subreddit5",
      "Subreddit6",
      "Subreddit7",
      "Subreddit8",
      "Subreddit9",
      "Subreddit10",
    ],
  },
  {
    title: "Is Fusion nullified for the Extreme Z Awakening Event?",
    post:
      "On JP I missed out on my chance to do SSJ3 Goku the first time so I'm doing it now. Been lucked out of rotations for most of these stages and I've noticed that for my Fusions team, LR Gogeta would NEVER fuse. I'm genuinely curious if the mechanic is nullified for the event or i'm just getting AWFUL RNG.",
    prediction: [
      "DBZDokkanBattle",
      "Subreddit2",
      "Subreddit3",
      "Subreddit4",
      "Subreddit5",
      "Subreddit6",
      "Subreddit7",
      "Subreddit8",
      "Subreddit9",
      "Subreddit10",
    ],
  },
  {
    title: "Is Fusion nullified for the Extreme Z Awakening Event?",
    post:
      "On JP I missed out on my chance to do SSJ3 Goku the first time so I'm doing it now. Been lucked out of rotations for most of these stages and I've noticed that for my Fusions team, LR Gogeta would NEVER fuse. I'm genuinely curious if the mechanic is nullified for the event or i'm just getting AWFUL RNG.",
    prediction: [
      "DBZDokkanBattle",
      "Subreddit2",
      "Subreddit3",
      "Subreddit4",
      "Subreddit5",
      "Subreddit6",
      "Subreddit7",
      "Subreddit8",
      "Subreddit9",
      "Subreddit10",
    ],
  },
];

let nextId = 12;

function authenticator(req, res, next) {
  const { authorization } = req.headers;
  if (authorization === token) {
    next();
  } else {
    res.status(403).json({ error: "User must be logged in to do that." });
  }
}

app.post("/api/login", (req, res) => {
  const { username, password } = req.body;
  if (username === "abc" && password === "123") {
    req.loggedIn = true;
    setTimeout(() => {
      res.status(200).json({
        payload: token,
      });
    }, 1000);
  } else {
    res
      .status(403)
      .json({ error: "Username or Password incorrect. Please see Readme" });
  }
});

app.get("/api/dummyData", authenticator, (req, res) => {
  res.send(dummyData);
});

app.post("/api/dummyData", authenticator, (req, res) => {
  if (req.body.title !== undefined && req.body.post !== undefined) {
    const newentry = req.body;
    newentry.id = nextId;
    dummyData.push(newentry);
  }
  nextId = nextId + 1;
  res.status(201).json(dummyData);
});

app.put("/api/dummyData/:id", authenticator, (req, res) => {
  if (!req.params.id) res.status(400).send("Your request is missing the id");
  if (req.body.id === undefined || !req.body.title || !req.body.post) {
    res
      .status(422)
      .send("Make sure your request body has all the fields it needs");
  }
  dummyData = dummyData.map((data) => {
    if (`${data.id}` === req.params.id) {
      return req.body;
    }
    return data;
  });
  res.status(200).send(req.body);
});

app.delete("/api/dummyData/:id", authenticator, (req, res) => {
  if (!req.params.id) res.status(400).send("Your request is missing the id");
  dummyData = dummyData.filter((data) => `${data.id}` !== req.params.id);
  res.status(202).send(req.params.id);
});

app.get("/", function (req, res) {
  res.send("App is working 👍");
});

app.listen(5000, () => {
  console.log("Server listening on port 5000");
});
