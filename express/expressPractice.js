const express = require('express');
const bodyParser = require("body-parser");
const dumy = express();
const port = 3007;

dumy.use(bodyParser.urlencoded({ extended: false }));
dumy.use(bodyParser.json());

dumy.get( '/', (req, res) => {
    res.send('hello mounish welcome to dumy')
    }
)

dumy.get( '/balayya', (req, res) => {
    res.send('Jai Balayya');
    }
)

dumy.get('/balayya/namitha', (req, res) => {
    res.send('Simham anti chinnode Jai Balayya')
    }
)

dumy.get('/Chiru', (req, res) => {
    console.log(res.query);
    res.send('twinkel twinkel littel star chiranjeevi mega star');
    }
)

dumy.get( '/Chiru/:title', (req, res) => {
    console.log(req.params);
    res.send('shankar dada mbbs uh ah uh ah')
    }
)

dumy.listen(3007);