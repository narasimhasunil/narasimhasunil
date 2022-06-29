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
   console.log(req, query);
   res.status(400).send('I am in computers section')
});

   app.get('/computers/:company/:model', (req, res) => {
      console.log(req.params);
      res.status(400).send('I am in computers params');
   });

app.get('/mobiles', (req, res) => {
   console.log(req, query);
   res.status(400).send('I am in mobiles section');
});
   app.get('/mobiles/:company/:model', (req, res) => {
      console.log(req.params);
      res.status(400).send('I am in mobile params');
   });

app.get('/fashion', (req, res) => {
   console.log(req, query);
   res.status(400).send('I am in clothing section');   
});

   app.get('/fashion/:company/:model', (req, res) => {
      console.log(req.params);
      res.status(400).send('I am in fasion params');
   });

app.get('/footware', (req, res) => {
      console.log(req, query);
      res.status(400).send('I am in footware section');
});  
   app.get('/footware/:company/:model', (req, res) => {
      console.log(req.params);
      res.status(400).send('I am in footware params');
   });

app.get('/tabs', (req, res) => {
   console.log(req, query);
   res.status(400).send('I am in tabs section');
 });
   app.get('/tabs/:company/:model', (req, res) => {
      console.log(req.params);
      res.status(400).send('I am in tabs params');
   });
  
app.listen(3003);