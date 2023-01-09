import logo from './logo.svg';
import './App.css';

import SplashPage from './views/SplashPage/SplashPage';

import { testTheme, darkTheme, lightTheme } from './theme/Theme';
import { ThemeProvider } from '@mui/material';

function App() {
  return (

    <ThemeProvider 
      theme={lightTheme}>
      <SplashPage/>
    </ThemeProvider>
  );
}

export default App;
