import React from "react"
import styled from "styled-components"
import TeamItem from "./teamItem"
import jon from "../../images/profiles/jon.jpeg"
import afiq from "../../images/profiles/afiq.jpeg"
import max from "../../images/profiles/max.jpeg"
import soorya from "../../images/profiles/soorya.jpeg"
import ricky from "../../images/profiles/ricky.jpeg"
import lockerRoom from "../../images/team.jpg"

import { Section, Container } from "../global"

const StyledContainer = styled(Container)``

const TeamContainer = styled.div`
	max-width: 70%;
	margin: auto;
	overflow: hidden;
	padding: 0 2rem 2rem 2rem;
`

const TeamHeader = styled.h3`
  display: flex;
  justify-content: center;
  margin: 5rem auto 40px;
  text-align: center;
`

const ItemsWrapper = styled.div`
  align-items: flex-start
  max-width: 70%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  margin: 2rem auto;
  grid-column-gap: 1.5rem;
  grid-row-gap: 2rem;
  overflow: hidden;
`

const DescriptionWrap = styled.div`
  display: flex;
  flex-direction: row;
  margin: 1rem auto;
  justify-content: space-around;
  align-items: center;
`

const DescBody = styled.p`
  text-align: left;
`

const DescItem = styled.div`
  width: 35%
`

const DescPic = styled.img`
  border-radius: 8px;
  display: block;
  margin: 0 auto;
`

class Team extends React.Component {
  render() {
    return (
      <TeamContainer id="team">
        <TeamHeader>Our Team</TeamHeader>
        <DescriptionWrap>
          <DescItem><DescBody>The founders team combines the right set of skills to turn ARMS into a reality and bring smart maintenance technology on board of ocean-going ships as soon as possible. Ricky, Soorya, Jon and Afiq met during an entrepreneurship module at the National University of Singapore. Maximilian joined ARMS in May 2020 after a common friend introduced him to the team.</DescBody></DescItem>
          <DescItem><DescPic src={lockerRoom} /></DescItem>
        </DescriptionWrap>
        <ItemsWrapper>
          <TeamItem name="Jonathan Ng" title="Software Engineer" pic={jon}/>
          <TeamItem name="Ricky Vian Kartolo" title="Chief Engineering" pic={ricky}/>
          <TeamItem name="V R Soorya" title="Data Science" pic={soorya}/>
          <TeamItem name="Maximillian Debatin" title="Business Development" pic={max}/>
          <TeamItem name="Afiq Yusof" title="Hardware Engineer" pic={afiq}/>
        </ItemsWrapper>
      </TeamContainer>
    )
  }
}

export default Team