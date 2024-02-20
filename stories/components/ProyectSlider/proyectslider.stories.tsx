import type {Meta, StoryObj} from '@storybook/react';

import {BannerSlider} from './';

const meta = {
  title: 'component/ProyectSlider',
  component: BannerSlider,
} satisfies Meta<typeof BannerSlider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    images: ['/portfolio02.webp', '/portfolio01.webp', '/portfolio02.webp','/portfolio02.webp', '/portfolio01.webp', '/portfolio02.webp'],
  },
};
