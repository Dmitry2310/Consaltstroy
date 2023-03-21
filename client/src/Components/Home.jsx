import React from "react";
import { themeColor } from "./../App";
import Header from "./Header";

import { ThemeProvider } from '@mui/material/styles';
import { Container } from "@mui/system";
import Grow from '@mui/material/Grow';



const Home = () => {
    return (
        <ThemeProvider theme={themeColor}>
            <Grow in>
                <Container maxWidth="xl">
                    <Header />
                </Container>
            </Grow>
        </ThemeProvider>
    )
}

export default Home;