# mrs-play
A demo project for demo purposes

## How to start developing
Run the following command once you've cloned the repository:
```
npm install
```

Voila, you've got everything you need.
After doing some of your developing you can **build** the source code with the following command:
```
gulp
```
This will create a distribution which will end up in the `dist/` folder.

## Running the stuff
Before you open up the `dist/index.html` file and run it you want to start the API, this is done with the following command:
```
node launch-server.js
```
This (and this is the surprising part) launches the server (told ya!).

## API Documentation

The api has currently 2 endpoints:
```
/api/bets
/api/bets/:id
```

The `/api/bets` end point returns an array of bets that looks like this:
```
[
  {
    Id: 14123421,
    Teams: {
      Home: 'Home Team IF',
      Away: 'IFK Away'
    },
    Odds: {
      Home: 1.89,
      Draw: 1.25,
      Away: 2.50
    },
    Active: true
  }
}
```

So if the server url is `http://localhost:8080` (which is default) then a call to get all bets would look like this:
`http://localhost:8080/api/bets` and it would return an array of bets according to the above data structure.

If you want a single bet you can call the bets API using the Id of a single bet, like this:
`http://localhost:8080/api/bets/14123421`
This will return the individual bet as a json object (rather than an array of json objects).