import { type TextProps, textVariants } from './types';

const Text = ({ tag, color, prominent, className, children, ...rest }: TextProps) => {
  const Component = tag ?? 'p';
  return (
    <Component className={textVariants({ tag, color, prominent, className })} {...rest}>
      {children}
    </Component>
  );
};

export default Text;
