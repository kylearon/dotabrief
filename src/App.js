import './App.css';

import SplashPage from './views/SplashPage/SplashPage';
import MainPage from './views/MainPage/MainPage';

import { darkTheme, lightTheme } from './theme/Theme';
import { ThemeProvider } from '@mui/material';

import { useEffect, useState } from 'react';

import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { LIGHT_MODE, DARK_MODE } from './utils/constants';

function App() {

  const [steamId, setSteamId] = useState(undefined);

  const [lightDarkMode, setLightDarkMode] = useState(() => {
    //load the saved theme from the localStorage
    let lightDarkModeString = localStorage.getItem('theme') || DARK_MODE;
    if(lightDarkModeString === LIGHT_MODE) {
      return lightTheme;
    } else {
      return darkTheme;
    }
  });

  const navigate = useNavigate();

  const location = useLocation();

  //when the location url changes, update the steamId state if necessary
  useEffect(() => {

    const splitPath = location.pathname.split("/");

    if(splitPath.length === 3) {
      const id = splitPath[splitPath.length - 1]
      if(id !== steamId) {
        // console.log("setting steamId");
        setSteamId(id);
      }
    }
  },[location]);


   //update the route when the steamId changes
  useEffect(() => {
    if(steamId)
    {
    //   console.log("Loading player data for: " + steamId);
      navigate("/player/" + steamId);
    }
    else
    {
    //   console.log("Showing Splash Page because steamId is undefined");
      navigate("/");
    }
  },[steamId]);

  useEffect(() => {
    if(lightDarkMode) {
      //save the name of the theme to localStorage
      localStorage.setItem('theme',  lightDarkMode.name);
    }
  },[lightDarkMode]);

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
              <ThemeProvider 
                  theme={lightDarkMode}>
                  <SplashPage props={{ setSteamId: setSteamId, lightDarkMode: lightDarkMode.name, setLightDarkMode: setLightDarkMode }}/>
              </ThemeProvider>
          }
          // loader={() => { console.log("login page loader"); }}
        />,
        <Route
          path="/player/:steamId"
          element={
              <ThemeProvider 
                  theme={lightDarkMode}>
                  {
                    steamId 
                    ?
                    <MainPage props={{ steamId: steamId, setSteamId: setSteamId, lightDarkMode: lightDarkMode.name, setLightDarkMode: setLightDarkMode }}/>
                    :
                    <></>
                  }
              </ThemeProvider>
          }
        />
      </Routes>
    </>
  )
}

export default App;
