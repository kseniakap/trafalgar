// eslint-disable-next-line unicorn/filename-case
declare module '@moxy/next-layout' {
  import React from 'react';

  declare function withLayout<P = {}, S = {}>(
    layout: React.ReactElement | ((state: S) => React.ReactElement),
    state?: S | ((props: P) => S),
  ): (Page: React.ElementType) => React.ElementType;

  interface LayoutTreeProps {
    Component: React.ElementType;
    pageProps: unknown;
    defaultLayout?: React.ReactElement;
  }

  declare const LayoutTree: React.ComponentType<LayoutTreeProps>;
}
