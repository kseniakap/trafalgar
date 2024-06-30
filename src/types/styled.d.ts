import 'styled-components';
import muiTheme from '~/lib/themes/muiTheme';

type CustomTheme = typeof muiTheme;

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends CustomTheme {}
}
