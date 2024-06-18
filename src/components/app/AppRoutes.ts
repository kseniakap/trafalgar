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
    path: Routes.TEST,
    page: AppPages.TestPage,
    exact: true,
  },
  {
    path: Routes.PETS,
    page: AppPages.PetsPage,
    exact: true,
  },
];

export { AppRoutes };
