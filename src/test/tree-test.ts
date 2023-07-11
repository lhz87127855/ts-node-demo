var RoutesDeep = require('./utils/tree.ts');

const baseRoutes = [
  {
    path: '/',
    exact: true,
    redirect: '/Dashboard',
  },
  {
    path: '/login',
    component: './Login',
    exact: true,
  },
  {
    path: '/',
    component: '../layouts',
    routes: [
      {
        path: '/Dashboard',
        exact: true,
        component: './Dashboard',
      },
      {
        path: '/Dashboard/Customize',
        component: './Dashboard/Customize',
        exact: true,
      },
      {
        path: '/dynamicModule/:index',
        component: './DynamicModule',
        exact: true,
      },
      {
        path: '/oauth2ClientMgr',
        exact: true,
        component: './Oauth2ClientMgr',
      },
      // 通配路由，必须写在最下面，否则此路由下面的路由会被此拦截
      {
        path: '/:privCode',
        exact: true,
        component: './OuterSystemPage',
      },
    ],
  },
];

const customRoutes = [
  {
    path: '/',
    component: '../layouts',
    routes: [
      {
        path: '/Dashboard',
        exact: true,
        component: '@/customize/pages/Login',
      },
    ],
  },
];

console.log('baseRoutes路由', JSON.stringify(baseRoutes, null, 4));
console.log('customRoutes路由', JSON.stringify(customRoutes, null, 4));
const temp = RoutesDeep(customRoutes, baseRoutes);
console.log('合并后路由', JSON.stringify(temp, null, 4));