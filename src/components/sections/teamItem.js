import React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery, Link } from "gatsby"
import Img from "gatsby-image"

import { Section, Container } from "../global"

const StyledContainer = styled(Container)``

const SectionTitle = styled.h3`
  color: ${(props) => props.theme.color.primary};
  display: flex;
  justify-content: center;
  margin: 0 auto 40px;
  text-align: center;
`

const Subtitle = styled.h5`
  font-size: 16px;
  color: ${(props) => props.theme.color.accent};
  letter-spacing: 0px;
  margin-bottom: 12px;
  text-align: center;
`

const FeaturesGrid = styled.div`
  align-items: flex-start
  max-width: 800px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  margin: 0px auto;
  grid-column-gap: 40px;
  grid-row-gap: 35px;
  @media (max-width: ${(props) => props.theme.screen.sm}) {
    grid-template-columns: 1fr;
    padding: 0 64px;
  }
`

const FeatureTitle = styled.h4`
  color: ${(props) => props.theme.color.primary};
  letter-spacing: 0px;
  line-height: 30px;
  margin-bottom: 10px;
`


const EnclosingDiv = styled.div`
  display: flex;
  flex-direction: column;
`

const ProfilePic = styled.img`
  border-radius: 8px;
  display: inline-block;
  max-width: 100%
`

const Title = styled.p`
  text-align: center;
  margin-top: 0rem;
`

const Name = styled.p`
    text-align: center;
    font-weight: bold;
    margin-bottom: 1rem;
    
`

const TeamItem = (props) => {
    return (
        <EnclosingDiv>
            <ProfilePic src={props.pic}/>
            <Name>{props.name}</Name>
            <Title>{props.title}</Title>
        </EnclosingDiv>
      )
}

export default TeamItem