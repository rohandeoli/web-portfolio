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
    };
  }
}

const lightThemeOptions: ThemeOptions = {
  palette: {
    mode: 'light',
    primary: {
      main: '#E3405F',
      light: '#FC1056',
    },
    secondary: {
      main: '#7F8DAA',
    },
    background: {
      default: '#FFFFFF',
      paper: '#DCE4F2',
    },
    text: {
      primary: '#343434',
      secondary: '#7F8DAA',
    },
    custom: {
      dark: '#000000',
      projectCard: '#DCE4F2',
      skinColor: '#F7B799',
      skinColor2: '#FCB696',
      imageDark: '#dce4f2',
      imageClothes: '#dce4f2',
      avatarMisc: '#e9ecf2',
      avatarShoes: '#ccd2e3',
      headerHover: '#F7D774',
    },
  },
};

const darkThemeOptions: ThemeOptions = {
  palette: {
    mode: 'dark',
    primary: {
      main: '#E3405F',
      light: '#FC1056',
    },
    secondary: {
      main: '#8D8D8D',
    },
    background: {
      default: '#1D1D1D',
      paper: '#292A2D',
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#8D8D8D',
    },
    custom: {
      dark: '#000000',
      projectCard: '#292A2D',
      skinColor: '#F7B799',
      skinColor2: '#FCB696',
      imageDark: '#292A2D',
      imageClothes: '#000000',
      avatarMisc: '#212121',
      avatarShoes: '#2B2B2B',
      headerHover: '#F7D774',
    },
  },
};

const lightTheme = createTheme(lightThemeOptions);
const darkTheme = createTheme(darkThemeOptions);

export const themes = { light: lightTheme, dark: darkTheme };