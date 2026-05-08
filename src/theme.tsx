import { createTheme, ThemeOptions } from '@mui/material/styles';

// Extend the Material UI theme to include custom properties
declare module '@mui/material/styles' {
  interface Palette {
    custom: {
      dark: string;
      projectCard: string;
      skinColor: string;
      skinColor2: string;
      imageDark: string;
      imageClothes: string;
      avatarMisc: string;
      avatarShoes: string;
      surface: string;
      border: string;
    };
  }
  
  interface PaletteOptions {
    custom?: {
      dark?: string;
      projectCard?: string;
      skinColor?: string;
      skinColor2?: string;
      imageDark?: string;
      imageClothes?: string;
      avatarMisc?: string;
      avatarShoes?: string;
      headerHover?: string;
      surface?: string;
      border?: string;
    };
  }
}

const lightThemeOptions: ThemeOptions = {
  palette: {
    mode: 'light',
    primary: {
      main: '#DC2643', // Improved contrast for accessibility (WCAG AA 4.5:1)
      light: '#FC1056',
    },
    secondary: {
      main: '#7F8DAA',
    },
    background: {
      default: '#FAFAFA',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#171717',
      secondary: '#737373',
    },
    custom: {
      dark: '#000000',
      projectCard: '#F5F5F5',
      skinColor: '#F7B799',
      skinColor2: '#FCB696',
      imageDark: '#F5F5F5',
      imageClothes: '#F5F5F5',
      avatarMisc: '#F5F5F5',
      avatarShoes: '#F5F5F5',
      headerHover: '#F5F5F5',
      surface: '#FFFFFF',
      border: '#E5E5E5',
    },
  },
  typography: {
    fontFamily: '"Inter", "system-ui", "-apple-system", sans-serif',
    h1: { fontWeight: 800, letterSpacing: '-0.025em' },
    h2: { fontWeight: 700, letterSpacing: '-0.025em' },
    h3: { fontWeight: 700, letterSpacing: '-0.025em' },
    button: { textTransform: 'none', fontWeight: 600 },
  },
  shape: {
    borderRadius: 12,
  },
};

const darkThemeOptions: ThemeOptions = {
  palette: {
    mode: 'dark',
    primary: {
      main: '#DC2643', // Improved contrast for accessibility (WCAG AA 4.5:1)
      light: '#FC1056',
    },
    secondary: {
      main: '#A1A1AA',
    },
    background: {
      default: '#0A0A0A',
      paper: '#161616',
    },
    text: {
      primary: '#EDEDED',
      secondary: '#A1A1AA',
    },
    custom: {
      dark: '#000000',
      projectCard: '#161616',
      skinColor: '#F7B799',
      skinColor2: '#FCB696',
      imageDark: '#161616',
      imageClothes: '#000000',
      avatarMisc: '#212121',
      avatarShoes: '#2B2B2B',
      headerHover: '#262626',
      surface: '#161616',
      border: '#262626',
    },
  },
  typography: {
    fontFamily: '"Inter", "system-ui", "-apple-system", sans-serif',
    h1: { fontWeight: 800, letterSpacing: '-0.025em' },
    h2: { fontWeight: 700, letterSpacing: '-0.025em' },
    h3: { fontWeight: 700, letterSpacing: '-0.025em' },
    button: { textTransform: 'none', fontWeight: 600 },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          transition: 'all 0.2s ease-in-out',
          '&:hover': {
            transform: 'translateY(-1px)',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          border: '1px solid #262626',
        },
      },
    },
  },
};

const lightTheme = createTheme(lightThemeOptions);
const darkTheme = createTheme(darkThemeOptions);

export const themes = { light: lightTheme, dark: darkTheme };