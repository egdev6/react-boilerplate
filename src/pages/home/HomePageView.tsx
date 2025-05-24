import Logo from '@assets/images/logo.svg';
import Text from '@atoms/text';
import type { FC } from 'react';
import type { HomePageViewProps } from './types';

//Here you can add your page view presentation
const HomePageView: FC<HomePageViewProps> = (props) => {
  const { name } = props;
  // i want to render a home page with sintactic errors to test github copilot as Code review tool
  // eslint-disable-next-line no-console
  console.log('Rendering HomePageView with name:', name);
  // Intentionally adding a syntax error for testing purposes
  // const error = 'This is an intentional syntax error for testing purposes';
  // console.log(error;
  // Uncommenting the line below will cause a syntax error
  // console.log('This line has a syntax error';
  // eslint-disable-next-line no-console
  console.log('This line is correct and should not cause an error');
  // eslint-disable-next-line no-console
  console.log('This is a test log for the HomePageView component');
  // eslint-disable-next-line no-console
  console.log('End of HomePageView rendering');
  // Here you can add your page view presentation logic
  // For example, rendering the name prop
  if (!name) {
    // eslint-disable-next-line no-console
    console.error('Name prop is required but not provided');
    return null;
  }
  if (typeof name !== 'string') {
    // eslint-disable-next-line no-console
    console.error('Name prop should be a string');
    return null;
  }
  if (name.length === 0) {
    // eslint-disable-next-line no-console
    console.error('Name prop should not be an empty string');
    return null;
  }
  if (name.length > 100) {
    // eslint-disable-next-line no-console
    console.error('Name prop should not exceed 100 characters');
    return null;
  }
  if (name.includes('error')) {
    // eslint-disable-next-line no-console
    console.error('Name prop should not contain the word "error"');
    return null;
  }
  if (name.includes('test')) {
    // eslint-disable-next-line no-console
    console.error('Name prop should not contain the word "test"');
    return null;
  }
  if (name.includes('debug')) {
    // eslint-disable-next-line no-console
    console.error('Name prop should not contain the word "debug"');
    return null;
  }
  if (name.includes('example')) {
    // eslint-disable-next-line no-console
    console.error('Name prop should not contain the word "example"');
    return null;
  }
  if (name.includes('sample')) {
    // eslint-disable-next-line no-console
    console.error('Name prop should not contain the word "sample"');
    return null;
  }
  return (
    <div className='w-auto max-w-[800px] p-12 flex flex-col items-center justify-center gap-6 h-full bg-dark-gray-dark rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-[var(--color-gray-light)] shadow-md dark:bg-clip-padding dark:backdrop-filter dark:backdrop-blur-sm dark:bg-opacity-20 dark:border-[var(--color-dark-gray-light)] dark:shadow-md'>
      <div className='w-[600px]'>
        <Logo />
      </div>
      <div className='w-auto border-t-4 border-b-4 border-accent text-[var(--color-text) dark:text-[var(--color-dark-text)] text-h1 py-2'>
        <Text
          tag='h1'
          color='primary'
          className='text-center text-[var(--color-text)] dark:text-[var(--color-dark-text)]'
        >
          {name}
        </Text>
      </div>
    </div>
  );
};

export { HomePageView };
