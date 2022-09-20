import { createTheme } from '@mui/material';
import { grey, red } from '@mui/material/colors';

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#22272e',
    },
    // primary: {
    //   main: '#4a148c',
    // },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
  },
  components: {
    // MuiAvatar: ...
  },
});