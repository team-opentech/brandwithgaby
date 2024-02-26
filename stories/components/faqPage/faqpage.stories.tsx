import type {Meta, StoryObj} from '@storybook/react';

import {faqPage} from './';

const meta = {
  title: 'example/faqPage',
  component: faqPage,
} satisfies Meta<typeof faqPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
  },
};
