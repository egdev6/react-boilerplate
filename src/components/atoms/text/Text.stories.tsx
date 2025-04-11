import type { Meta, StoryObj } from '@storybook/react';

import Text from './Text';

const meta: Meta<typeof Text> = {
  title: 'atoms/Text',
  component: Text,
  tags: ['autodocs']
};
export default meta;
type Story = StoryObj<typeof Text>;

export const Default: Story = {
  args: {
    children: 'Prueba de texto 2',
    weight: 'extralight',
    color: 'primary',
    font: 'secondary',
    className: '',
    as: 'h1'
  }
};
