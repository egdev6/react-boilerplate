import { create } from '@storybook/theming/create';

export default create({
   base: 'light',
   // Typography
   fontBase: 'SegoeUI',
   fontCode: 'monospace',

   // Branding
   brandTitle: 'Egdev Storybook',
   brandUrl: 'https://github.com/egdev6',
   brandImage: '/images/logo.svg',
   brandTarget: '_self',

   // Colors
   colorPrimary: '#830213',
   colorSecondary: '#d61e2b',

   // Toolbar
   barSelectedColor: '#830213',
   barHoverColor: '#d61e2b',
});
