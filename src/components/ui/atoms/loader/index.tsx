import { FC } from 'react'
import { InfinitySpin } from 'react-loader-spinner'
import theme from 'config/theme'
import * as S from './styled'

interface LoaderProps {
  loading: boolean
}

const Loader: FC<LoaderProps> = ({ loading }) => {
  if (!loading) return null
  return (
    <S.Loader>
      <InfinitySpin width='200' color={theme.colors.primary} />
    </S.Loader>
  )
}

export default Loader
