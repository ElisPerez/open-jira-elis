import { createTheme } from '@mui/material';
import { grey, red } from '@mui/material/colors';

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#22272E',
      paper: '#2D333B',
    },
    primary: {
      main: '#FFFFFF',
    },
    secondary: {
      main: '#316DCA',
    },
    error: {
      main: red.A400,
    },
    divider: '#373E47',
    success: {
      main: '#57AB5A',
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#ADBAC7',
      disabled: '#FFFFFF80',
    },
    warning: {
      main: '#F1E05A',
    },
    info: {
      main: '#EC775C',
    }
    // common: {
    //   black: '#EC775C',
    // },
  },
  components: {
    MuiAppBar: {
      defaultProps: {
        elevation: 0,
      },
      styleOverrides: {
        root: {
          backgroundColor: '#2D333B',
        },
      },
    },
  },
});
