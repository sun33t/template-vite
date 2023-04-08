import { ComponentProps } from 'react';

export const Button = ({
  children,
  ...restOfProps
}: ComponentProps<'button'>) => {
  return <button {...restOfProps}>{children}</button>;
};
