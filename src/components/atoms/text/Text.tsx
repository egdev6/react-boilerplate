import { cn } from '@/lib/utils';
import type { VariantProps } from 'class-variance-authority';
import type * as React from 'react';
import { textVariants } from './variants';

const Text = ({
  children,
  className,
  as,
  color,
  weight,
  font,
  ...props
}: { children: React.ReactNode; className?: string } & VariantProps<typeof textVariants>) => {
  const Component = as || 'p';

  return (
    <Component className={cn(textVariants({ color, as, weight, font, className }))} {...props}>
      {children}
    </Component>
  );
};

export default Text;
