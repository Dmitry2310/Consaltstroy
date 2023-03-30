import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import HomePage from "./Pages/HomePage";
import ScrollToTop from "./assets/ScrollToTop";
import Header from "./Components/Header/Header";

import Container from '@mui/material/Container';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material/styles';
import InfoPage from "./Pages/InfoPage";

const theme = createTheme({
  palette: {
    primary: {
      main: '#054982',
      light: '#376d9b',
      dark: '#03335b'
    },
    secondary: {
      main: '#FE793D',
      light: '#fe9363',
      dark: '#b1542a'
    },
    third: {
      main: '#ffffff',
      dark: '#eaeaea'
    }
  }
});

const App = () => {

  return (
    < Router>
      <ThemeProvider theme={theme}>
        < Container maxWidth="xl" sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
          <Header />
          <ScrollToTop>
            <Routes>
              < Route path="/" exact element={<Navigate to="/home" replace />} />
              < Route path="/home" exact element={<HomePage />} />
              < Route path="/info" exact element={<InfoPage />} />
              {/* < Route path="/posts/:id" element={<PostDetails />} />
            < Route path="/auth" exact element={<Auth />} />
            < Route path="/auth/:id" exact element={<Profile />} />
            < Route path="/user/:id" exact element={<Profile />} />
            < Route path="/posts/create" exact element={<CreatePost />} /> */}
            </Routes>
          </ScrollToTop>
          {/* <Footer /> */}
        </Container>
      </ThemeProvider>
    </Router>
  );
}

export default App;
