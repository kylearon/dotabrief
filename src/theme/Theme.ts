import { createTheme } from '@mui/material/styles';
import { DARK_MODE, LIGHT_MODE } from '../utils/constants';


declare module '@mui/material/styles' {
  interface Theme {
    name: string;
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
    name?: string;
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
  name: LIGHT_MODE,
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
  name: DARK_MODE,
  body: '#2b2a2c',
  headerBody: '#4d4b4e',
  headerBodyHover: '#535155',
  headerBodyAlternate: '#5a5a5a',
  transparent: '#ffffff00',
  text: '#FAFAFA',
  textLighter: '#cacaca',
  toggleBorder: '#6B8096',
  winColor: '#00ff00',
  lossColor: '#ff0000',
  assistColor: '#FAFAFA',
  headerButtonBackground: '#808080',
  deleteButton: '#e40000',
  deleteButtonHover: '#ac0000',
});