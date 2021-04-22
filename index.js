require('./database/db')
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const contactDoc = require('./model/model')
app.use(express.json());
const port = 8080;

// app.get('/login', (req, res) =>{
//         res.render('form.html')
// });
// app.get('/', (req, res) => {
//        res.send('hello you');
// });

app.use('/', (req, res) => {
       res.sendFile(__dirname +"/form.html");
})

app.get('/loginid', function (req, res) {
       res.send('GET request to the homepage')
     })
     

app.post('/login', (req, res) => {
       console.log('Accessing the secret section ...')
     const doc = new contactDoc(req.body);
     doc.save().then((req, res) => {
            res.status(200).send(doc);
     }).catch((error) => {
            res.status(400).send("error")
     });
});

app.listen(port, (req, res) => {
    console.log('Server Started')
})

