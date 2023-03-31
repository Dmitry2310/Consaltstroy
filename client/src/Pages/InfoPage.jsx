import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import React, { useState } from "react";
import NavBar from "../Components/Accordion";
import Footer from "../Components/Footer";

const InfoPage = () => {

    

    return (
        <>
            <Container maxWidth="xl" sx={{ flexGrow: '1' }}>
                <Grid container sx={{ display: 'flex' ,justifyContent: 'space-around', paddingTop: '40px'}} gap={0.5}>
                    <Grid item xs={2.5}>
                        <NavBar />
                    </Grid>
                    <Grid item xs={9}>
                        some text
                    </Grid>
                </Grid>
            </Container>
            <Footer />
        </>

    )
}

export default InfoPage;