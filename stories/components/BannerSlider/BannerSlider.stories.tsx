import type {Meta, StoryObj} from '@storybook/react';

import {BannerSlider} from './';

const meta = {
  title: 'component/BannerSlider',
  component: BannerSlider,
} satisfies Meta<typeof BannerSlider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    images: [
      '/banner02.webp',
      '/banner07.webp',
      '/banner03.webp',
      '/banner04.webp',
      '/banner05.webp',
      '/banner06.webp',
      '/banner01.webp',
    ],
  },
};
