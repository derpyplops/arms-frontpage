import React from "react"
import styled from "styled-components"
import TeamItem from "./teamItem"
import jon from "./jon.jpg"

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

const TeamBody = styled.p`
  text-align: center;
  margin: 1rem auto;
  max-width: 30%;
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

class Team extends React.Component {
  render() {
    return (
      <TeamContainer id="team">
        <TeamHeader>Our Team</TeamHeader>
        <TeamBody>Composed out of a diverse background, drawing from multiple disciplines to innovate in exciting ways.</TeamBody>
        <TeamBody> Proudly Singaporean 🇸🇬</TeamBody>
        <ItemsWrapper>
          <TeamItem name="Jonathan Ng" title="Software Engineer" pic={jon}/>
          <TeamItem name="Ricky Kartolo" title="Chief Engineering" pic={jon}/>
          <TeamItem name="VR Soorya" title="Data Science" pic={jon}/>
          <TeamItem name="Max Debatin" title="Business Development" pic={jon}/>
          <TeamItem name="Afiq" title="Hardware Engineer" pic={jon}/>
        </ItemsWrapper>
      </TeamContainer>
    )
  }
}

export default Team