import { usePeople } from '@hooks/use-people';
import { useEffect, type FC } from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage: FC = () => {
  const { people} = usePeople()
  const navigate = useNavigate()

  useEffect(() =>{
    console.log(people)
  },[people])

  return (
    <div>
      <h1 className='text-text dark:text-dark-text'>Home Page</h1>
      <p className='text-text dark:text-dark-text'>Welcome to the home page!</p>
      <button onClick={() => navigate('/people')}>Go People</button>
    </div>
  );
};
export default HomePage;
