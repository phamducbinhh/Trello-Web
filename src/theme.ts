import { cyan, deepOrange, orange, teal } from '@mui/material/colors';
import { experimental_extendTheme as extendTheme, Theme } from '@mui/material/styles';

// Define custom theme options
interface CustomThemeOptions {
  appBarHeight: string;
  boardBarHeight: string;
}

// Extend the default MUI theme type with your custom options
interface CustomTheme extends Theme {
  trello: CustomThemeOptions;
  colorSchemes: {
    light: {
      palette: {
        primary: typeof teal;
        secondary: typeof deepOrange;
      };
    };
    dark: {
      palette: {
        primary: typeof cyan;
        secondary: typeof orange;
      };
    };
  };
}

// A custom theme for this app
const theme = extendTheme({
  trello: {
    appBarHeight: '48px',
    boardBarHeight: '58px',
  },
  colorSchemes: {
    light: {
      palette: {
        primary: teal,
        secondary: deepOrange,
      },
    },
    dark: {
      palette: {
        primary: cyan,
        secondary: orange,
      },
    },
  },
} as CustomTheme); // Add the "as CustomTheme" to assert the type

export default theme;
