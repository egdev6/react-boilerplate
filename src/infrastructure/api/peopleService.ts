import { api } from '@config/axios';
import type { People, PeopleResponse } from '../models/people';

export const getPeole= async (): Promise<People[]>  => {
   const environment = import.meta.env.VITE_ENVIRONMENT;
   console.log(environment)

   if (environment === 'DEV') {
      const response = await fetch('/mock/people');
      const data: PeopleResponse = await response.json();
      return data.results;
   } else {
      const response = await api.get('/people')
      const data: PeopleResponse = await response.data;
      return data.results;
   }
};
