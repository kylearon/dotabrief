import logo from './logo.svg';
import './App.css';

import SplashPage from './views/SplashPage/SplashPage';
import MainPage from './views/MainPage/MainPage';

import { testTheme, darkTheme, lightTheme } from './theme/Theme';
import { ThemeProvider } from '@mui/material';

import { useState } from 'react';

function App() {

  const [steamId, setSteamId] = useState(undefined);

  console.log("Steam ID: " + steamId);

  return (
    <>
    {
      steamId
      ?
      <ThemeProvider 
        theme={lightTheme}>
        <MainPage steamId={steamId}/>
      </ThemeProvider>
      :
      <ThemeProvider 
        theme={lightTheme}>
        <SplashPage setSteamId={setSteamId}/>
      </ThemeProvider>
    }
    </>
  );
}

export default App;
