import { FC, PropsWithChildren, useContext, useEffect, useMemo, useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import getCharacters from 'api/characters'
import Character from 'models/character'
import CharactersContext from 'components/system/context/characters'
import { useAppContext } from 'hooks/use-app-context'
import { queries } from 'constants/index'

export const CharactersProvider: FC<PropsWithChildren> = ({ children }) => {
  const { setLoading } = useAppContext()
  const [characters, setCharacters] = useState<Character[] | undefined>(undefined)

  const { data, isFetching, isError, error, isSuccess } = useQuery({
    queryKey: [queries.CHARACTERS],
    queryFn: () => getCharacters('0'), // Replace 'your_argument_here' with a valid string argument
    refetchInterval: 5000,
    retry: 3,
    enabled: !characters,
  })

  useEffect(() => {
    if (isFetching) {
      setLoading(true)
    } else if (isError) {
      setLoading(false)
      console.log({ error })
    } else if (isSuccess) {
      setLoading(false)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFetching, isError, isSuccess])

  const charactersList = useMemo(() => (data ? data : undefined), [data])

  useEffect(() => {
    if (charactersList !== characters) {
      setCharacters(charactersList?.data) // Extract the data from the AxiosResponse object
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [charactersList])

  const value = useMemo(
    () => ({
      characters,
      setCharacters,
    }),
    [characters, setCharacters]
  )

  return <CharactersContext.Provider value={value}>{children}</CharactersContext.Provider>
}

// eslint-disable-next-line react-refresh/only-export-components
export const useCharacters = () => {
  return useContext(CharactersContext)
}
