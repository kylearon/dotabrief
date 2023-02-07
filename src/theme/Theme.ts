import { createTheme } from '@mui/material/styles';


declare module '@mui/material/styles' {
  interface Theme {
    body: string;
    headerBody: string;
    headerBodyHover: string;
    headerBodyAlternate: string;
    transparent: string;
    text: string;
    textLighter: string;
    toggleBorder: string;
    winColor: string;
    lossColor: string;
    assistColor: string;
    headerButtonBackground: string;
    deleteButton: string;
    deleteButtonHover: string;
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    body?: string;
    headerBody?: string;
    headerBodyHover?: string;
    headerBodyAlternate?: string;
    transparent?: string;
    text?: string;
    textLighter?: string;
    toggleBorder?: string;
    winColor?: string;
    lossColor?: string;
    assistColor?: string;
    headerButtonBackground?: string;
    deleteButton?: string;
    deleteButtonHover?: string;
  }

}
  

export const testTheme = createTheme({
  body: '#204bda',
});

export const lightTheme = createTheme({
  palette: {
    info: {
      main: '#4b4b4b',
    }
  },
  body: '#E2E2E2',
  headerBody: '#cfcfcf',
  headerBodyHover: '#b1b1b1',
  headerBodyAlternate: '#c4c4c4',
  transparent: '#ffffff00',
  text: '#363537',
  textLighter: '#636363',
  toggleBorder: '#FFF',
  winColor: '#00aa00',
  lossColor: '#e40000',
  assistColor: '#505050',
  headerButtonBackground: '#6d6d6d',
  deleteButton: '#e40000',
  deleteButtonHover: '#ac0000',
});
  
export const darkTheme = createTheme({
  palette: {
    info: {
      main: '#dddddd',
    }
  },
  body: '#363537',
  headerBody: '#cfcfcf',
  headerBodyHover: '#b1b1b1',
  headerBodyAlternate: '#b1b1b1',
  transparent: '#ffffff00',
  text: '#FAFAFA',
  textLighter: '#cacaca',
  toggleBorder: '#6B8096',
  winColor: '#00ff00',
  lossColor: '#ff0000',
  assistColor: '#FAFAFA',
  headerButtonBackground: '#6d6d6d',
  deleteButton: '#e40000',
  deleteButtonHover: '#ac0000',
});