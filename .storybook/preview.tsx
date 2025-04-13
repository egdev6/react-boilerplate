import React from 'react'
import type { Preview } from "@storybook/react";
import { Title, Subtitle, Description, Primary, Stories } from '@storybook/blocks';
import { ArgTypes } from '@storybook/addon-docs';
import "../src/styles/global.css";
import withA11y from '@storybook/addon-a11y';
import theme from "./theme";

const withFlexStyles = (Story: React.FC) => (
  <div className='flex flex-row justify-start items-start flex-1'>
    <Story />
  </div>
);

const preview: Preview = {
  parameters: {
    layout: "centered",
    actions: { argTypesRegex: '^on.*' },
    options:{
      theme: theme,
      storySort: {
        order: ['Controls', 'Docs', 'Stories'],
      },
    },
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'light', value: '#ffffff' },
        { name: 'dark', value: '#1B1C1D' },
      ],
    },
    controls: {
      expanded: true,
    },
    viewport: {
      viewports: {
        phonePortrait: {
          name: '[XS] Phone Portrait [default]',
          styles: {
            width: '500px',
            height: '100%',
          },
        },
        phoneLandscape: {
          name: '[XS] Phone Landscape [xsl]',
          styles: {
            width: '567px',
            height: '100%',
          },
        },
        tabletPortrait: {
          name: '[MD] Tablet Portrait [mdp]',
          styles: {
            width: '767px',
            height: '100%',
          },
        },
        tabletLandscape: {
          name: '[MD] Tablet Landscape [mdl]',
          styles: {
            width: '1024px',
            height: '100%',
          },
        },
        desktop: {
          name: '[LG] Desktop [lg]',
          styles: {
            width: '1440px',
            height: '100%',
          },
        },
      },
    },
    docs: {
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
    tags: ['autodocs'],
    decorators:[withFlexStyles, withA11y],
    viewMode: 'story',
  },
};

export default preview;