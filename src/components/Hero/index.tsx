import { Container } from '../../styles'
import { StyledForm, StyledHero1, StyledDiv, StyledH2 } from './styled'

const Hero = () => (
  <StyledHero1>
    <StyledForm>
      <StyledDiv className="container">
        <Container>
          <StyledH2>
            As melhores vagas para tecnologia, design e artes visuais.
          </StyledH2>
        </Container>
      </StyledDiv>
    </StyledForm>
  </StyledHero1>
)

export default Hero
