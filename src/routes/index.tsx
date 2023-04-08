import { createBrowserRouter } from 'react-router-dom';
import { Layout } from '~components/Layout';
import { About } from './About';
import { Blog } from './Blog';
import { Contact } from './Contact';
import { Home } from './Home';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/blog',
        element: <Blog />,
      },
    ],
  },
]);
