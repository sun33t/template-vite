import { type ComponentProps } from 'react';
import { NavLink } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';

const Link = ({
  children,
  to,
}: Omit<ComponentProps<typeof NavLink>, 'className'>) => (
  <NavLink
    to={to}
    className={({ isActive }) => (isActive ? 'text-indigo-400' : 'text-black')}
  >
    {children}
  </NavLink>
);

export const Navigation = ({
  className,
  ...restOfProps
}: Omit<ComponentProps<'nav'>, 'id' | 'children'>) => {
  return (
    <nav
      id="navigation"
      className={twMerge('bg-yellow-100', className)}
      {...restOfProps}
    >
      <div className="flex justify-between px-4">
        <div className="grid place-items-center">
          <NavLink to="/" end>
            Logo
          </NavLink>
        </div>
        <div className="w-full px-4 py-4">
          <ul className="flex gap-x-8">
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
          </ul>
        </div>
        <div className="grid place-items-center">Ham</div>
      </div>
    </nav>
  );
};
