import { getPeole } from '@api/peopleService';
import { useLoading } from '@hooks/use-loading';
import type { People } from '@models/people';
import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import usePeopleStore from './store';

const usePeople = () => {
  const { setPeople, people } = usePeopleStore();
  const { setApiFetching } = useLoading();

  const { data, error, isLoading, isFetching } = useQuery<People[], Error>({
    queryKey: ['people'],
    queryFn: getPeole
  });

  useEffect(() => {
    if (isLoading || isFetching) {
      setApiFetching(true);
    }
  }, [isLoading, isFetching, setApiFetching]);

  useEffect(() => {
    if (error) {
      setApiFetching(false);
    }
  }, [error, setApiFetching]);

  useEffect(() => {
    if (data) {
      setApiFetching(false);
      setPeople(data);
    }
  }, [data, setApiFetching, setPeople]);

  return {
    people,
    error
  };
};

export default usePeople;
