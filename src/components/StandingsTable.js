import {useEffect, useState} from 'react'
import styled from "styled-components"
import axios from 'axios'
import LeagueTableRow from './LeagueTableRow'
import EPLLogo from './EplLogo';

//Creating team that will be placed in the league table
const newTeam = {
    place: 0,
    logo: null,
    played:0,
    won: 0, 
    drawn: 0, 
    lost: 0,
    goalFor: 0,
    goalAgainst: 0,
    goalDiff: 0,
    points: 0
}



const StandingsTable = () => {
    const leagues = ['eng.1', 'ger.1', 'ita.1', 'esp.1', 'por.1']
    const [league, setLeague] = useState('eng.1')
    const [year, setYear] = useState(2021)
    const [standings, setStandings] = useState(null)
    //calling the data that contains the teams and all of their information
    useEffect(() => {

        const options = {
            method: 'GET',
            url: 'http://localhost:8000/standings',
            params: {_league: league, _year: year}
        }

        axios.request(options).then((response) => {
            setStandings(response.data.data)
        }).catch((error) => {
            console.error( error) 
        })
    }, [])

    
    //If we received the data from the api call correctly then we render
    if(standings){

        //creating the rows of the table
        const renderRow = json => {
            let leagueStandings = standings.standings 
            let teams = {}
            leagueStandings.forEach(function(position, index)
            {
                teams[position.team.name] = Object.assign({}, newTeam)
                teams[position.team.name].place = index+1;
                teams[position.team.name].logo = position.team.logos[0].href
                teams[position.team.name].name = position.team.name
                teams[position.team.name].played = position.stats[3].displayValue
                teams[position.team.name].won = position.stats[0].displayValue
                teams[position.team.name].drawn = position.stats[2].displayValue
                teams[position.team.name].lost = position.stats[1].displayValue
                teams[position.team.name].goalFor = position.stats[4].displayValue
                teams[position.team.name].goalAgainst = position.stats[5].displayValue
                teams[position.team.name].goalDiff = position.stats[9].displayValue
                teams[position.team.name].points = position.stats[6].displayValue
            })
            
            const sortedTeams = Object.entries(teams).sort((teamA, teamB) => 
            {
                
                if(teamA[1].place > teamB[1].place){
                    return 1;
                }
                else if(teamA[1].place < teamB[1].place){
                    return -1; 
                }
                else{
                    return 0;
                }
            })

            return sortedTeams.map((team, index) =>
            <LeagueTableRow
            {...team[1]}
            key={team[0]}
            />
            )
        }
        return(
            <MainWrapper>
            <TableWrapper>
              <Title>
                Premier{" "}
                <EPLLogo
                  style={{
                    width: "1.5em",
                    position: "relative",
                    top: ".5em",
                    margin: "0 .1em"
                  }}/>{" "}
                  League
              </Title>
              <div>
              <Table>
                    <TableHeader />
                    {renderRow(standings)}
                </Table>
              </div>
            </TableWrapper>
          </MainWrapper>
        )
    }
    else{
        return(
            <div>Loading...</div>
        )
    }
}

export default StandingsTable


const Table = styled.div`
  letter-spacing: .02em;
  display: flex;
  flex-direction: column; 
`
const TableHeader = () =>
  <div style={{ display: "flex", flexDirection: "row-reverse" }}>
    <Th>Pts</Th>
    <Th>GD</Th>
    <Th>GA</Th>
    <Th>GF</Th>
    <Th>L</Th>
    <Th>D</Th>
    <Th>W</Th>
    <Th>MP</Th>
  </div>

const Th = styled.div`
  width: 2em;
  padding: .8em;
  border: solid #360037 1px;
  border-right: 0;
  font-weight: 400;
`

const Title = styled.h1`
  font-size: 2em;
  margin: 5px;
`

const TableWrapper = styled.div`
  text-align: center;
  background-color: #360037;
  color: white;
  border-radius: 50px;
`

const MainWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-size: cover;
  font-family: PremierLeagueSans;
  font-weight: 300;
  padding: 5em 0;
  min-height: calc(100vh - 10em);
`
