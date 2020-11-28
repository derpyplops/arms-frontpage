import React from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt, faMoneyBill, faSearch, faMicrophone, faTerminal, faLightbulb} from '@fortawesome/free-solid-svg-icons' 

import { Section, Container } from "../global"


const Solution = () => (
  <Section id="solution">
    <StyledContainer>
      <Subtitle>Our Why</Subtitle>
      <SectionTitle>The Solution</SectionTitle>
      <SolutionGrid>
        <SolutionBlock icon={faMicrophone} header="Acoustics" text="Every moving piece of machinery produces a unique acoustic signature, which can be captured using acoustic sensors, such as microphones."></SolutionBlock>
        <SolutionBlock icon={faTerminal} header="Machine Learning" text="ARMS uses advanced machine learning algorithms to analyze the acoustic signature to diagnose wear and tear, as well as any other problems at an early stage."></SolutionBlock>
        <SolutionBlock icon={faLightbulb} header=" The Result" text="The crew on board and fleet managers ashore have a clear picture of equipment status and condition. Targeted, efficient and safe maintenance can be provided."></SolutionBlock>
      </SolutionGrid>
    </StyledContainer>
  </Section>
)

export default Solution

const StyledContainer = styled(Container)`
  margin-top: 5rem;
  margin-bottom: 5rem;
`

const SectionTitle = styled.h3`
  color: ${(props) => props.theme.color.primary};
  display: flex;
  justify-content: center;
  margin: 0 auto 20px;
  text-align: center;
  color: ${(props) => props.theme.color.white.regular};
`

const Subtitle = styled.h5`
  font-size: 16px;
  color: ${(props) => props.theme.color.accent};
  letter-spacing: 0px;
  margin-bottom: 12px;
  text-align: center;
`

const SolutionGrid = styled.div`
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

const SolutionItem = styled.div`
  display: flex;
  flex-direction: column;
  color: ${(props) => props.theme.color.white.regular};
`

const SolutionSubtitle = styled.p`
  margin: 0;
  font-weight: 500;
  font-size: 1.5rem;
  color: ${(props) => props.theme.color.white.regular};
`

const SolutionTitle = styled.h4`
color: ${(props) => props.theme.color.white.regular};
  letter-spacing: 0px;
  line-height: 30px;
  margin-bottom: 10px;
`

const SolutionText = styled.p`
  color: ${(props) => props.theme.color.text};
`



class SolutionBlock extends React.Component {
  render() {
    return <SolutionItem id="features">
      <SolutionTitle><FontAwesomeIcon icon={this.props.icon}/> {this.props.header}</SolutionTitle>
      <SolutionSubtitle></SolutionSubtitle>
        <SolutionText>
          {this.props.text}
        </SolutionText>
    </SolutionItem>
  }
}