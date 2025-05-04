import type { ReactNode } from 'react';
import type { VariantProps } from 'tailwind-variants';
import { tv } from 'tailwind-variants';

export const textVariants = tv({
  base: 'font-secondary font-normal leading-normal',
  variants: {
    tag: {
      h1: 'text-h1',
      h2: 'text-h2',
      h3: 'text-h3',
      h4: 'text-h4',
      h5: 'text-h5',
      h6: 'text-h6',
      p: 'text-base',
      span: 'text-base',
      small: 'text-small'
    },
    color: {
      default: 'text-[var(--color-text)] dark:text-[var(--color-dark-text)]',
      primary: 'text-[--color-primary]',
      secondary: 'text-[--color-secondary]',
      accent: 'text-[--color-accent]'
    },
    prominent: {
      true: 'font-bold',
      false: ''
    }
  },
  defaultVariants: {
    tag: 'p',
    color: 'default',
    prominent: false
  }
});

export type TextProps = {
  children: ReactNode;
  className?: string;
} & VariantProps<typeof textVariants>;
