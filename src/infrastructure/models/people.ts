export type PeopleResponse = {
	results: People[]
}

export type People = {
  name: string,
  height: string,
  mass: string
  hair_color: string
  skin_color: string
  eye_color: string
  birth_year: string
  gender: string
  homeworld: string
  films: string[]
  species: [],
  vehicles: string[],
  starships: string[],
  created: string
  edited: string
  url: string
}
