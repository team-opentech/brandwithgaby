import type {Meta, StoryObj} from '@storybook/react';

import {InfoCard} from './';

const meta = {
  title: 'Example/InfoCard',
  component: InfoCard,
} satisfies Meta<typeof InfoCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    title: 'Title',
    description: [
      'Si sueñas con una marca que refleje tu grandeza y brille con autenticidad.',
      'Perfecto para quienes comienzan su marca personal o para small brands que quieren establecer una identidad sólida desde el principio, creando la base para un crecimiento continuo.',
      'Si estás en la búsqueda de un precio accesible sin sacrificar la calidad del diseño, este paquete ofrece un equilibrio perfecto entre asequibilidad y excelencia creativa.',
    ],
    left: false,
  },
};
