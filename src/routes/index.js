import Home from '~/pages/Home';
import Follow from '~/pages/Follow';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';
import { HeaderOnly } from '~/components/Layout';

//public routes
const publicRoutes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/follow',
    component: Follow,
  },
  {
    path: '/profile',
    component: Profile,
  },
  {
    path: '/search',
    component: Search,
    layout: null,
  },
  {
    path: '/upload',
    component: Upload,
    layout: HeaderOnly,
  },
];

//private routes

const privateRoutes = [{}];

export { publicRoutes, privateRoutes };
