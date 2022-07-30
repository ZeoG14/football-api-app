import {useEffect, useState} from 'react'
import axios from 'axios'

const FetchHomeScreenFixtures = () => {
    const [fixtures, setFixtures] = useState(null)

    useEffect(() => {

        const options = {
            method: 'GET',
            url: 'http://localhost:8000/fixtures'
        }

        axios.request(options).then((response) => {
            setFixtures(response.data.data)
        }).catch((error) => {
            console.error( error) 
        })
    }, [])

    if(fixtures){
        return(
            <div className='fixtures'>
                <h2>Standings</h2>
                {fixtures.standings.map((data) =>
                <div>
                        {data.team.displayName}
                </div>
                )}
            </div>
        )
    }
    else{
        return(
            <div>Loading...</div>
        )
    }
}

export default FetchHomeScreenFixtures