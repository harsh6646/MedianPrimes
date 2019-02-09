const express = require('express');
const app = express();
const PORT = 3000;
// app section
// serve static
app.use(express.static(__dirname + "/public"));

// api section
// serve the primes
app.post('/primes', (req, res) => {
    req.
    result = {
        median: median
    }

    res.json(result);
});
// start listening on ports
app.listen(PORT, () => {
    console.log("Listening on port: " + PORT);
});