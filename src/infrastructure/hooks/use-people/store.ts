import { create } from 'zustand';
import { PeopleStore } from './types';

const useDataStore = create<PeopleStore>((set) => ({
  people: null,
  setPeople: (newData) => set({ people: newData }),
}));

export default useDataStore;