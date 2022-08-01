import React, { Component } from "react"
import styled from "styled-components"

class LeagueTableRow extends Component {
    render() {
        const {
            place,
            logo,
            name,
            played,
            won, 
            drawn, 
            lost,
            goalFor,
            goalAgainst,
            goalDiff,
            points
        } = this.props
        return(
            <Tr position={place}>
                <TdPosName style={{ width: "2em"}}>
                    {place}
                </TdPosName>
                <TdLogo>
                    <img style={{height: "100%", width: "100%", fit: 'contain'}} src ={logo}/>
                </TdLogo >
                <TdPosName  style={{ textAlign: "left", width: "15em"}}>
                    {name}
                </TdPosName >
                <TdNumber style={{borderLeft: 0}}>
                    {played}
                </TdNumber>
                <TdNumber>
                    {won}
                </TdNumber>
                <TdNumber>
                    {drawn}
                </TdNumber>
                <TdNumber>
                    {lost}
                </TdNumber>
                <TdNumber>
                    {goalFor}
                </TdNumber>
                <TdNumber>
                    {goalAgainst}
                </TdNumber>
                <TdNumber>
                    {goalDiff}
                </TdNumber>
                <TdNumber>
                    {points}
                </TdNumber> 
            </Tr>
        )
    }
}

export default LeagueTableRow

const Tr = styled.div`
  display: flex;
  flex-direction: row;
  border-bottom: solid #360037 1px;
  border-left: solid #360037 1px; 
  background-color: ${({ position }) =>
    position === 1
      ? "#FF0047"
      : position < 5 ? "#E10040" : position > 17 ? "#8A0036" : "#AB0039"};
`
const TdPosName = styled.div`
  padding: .8em;
  object-fit: contain;
`

const TdLogo = styled.div`
  padding: .5em;
  height: 2em;
  width: auto;
  
`
const TdNumber = styled.div`
  box-sizing: content-box;
  padding: .8em;
  width: 2em;
  border-right: solid #360037 1px;
`