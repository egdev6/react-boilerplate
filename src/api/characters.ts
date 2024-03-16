import http from '.'
import Character from 'models/character'

const getCharacters = async (page: number | undefined): Promise<Character[] | undefined> => {
  try {
    const { data } = await http.get(`character/?page=${page || 0}`)
    return data.results
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    if (error) return error.response
  }
}

export default getCharacters
