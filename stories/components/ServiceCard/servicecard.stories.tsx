import type {Meta, StoryObj} from '@storybook/react';

import {ServiceCard} from './';

const meta = {
  title: 'Example/ServiceCard',
  component: ServiceCard,
} satisfies Meta<typeof ServiceCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    title: 'Kickstar',
    subtitle: 'Branding Package',
    servicesList: [
      '30-Min Zoom Meeting',
      'Branding',
      'Logo',
      'Brand Guidelines',
    ],
    price: '1,980.00',
    dues: 'o 4 cuotas de $495.00 with afterpay',
    include: [
      {
        title: '2 Opciones de logo.',
        description: '',
      },
      {
        title: '2 Rondas de revisiones de logo',
        description: '',
      },
      {
        title: 'Brand Guidelines PDF:',
        description:
          'Concepto de estilo de marca con logo, tipografías, colores.',
      },
      {
        title: '3 piezas de diseño a definir.',
        description:
          '(business cards, thank you card, stickers, etiquetas, hojas membretadas, artes sencillos).',
      },
      {
        title: 'Social Media Assets:',
        description:
          'Logo para perfil, cover para Facebook, Youtube o Linkedin.',
      },
      {
        title: 'Entrega de Brand Kit:',
        description:
          'Logo, tipografía y piezas de diseños en  archivos editables.',
      },
    ],
    time: '¡Pack listo en 2 semanas!',
  },
};
