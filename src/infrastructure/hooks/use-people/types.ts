import type { People } from "@models/people";

export type PeopleStore = {
  people?: People [] | null;
  setPeople: (newData: People[]) => void;
}