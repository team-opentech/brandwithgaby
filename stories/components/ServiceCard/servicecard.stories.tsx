import type {Meta, StoryObj} from '@storybook/react';

import {ServiceCard} from './';

const meta = {
  title: 'Example/ServiceCard',
  component: ServiceCard,
} satisfies Meta<typeof ServiceCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {},
};
