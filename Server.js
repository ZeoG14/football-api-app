const PORT=8000
const express = require('express')
const cors = require('cors')
const axios = require('axios')
const { assertBooleanLiteral } = require('@babel/types')
require('dotenv').config()

const app = express()
app.use(cors())

app.get('/standings', (req, res) => {
    const league = req.query._league
    const year = req.query._year
    const options = {
        method: 'GET',
        url: `https://api-football-standings.azharimm.site/leagues/${league}/standings?season=${year}&sort=asc`,
    };
    axios.request(options).then(function (response){
        res.json(response.data);
    }).catch(function (error) {
        console.error("Api Call Error: ", error);
    })
});

app.listen(PORT, () => console.log('Server is running'));

