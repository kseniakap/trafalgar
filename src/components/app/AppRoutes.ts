import React from 'react';

import * as AppPages from './AppPages';
import { Routes } from '~/lib/routes';

interface AppRoute {
  path: typeof Routes[keyof typeof Routes];
  page: React.ElementType;
  exact?: boolean;
}

const AppRoutes: AppRoute[] = [
  {
    path: Routes.HOME,
    page: AppPages.HomePage,
    exact: true,
  },
  {
    path: Routes.LOGIN,
    page: AppPages.LoginPage,
    exact: true,
  },
  {
    path: Routes.REGISTER,
    page: AppPages.RegisterPage,
    exact: true,
  },
];

export { AppRoutes };
