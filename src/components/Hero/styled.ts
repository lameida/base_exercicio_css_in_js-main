import styled from 'styled-components'

export const StyledForm = styled.form`
  height: 360px;
  width: 100%;
  background-image: url('https://cdn.pixabay.com/photo/2018/08/10/15/45/woman-3597101_1280.jpg');
  background-size: cover;
  position: relative;
  display: flex;
  align-items: center;

  &::before {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #a7727d;
    content: '';
    opacity: 0.7;
  }
`

export const StyledDiv = styled.div`
  position: relative;
  color: #eee;
  margin: 0 auto;
`

export const StyledH2 = styled.h2`
  font-family: Gloock, serif;
  font-size: 48px;
`

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const StyledHero1 = styled.div`
  @media (max-width: 768px) {
    ${StyledForm} {
      height: auto;
      padding: 24px 0;
    }

    ${StyledH2} {
      font-size: 32px;
    }
  }
`
