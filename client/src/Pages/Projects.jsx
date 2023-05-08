import { Container } from "@mui/system";
import Box from '@mui/material/Box';
import React from "react";
import Footer from "../Components/Footer";
import Typography from '@mui/material/Typography';

const Projects = () => {
    return (
        <>
            <Container maxWidth="xl" sx={{ flexGrow: '1' }}>
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '200px' }}>
                    <Typography sx={{ margin: '0 auto', opacity: '0.7' }}> Страница в процессе разработки</Typography>
                </Box>
            </Container>
            <Footer />
        </>
    )
}

export default Projects;