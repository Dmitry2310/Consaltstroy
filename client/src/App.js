import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from "./Components/Home";
import ScrollToTop from "./assets/ScrollToTop";
import Header from "./Components/Header";

import Container from '@mui/material/Container';
import { createTheme } from "@material-ui/core";

export const themeColor = createTheme({
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
      }
  }
});

const App = () => {

  return (
    < Router>
      < Container maxWidth="xl" sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Header />
        <ScrollToTop>
          <Routes>
            < Route path="/" exact element={<Navigate to="/home" replace />} />
            < Route path="/home" exact element={<Home />} />
            {/* < Route path="/posts/search" exact element={<Home />} />
            < Route path="/posts/:id" element={<PostDetails />} />
            < Route path="/auth" exact element={<Auth />} />
            < Route path="/auth/:id" exact element={<Profile />} />
            < Route path="/user/:id" exact element={<Profile />} />
            < Route path="/posts/create" exact element={<CreatePost />} /> */}
          </Routes>
        </ScrollToTop>
        {/* <Footer /> */}
      </Container>
    </Router>
  );
}

export default App;
