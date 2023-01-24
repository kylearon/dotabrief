import { createTheme } from '@mui/material/styles';


declare module '@mui/material/styles' {
  interface Theme {
    body: string;
    headerBody: string;
    text: string;
    toggleBorder: string;
    winColor: string;
    lossColor: string;
    assistColor: string;
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    body?: string;
    headerBody?: string;
    text?: string;
    toggleBorder?: string;
    winColor?: string;
    lossColor?: string;
    assistColor?: string;
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
  text: '#363537',
  toggleBorder: '#FFF',
  winColor: '#00aa00',
  lossColor: '#e40000',
  assistColor: '#505050',
});
  
export const darkTheme = createTheme({
  palette: {
    info: {
      main: '#dddddd',
    }
  },
  body: '#363537',
  text: '#FAFAFA',
  toggleBorder: '#6B8096',
  winColor: '#00ff00',
  lossColor: '#ff0000',
  assistColor: '#FAFAFA',
});