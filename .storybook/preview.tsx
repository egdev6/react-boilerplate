import React from 'react'
import type { Preview } from '@storybook/react'
import { Title, Subtitle, Description, Primary, Controls, Stories } from '@storybook/blocks';
import '@styles/global.css';

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
      page: () => (
        <>
          <Title />
          <Subtitle />
          <Description />
          <Primary />
          <Controls />
          <Stories />
        </>
      ),
    },
  },
  tags: ['autodocs']
};

export default preview;