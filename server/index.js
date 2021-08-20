const express = require("express");
const cors = require("cors");

const app = express();


app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

app.get("/api/compliment", (req, res) => {
  const compliments = ["Gee, you're a smart cookie!",
					 "Cool shirt!",
					 "Your Javascript skills are stellar.",
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);
  
});
app.get("/api/fortune", (req, res) => {
  const fortune = ["You'll win the lottery.",
           "You'll marry rich.",
           "You need to tie your shoes.",
           "Don't forget to brush your teeth.",
           "You'll need to bring a sweater.",
           "You'll also need a towel.",
           "Don't pay attention to the last fortune.",
  ];

  let randomIndex = Math.floor(Math.random() * fortune.length);
  let randomFortune = fortune[randomIndex];

  res.status(200).send(randomFortune);
});

app.get("/api/color", (req, res) => {
  const color = ["red",
  "orange","yellow","green","blue","indigo","violet",
  ];

  let randomIndex = Math.floor(Math.random() * color.length);
  let randomColor = color[randomIndex];

  res.status(200).send(randomColor);
});

app.listen(4000, () => console.log("Server running on 4000"));
