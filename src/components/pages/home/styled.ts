import styled from 'styled-components'
import theme from 'src/config/theme'

export const HomePageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100dvh - 170px);
`

export const ContentCard = styled.div`
  width: 400px;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > svg {
    width: 250px;
    height: auto;
    margin-bottom: 20px;
  }

  > h1 {
    color: ${theme.colors.white};
    text-align: center;
  }

  @media (max-width: ${theme.breakpoints.md}) {
    > svg {
      width: 150px;
      height: auto;
      margin-bottom: 20px;
    }

    > h1 {
      font-size: 2em;
      color: ${theme.colors.white};
      text-align: center;
    }
  }
`
