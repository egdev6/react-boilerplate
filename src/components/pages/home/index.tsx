import { FC } from 'react'
import * as S from './styled'
import Logo from 'images/logo.svg?react'

const HomePage: FC = () => {
  return (
    <S.HomePageContainer>
      <S.ContentCard>
        <Logo />
        <h1>React Boilerplate 1.0</h1>
      </S.ContentCard>
    </S.HomePageContainer>
  )
}

export default HomePage
