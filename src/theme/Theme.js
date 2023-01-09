import { createTheme } from '@mui/material/styles';

export const testTheme = createTheme({
    body: '#204bda',
});

export const lightTheme = createTheme({
    body: '#E2E2E2',
    headerBody: '#cfcfcf',
    text: '#363537',
    toggleBorder: '#FFF',
    gradient: 'linear-gradient(#39598A, #79D7ED)',
});
  
export const darkTheme = createTheme({
    body: '#363537',
    text: '#FAFAFA',
    toggleBorder: '#6B8096',
    gradient: 'linear-gradient(#091236, #1E215D)',
});