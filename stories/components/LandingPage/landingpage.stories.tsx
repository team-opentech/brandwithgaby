import type {Meta, StoryObj} from '@storybook/react';
import {LandingPage} from './';

const meta = {
  title: 'Example/LandingPage',
  component: LandingPage,
} satisfies Meta<typeof LandingPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {},
};
