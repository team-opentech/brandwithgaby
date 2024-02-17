import type {Meta, StoryObj} from '@storybook/react';
import {LandingSection2} from './';

const meta = {
  title: 'Example/LandingSection2',
  component: LandingSection2,
} satisfies Meta<typeof LandingSection2>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    title: (
      <>
        Hola,
        <br /> soy Gaby!
      </>
    ),
    description: (
      <>
        Todos sabemos que empezar un nuevo proyecto no es fácil. No solo
        significa tener un dream de emprender con algo, sino también ejecutarlo.
        A veces, la procrastinación nos gana, pero otras, es nuestro budget el
        que nos frena.
        <br /> <br />
        Por eso, he creado estos dos packages que son ideales para ti, para
        darte ese boost y empezar a darle vida a tu sueño.
      </>
    ),
    src: '/ImagesLanding2.webp',
  },
};
