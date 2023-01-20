import './App.css';

import SplashPage from './views/SplashPage/SplashPage';
import MainPage from './views/MainPage/MainPage';

import { testTheme, darkTheme, lightTheme } from './theme/Theme';
import { ThemeProvider } from '@mui/material';

// import Routes from './routes/Routes';

import { useEffect, useState } from 'react';

import { Routes, Route, useLocation, useNavigate } from "react-router-dom";

function App() {

  const [steamId, setSteamId] = useState(undefined);

  const navigate = useNavigate();

  const location = useLocation();

  //when the location url changes, update the steamId state if necessary
  useEffect(() => {

    const splitPath = location.pathname.split("/");

    if(splitPath.length == 3) {
      const id = splitPath[splitPath.length - 1]
      if(id != steamId) {
        console.log("setting steamId");
        setSteamId(id);
      }
    }
  },[location]);


   //update the route when the steamId changes
  useEffect(() => {
    if(steamId)
    {
      console.log("Loading player data for: " + steamId);
      navigate("/player/" + steamId);
    }
  },[steamId]);

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
              <ThemeProvider 
                  theme={lightTheme}>
                  <SplashPage setSteamId={setSteamId}/>
              </ThemeProvider>
          }
          // loader={() => { console.log("login page loader"); }}
        />,
        <Route
          path="/player/:steamId"
          element={
              <ThemeProvider 
                  theme={lightTheme}>
                  <MainPage steamId={steamId}/>
              </ThemeProvider>
          }
        />
      </Routes>
    </>
  )
}

export default App;
