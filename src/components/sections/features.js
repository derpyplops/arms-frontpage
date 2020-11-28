import React from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt, faMoneyBill, faSearch} from '@fortawesome/free-solid-svg-icons' 

import { Section, Container } from "../global"



const Problems = () => (
  <Section id="problems">
    <StyledContainer>
      <Subtitle>Our Why</Subtitle>
      <SectionTitle>The Problem</SectionTitle>
      <ProblemGrid>
        <ProblemBlock icon={faTrashAlt} header="Labor Intensive" text="Traditional maintenance requires many manual inspections, binding valuable manhours."></ProblemBlock>
        <ProblemBlock icon={faMoneyBill} header="Wasteful" text="Equipment is replaced according to the rigid maintenance schedule, not its actual condition."></ProblemBlock>
        <ProblemBlock icon={faSearch} header="Risky" text="With marine systems becoming evermore complex, it is impossible for crew to monitor every component. The result: unexpected breakdowns."></ProblemBlock>
      </ProblemGrid>
    </StyledContainer>
  </Section>
)

export default Problems

const StyledContainer = styled(Container)`
  margin-top: 5rem;
  margin-bottom: 5rem;
`

const SectionTitle = styled.h3`
color: ${(props) => props.theme.color.white.regular};
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

const ProblemGrid = styled.div`
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

const ProblemItem = styled.div`
  display: flex;
  flex-direction: column;
  color: ${(props) => props.theme.color.white.regular};
`

const ProblemSubtitle = styled.p`
  margin: 0;
  font-weight: 500;
  font-size: 1.5rem;
`

const ProblemTitle = styled.h4`
  color: ${(props) => props.theme.color.primary};
  letter-spacing: 0px;
  line-height: 30px;
  margin-bottom: 10px;
  color: ${(props) => props.theme.color.white.regular};
`

const ProblemText = styled.p`
color: ${(props) => props.theme.color.white.regular};
`

class ProblemBlock extends React.Component {
  render() {
    return <ProblemItem id="problems">
      <ProblemTitle><FontAwesomeIcon icon={this.props.icon}/> {this.props.header}</ProblemTitle>
      <ProblemSubtitle></ProblemSubtitle>
        <ProblemText>
          {this.props.text}
        </ProblemText>
    </ProblemItem>
  }
}