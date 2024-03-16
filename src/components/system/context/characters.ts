import { createContext } from 'react'
import { CharactersContextValue } from 'models/context'

const CharactersContext = createContext<CharactersContextValue>({} as CharactersContextValue)

export default CharactersContext
