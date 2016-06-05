'use strict';

const Bets = [
  {
    Id: 14123421,
    Teams: {
      Home: 'Helsingborgs IF',
      Away: 'IFK Göteborg'
    },
    Odds: {
      Home: 1.89,
      Draw: 1.25,
      Away: 2.50
    },
    Active: true
  },
  {
    Id: 6452323,
    Teams: {
      Home: 'Trelleborgs IF',
      Away: 'Dalkurd'
    },
    Odds: {
      Home: 2.1,
      Draw: 1.85,
      Away: 4.50
    },
    Active: true
  },
  {
    Id: 9995674,
    Teams: {
      Home: 'Trolle-Ljungby IF',
      Away: 'Mjällby AIF'
    },
    Odds: {
      Home: 14.70,
      Draw: 10.25,
      Away: 1.15
    },
    Active: false
  },
  {
    Id: 1562634,
    Teams: {
      Home: 'Malmö FF',
      Away: 'IFK Norrköping'
    },
    Odds: {
      Home: 1.22,
      Draw: 1.75,
      Away: 4.32
    },
    Active: true
  }
];

export default function (server) {
  server.get('/api/bets', (req, res) => {
    console.log('A request arrived for all bets!');
    res.json(Bets);
  });

  server.get('/api/bets/:id', (req, res) => {
    var id = parseInt(req.params.id);
    console.log('A request arrived for bet ', id);
    var bet = null;
    for (var i = 0; i < Bets.length; i++) {
      if (Bets[i].Id === id) {
        bet = Bets[i];
      }
    }

    if (bet) {
      res.json(bet);
    } else {
      throw new Error()
    }
  });
}
