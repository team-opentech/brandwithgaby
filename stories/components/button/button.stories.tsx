import type {Meta, StoryObj} from '@storybook/react';

import {Button} from './';

const meta = {
  title: 'component/Button',
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    label: 'Talk with Me',
    styles:
      'bg-blue-100 text-white p-2 rounded h-10 w-32 border border-solid border-black',
  },
};
