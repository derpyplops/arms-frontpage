import React from "react"
import styled from "styled-components"
import { Section, Container } from "../global"
import diagram from "../../images/architecture-diagram.png"

const StyledContainer = styled(Container)`

`

const Architecture = () => (
    <Section id="architecture">
      <StyledContainer>
        <Subtitle>Diagram</Subtitle>
        <SectionTitle>Architecture</SectionTitle>
        <img src={diagram}/>
      </StyledContainer>
    </Section>
  )
  
export default Architecture

const SectionTitle = styled.h3`
  color: ${(props) => props.theme.color.primary};
  display: flex;
  justify-content: center;
  margin: 0 auto 20px;
  text-align: center;
`

const Subtitle = styled.h5`
  font-size: 16px;
  color: ${(props) => props.theme.color.accent};
  letter-spacing: 0px;
  margin-bottom: 12px;
  text-align: center;
`

  