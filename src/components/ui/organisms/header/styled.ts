import styled from 'styled-components'
import theme from 'src/config/theme'

export const HeaderContainer = styled.div`
  width: 100%;
  height: 70px;
  padding: 0 48px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9;
  backdrop-filter: blur(10px);

  @media (max-width: ${theme.breakpoints.md}) {
    height: 60px;
    padding: 0 24px;
  }
`

export const LogoContainer = styled.div`
  width: auto;
  height: 40px;

  > svg {
    height: 40px;
    width: auto;
  }

  @media (max-width: ${theme.breakpoints.md}) {
    width: auto;
    height: 30px;

    > svg {
      height: 30px;
      width: auto;
    }
  }
`

export const Menu = styled.nav``
