import type { StorybookConfig } from '@storybook/react-vite';
import { mergeConfig } from 'vite';

const config: StorybookConfig = {
  stories: ['../src/**/**/**/*.mdx', '../src/components/**/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  staticDirs: ['../public', '../src/assets'],
  addons: ['@storybook/addon-essentials', '@storybook/addon-docs'],
  managerHead: (head) => `
    ${head}
    <link rel="icon" type="image/png" href="../src/assets/images/logo.svg" sizes="192x192" />
  `,
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