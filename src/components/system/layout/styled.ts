import styled from 'styled-components'
import theme from 'src/config/theme'

interface Props {
  $isLogged?: boolean
}
export const LayoutContainer = styled.div`
  width: 100dvw;
  min-height: 100dvh;
  background-color: ${theme.colors.black};
`

export const ContentContainer = styled.div<Props>`
  width: 100%;
  height: 100%;
  padding-top: 70px;
  min-height: calc(100dvh - 110px);
  position: relative;
  background-color: ${theme.colors.black};
`

export const ContenWrapper = styled.div`
  width: 100%;
  height: auto;
  min-height: calc(100dvh - 120px);
  max-width: 1248px;
  padding: 24px 48px;
  margin: 0 auto;

  @media (max-width: ${theme.breakpoints.sm}) {
    padding: 24px;
  }
`
