export type PeopleResponse = {
  results: People[];
};

export type People = {
  name: string;
  height: string;
  mass: string;
  // biome-ignore lint/style/useNamingConvention: <explanation>
  hair_color: string;
  // biome-ignore lint/style/useNamingConvention: <explanation>
  skin_color: string;
  // biome-ignore lint/style/useNamingConvention: <explanation>
  eye_color: string;
  // biome-ignore lint/style/useNamingConvention: <explanation>
  birth_year: string;
  gender: string;
  homeworld: string;
  films: string[];
  species: [];
  vehicles: string[];
  starships: string[];
  created: string;
  edited: string;
  url: string;
};
