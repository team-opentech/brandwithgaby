import type {Meta, StoryObj} from '@storybook/react';

import {Acordeon} from './';

const meta = {
  title: 'component/Acordeon',
  component: Acordeon,
} satisfies Meta<typeof Acordeon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    title: 'Talk with Me',
    children: 'I am a child',
  },
};
