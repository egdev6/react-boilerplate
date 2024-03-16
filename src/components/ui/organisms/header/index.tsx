import { FC } from 'react'
import Logo from 'images/logo.svg?react'
import * as S from './styled'

const Header: FC = () => {
  return (
    <S.HeaderContainer>
      <S.LogoContainer>
        <Logo />
      </S.LogoContainer>
      <S.Menu />
    </S.HeaderContainer>
  )
}

export default Header
