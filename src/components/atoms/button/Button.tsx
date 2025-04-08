import { cn } from '@/lib/utils';
import type { VariantProps } from 'class-variance-authority';
import type * as React from 'react';
import { buttonVariants } from './variants';

const Button = ({
  className,
  variant,
  size,
  ...props
}: React.ComponentProps<'button'> & VariantProps<typeof buttonVariants>) => {
  return <button data-slot='button' className={cn(buttonVariants({ variant, size, className }))} {...props} />;
};

export default Button;
