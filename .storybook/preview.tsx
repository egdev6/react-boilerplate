import React from 'react'
import type { Preview } from '@storybook/react'
import { Title, Subtitle, Description, Primary, Controls, Stories } from '@storybook/blocks';
import { ArgTypes } from '@storybook/addon-docs';
import '@styles/global.css';
import theme from './theme';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    docs: {
      autodocs: true,
      theme: theme,
      page: () => (
        <>
          <Title />
          <Subtitle />
          <Description />
          <Primary />
          <ArgTypes />
          <Stories />
        </>
      ),
    },
  },
  tags: ['autodocs'],
  decorators: [
  ],
};

export default preview;
