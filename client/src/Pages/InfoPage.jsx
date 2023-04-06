import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import NavBar from "../Components/Accordion";
import Footer from "../Components/Footer";
import InfoBlock from "../Components/InfoBlock";

const InfoPage = () => {

    return (
        <>
            <Container maxWidth="xl" sx={{ flexGrow: '1' }}>
                <Grid container sx={{ display: 'flex', justifyContent: 'space-around', paddingTop: '40px' }} gap={0.5}>
                    <Grid item xl={2.5} md={3.5} sm={5}>
                        <NavBar />
                    </Grid>
                    <Grid item xl={9} md={8} sm={6}>
                        <InfoBlock />
                    </Grid>
                </Grid>
            </Container>
            <Footer />
        </>
    )
};

export default InfoPage;