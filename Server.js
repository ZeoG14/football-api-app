const PORT=8000
const express = require('express')
const cors = require('cors')
const axios = require('axios')
const { assertBooleanLiteral } = require('@babel/types')
require('dotenv').config()

const app = express()
app.use(cors())

app.get('/fixtures', (req, res) => {
    const options = {
        method: 'GET',
        url: 'https://api-football-standings.azharimm.site/leagues/eng.1/standings?season=2022&sort=asc',
    };
    axios.request(options).then(function (response){
        res.json(response.data);
    }).catch(function (error) {
        console.error("football98APIFixtures Error: ", error);
    })
});

app.listen(PORT, () => console.log('Server is running'));

