const PORT=8000
const express = require('express')
const cors = require('cors')
const axios = require('axios')
const { assertBooleanLiteral } = require('@babel/types')
require('dotenv').config()

const app = express()
app.use(cors())

app.get('/fixtures', (req, res) => {
    const football98FixturesApiCall = {
        method: 'GET',
        url: 'https://football98.p.rapidapi.com/premierleague/fixtures',
        headers: {
            'X-RapidAPI-Key': process.env.FOOTBALL98_RAPID_API_KEY,
            'X-RapidAPI-Host': 'football98.p.rapidapi.com'
        }
    };
    axios.request(football98FixturesApiCall).then(function (response){
        res.json(response.data);
    }).catch(function (error) {
        console.error("football98APIFixtures Error: ", error);
    })
});

app.listen(PORT, () => console.log('Server is running'));

