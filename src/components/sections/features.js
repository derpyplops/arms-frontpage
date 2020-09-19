import React from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckDouble, faCog, faShieldAlt} from '@fortawesome/free-solid-svg-icons' 

import { Section, Container } from "../global"

const Features = () => (
  <Section id="features">
    <StyledContainer>
      <Subtitle>Reliable, Efficient, Safe</Subtitle>
      <SectionTitle>Machine Learning Driven</SectionTitle>
      <FeaturesGrid>
        <FeatureBlock icon={faCheckDouble} header="Reliable" text="Data-driven feedback results in lesser unexpected downtime due to predictive maintenance."></FeatureBlock>
        <FeatureBlock icon={faCog} header="Efficient" text="Acoustic sensors much cheaper than vibrational sensors allow us to provide services for a low fee."></FeatureBlock>
        <FeatureBlock icon={faShieldAlt} header="Safe" text="Machine-learning driven evidence provides ample warning for equipment failure."></FeatureBlock>
      </FeaturesGrid>
    </StyledContainer>
  </Section>
)

export default Features

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

const FeatureItem = styled.div`
  display: flex;
  flex-direction: column;
`

const FeatureSubtitle = styled.p`
  margin: 0;
  font-weight: 500;
  font-size: 1.5rem;
`

const FeatureTitle = styled.h4`
  color: ${(props) => props.theme.color.primary};
  letter-spacing: 0px;
  line-height: 30px;
  margin-bottom: 10px;
`

const FeatureText = styled.p`
`



class FeatureBlock extends React.Component {
  render() {
    return <FeatureItem id="features">
      <FeatureTitle><FontAwesomeIcon icon={this.props.icon}/> {this.props.header}</FeatureTitle>
      <FeatureSubtitle></FeatureSubtitle>
        <FeatureText>
          {this.props.text}
        </FeatureText>
    </FeatureItem>
  }
}