import express from "express";
import { getPrimeMedian } from "./utils";
import bodyparser from "body-parser";
import { isValid } from "./validNumber";
const app = express();
const PORT = 3080;

// set up middleware to extract body data
app.use(bodyparser.json());

// api section
// serve the primes
app.post("/primes", (req, res) => {
  const num = req.body.number;
  let result = {
    median: []
  };
  if(isValid(num)) {
    result = {
      median: getPrimeMedian(num)
    };
  }
  
  res.send(result);
});
// start listening on ports
app.listen(PORT, () => {
  console.log("Listening on port: " + PORT);
});
