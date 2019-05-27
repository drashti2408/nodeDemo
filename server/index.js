const express = require('express');
const bodyParser = require('body-parser')

const app = express();

const port = 8080;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var data = {
    drashti: {
        name: 'Drashti',
        age: 24,
        company: 'Oracle'
    },
    digant: {
        name: 'Digant',
        age: 26,
        company: 'Walmart'
    }
}

app.get('/', (req, res) => res.send("Hello world!"));

app.get('/person', (req, res) => {
    console.log('req.query', req.query);
    console.log('data:', data[req.query.name])
    res.send(data[req.query.name])
});

app.post('/person', (req, res) => {
    console.log('req.body', req.body);
    if(!req.body.name) {
        res.status(400).send({ error: 'Name is required to add person.'})
    } else {
        // if(data[req.body.name.toLowerCase()] ) {
            data[req.body.name.toLowerCase()] = req.body;
        // }
    }
    res.send(data);
});


app.listen(port, () => console.log(`Example app listening on port ${port}!`));