import type { StorybookConfig } from '@storybook/react-vite';
import { mergeConfig } from 'vite';

const config: StorybookConfig = {
  stories: ['../src/**/**/**/*.mdx', '../src/components/**/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  staticDirs: ['../public', '../src/assets'],
   addons: ['@storybook/addon-essentials'],
  docs: {
    autodocs: 'tag',
    defaultName: 'Documentation',
  },
  framework: {
    name: "@storybook/react-vite",
    options: {}
  },
  typescript: {
    reactDocgen: "react-docgen-typescript"
  },
  viteFinal: async (config, { configType }) => {
    return mergeConfig(config, {
      resolve: {
        tsconfig: '../tsconfig.storybook.json',
      },
    });
  },
};
export default config;