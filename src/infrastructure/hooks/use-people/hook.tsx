
import { useQuery } from '@tanstack/react-query';
import usePeopleStore from './store';
import { People } from '@models/people';
import { getPeole } from '@api/peopleService';
import { useLoading } from '@hooks/use-loading';
import { useEffect } from 'react';

const usePeople = () => {
  const { setPeople, people } = usePeopleStore();
  const { setApiFetching } = useLoading();

  const { data, error, isLoading, isFetching } = useQuery<People[], Error>({
    queryKey: ['people'],
    queryFn: getPeole,
  });

  useEffect(() => {
    if(isLoading || isFetching) {
      setApiFetching(true);
    }
  },[isLoading, isFetching])

  useEffect(() => {
    if(error) {
      setApiFetching(false);
    }
  },[error])

  useEffect(() => {
    if(data) {
      setApiFetching(false);
      setPeople(data);
    }
  }
  , [data])

  return {
    people,
    error,
  };
};

export default usePeople;