const express = require('express');
const bodyParser = require("body-parser");
const app = express();
const port = 3003;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

app.get('/', (_req, res) => {
      res.send("Hello world! express");
   });

app.get('/computers', (req, res) => {
   console.log(req.query);
   res.status(200).send('I am in computers section')
});
   app.get('/computers/:company', (req, res) => {
      console.log(req.params);
      res.status(200).send('I am in computers brand params');
   });
   app.get('/computers/:company/:model', (req, res) => {
      console.log(req.params);
      res.status(200).send('I am in computers brand and modle params');
   });

app.get('/mobiles', (req, res) => {
   console.log(req, query);
   res.status(400).send('I am in mobiles section');
});
   app.get('/mobiles/:company', (req, res) => {
      console.log(req.params);
      res.status(400).send('I am in mobile brands params');
   });
   app.get('/mobiles/:company/:model', (req, res) => {
      console.log(req.params);
      res.status(400).send('I am in mobile brands and model params');
   });

app.get('/fashion', (req, res) => {
   console.log(req, query);
   res.status(400).send('I am in clothing section');   
});
   app.get('/fashion/:company', (req, res) => {
      console.log(req.params);
      res.status(400).send('I am in fasion brands params');
   });
   app.get('/fashion/:company/:size', (req, res) => {
      console.log(req.params);
      res.status(400).send('I am in fasion brands and size params');
   });

app.get('/footware', (req, res) => {
      console.log(req, query);
      res.status(400).send('I am in footware section');
});  
   app.get('/footware/:company', (req, res) => {
      console.log(req.params);
      res.status(400).send('I am in footware brands params');
   });
   app.get('/footware/:company/:model', (req, res) => {
      console.log(req.params);
      res.status(400).send('I am in footware brands and model params');
   });

app.get('/tabs', (req, res) => {
   console.log(req.params);
   res.status(400).send('I am in tabs section');
 });
   app.get('/tabs/:company', (req, res) => {
      console.log(req.params);
      res.status(400).send('I am in tabs brands params');
   });
   app.get('/tabs/:company/:model', (req, res) => {
      console.log(req.params);
      res.status(400).send('I am in tabs brands and model params');
   });

app.listen(3003);