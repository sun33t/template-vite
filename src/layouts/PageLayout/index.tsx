import { type ComponentProps } from 'react';
import { Outlet } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';
import { Navigation } from '~layouts/Navigation';

export const Layout = ({
  className,
  ...restOfProps
}: ComponentProps<'div'>) => {
  return (
    <div
      className={twMerge('grid h-screen grid-rows-[auto_1fr_auto]', className)}
      {...restOfProps}
    >
      <Navigation />
      <main className="bg-yellow-100 px-4">
        <Outlet />
      </main>
      <footer>
        <div className="flex bg-yellow-100 px-4 py-4">This is footer</div>
      </footer>
    </div>
  );
};
