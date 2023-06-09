import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import HomePage from "./Pages/HomePage";
import ScrollToTop from "./assets/ScrollToTop";
import Header from "./Components/Header/Header";
import News from "./Pages/News";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from 'react-toastify';
import { useSelector } from "react-redux";

import Container from '@mui/material/Container';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material/styles';
import InfoPage from "./Pages/InfoPage";
import NewsDetails from "./Pages/NewsDetails";
import Login from "./Pages/Login";
import Projects from "./Pages/Projects";
import CreateNews from "./Pages/CreateNews";
import { setUser } from "./actions/auth";
import 'react-toastify/dist/ReactToastify.css';

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

  const dispatch = useDispatch();
  const profile = JSON.parse(localStorage.getItem('profile'));

  useEffect(() => {
    if (profile) {
      dispatch(setUser(profile));
    };
  }, []);

  const userNotification = useSelector((state) => state.auth.error)
  const mailNotification = useSelector((state) => state.manage.notification)

    useEffect(() => {
        if (userNotification) {
            toast.error(userNotification)
        }
    }, [userNotification]);

    useEffect(() => {
      if (mailNotification) {
          toast.success(mailNotification)
      }
  }, [mailNotification]);

  return (
    < Router>
      <ThemeProvider theme={theme}>
        < Container maxWidth="xl" sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
          <Header />
          < ToastContainer position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light" />
          <ScrollToTop>
            <Routes>
              < Route path="/" exact element={<Navigate to="/home" replace />} />
              < Route path="/home" exact element={<HomePage />} />
              < Route path="/info" exact element={<InfoPage />} />
              < Route path="/news" exact element={<News />} />
              < Route path="/news/:id" exact element={<NewsDetails />} />
              < Route path="/login" exact element={<Login />} />
              < Route path="/projects" exact element={<Projects />} />
             {/*< Route path="/auth" exact element={<Auth />} />
            < Route path="/auth/:id" exact element={<Profile />} />
            < Route path="/user/:id" exact element={<Profile />} />*/}
            < Route path="/news/create" exact element={<CreateNews />} /> 
            </Routes>
          </ScrollToTop>
          {/* <Footer /> */}
        </Container>
      </ThemeProvider>
    </Router>
  );
}

export default App;
