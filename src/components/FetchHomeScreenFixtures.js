import {useEffect, useState} from 'react'
import styled from "styled-components"
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
        console.log(fixtures)
        return(
            <div className='fixtures'>
                <Table>
                <TableHeader>
                </TableHeader>
                </Table>
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


const Table = styled.div`
  letter-spacing: .02em;
  display: flex;
  flex-direction: column;
`
const TableHeader = () =>
  <div style={{ display: "flex", flexDirection: "row-reverse" }}>
    <Th>Pl</Th>
    <Th>W</Th>
    <Th>D</Th>
    <Th>L</Th>
    <Th>GF</Th>
    <Th>GA</Th>
    <Th>GD</Th>
    <Th>Pts</Th>
  </div>

const Th = styled.div`
  width: 2em;
  padding: .5em;
  border: solid #360037 1px;
  border-right: 0;
  font-weight: 400;
`