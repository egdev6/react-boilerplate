import type Character from './character';

export type AppContextValue = {
  loading: boolean;
  setLoading: (loading: boolean) => void;
};

export type CharactersContextValue = {
  characters: Character[] | undefined;
  setCharacters: (characters: Character[] | undefined) => void;
};
