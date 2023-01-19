import { createTheme } from '@mui/material/styles';


declare module '@mui/material/styles' {
    interface Theme {
      body: string;
      headerBody: string;
      text: string;
      toggleBorder: string;
    }
    // allow configuration using `createTheme`
    interface ThemeOptions {
      body?: string;
      headerBody?: string;
      text?: string;
      toggleBorder?: string;
    }
  }
  

export const testTheme = createTheme({
    body: '#204bda',
});

export const lightTheme = createTheme({
    body: '#E2E2E2',
    headerBody: '#cfcfcf',
    text: '#363537',
    toggleBorder: '#FFF'
});
  
export const darkTheme = createTheme({
    body: '#363537',
    text: '#FAFAFA',
    toggleBorder: '#6B8096'
});