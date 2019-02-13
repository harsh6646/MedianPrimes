# TouchBistro_challenge

Web App for touchbistro challenge.
This uses a react front end and a Nodejs backend allowing the user to find the median prime(s) for their given limit number.

### Starting the App

```bash
# Clone the repo
git clone https://github.com/harsh6646/MedianPrimes.git
# Nagivate to main folder
cd MedianPrimes
# install dependencies
npm install

cd client

npm install
# Starting the servers
npm start
```

### Testing

```bash
npm test
```

### API

Get the median primes

Endpoint: `/primes`

Request Type: `POST`

Body Params:

`number`

    type: `<number>`

    required: `True`
