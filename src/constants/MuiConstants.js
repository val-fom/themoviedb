import { createMuiTheme } from '@material-ui/core/styles';

export const CUSTOM_THEME = createMuiTheme({
  palette: {
    primary: {
      light: '#a6bfcc',
      main: '#778f9b',
      dark: '#4a626d',
      contrastText: '#263238',
    },
    secondary: {
      light: '#be9c91',
      main: '#8d6e63',
      dark: '#5f4339',
      contrastText: '#efebe9',
    },
  },
});
