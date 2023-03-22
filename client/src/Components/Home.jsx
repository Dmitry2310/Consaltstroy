import React from "react";
import { themeColor } from "./../App";
import Cover from './../assets/Images/Cover.png';
import HandsIcon from './../assets/Images/HandsIcon.png';
import SignIcon from './../assets/Images/SignIcon.png';
import BuildIcon from './../assets/Images/BuildIcon.png';
import HouseIcon from './../assets/Images/HouseIcon.png';

import { ThemeProvider } from '@mui/material/styles';
import { Container, display } from "@mui/system";
import Grow from '@mui/material/Grow';
import { Button, Typography } from '@material-ui/core/';
import Box from '@mui/material/Box';
import { Grid } from "@mui/material";

const Home = () => {
    return (
        <ThemeProvider theme={themeColor}>
            <Grow in>
                <Container maxWidth="xl">
                    <Box sx={{ width: '100%', height: '380px', overflow: 'hidden', display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
                        <img alt="picture" src={Cover} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        <Box sx={{ background: 'rgba(0, 0, 0, 0.5)', mixBlendMode: 'multiply', height: '380px', width: '100%', position: 'absolute' }}></Box>
                        <Box sx={{ position: 'absolute', top: '0', left: '0', height: '380px', width: '100%' }}>
                            <Grid container>
                                <Grid item xs={12} sx={{ marginTop: '6%', paddingLeft: '3%',paddingBottom: '3px', position: 'relative' }}>
                                    <Typography component="div" gutterBottom sx={{textDecoration: 'underline'}}>
                                        <Box fontStyle="italic" fontWeight={700} fontSize={{ xs: '25px', sm: '30px', md: '60px' }} fontFamily="Helvetica" color="white">
                                            Консалтэкспертстрой
                                        </Box>
                                    </Typography>
                                    <Box sx={{border: { xs: '1px solid white' , md: '2px solid white'}, width: {xs: '275px',sm: '333px', md:'655px'}, position: 'absolute', bottom: '26%'}}></Box>
                                </Grid>
                                <Grid item xs={9} md={4} lg={4} sx={{ padding: '0 3%' }}>
                                    <Typography component="div" >
                                        <Box fontStyle="italic" fontWeight={700} fontSize={{ xs: '12px', sm: '14px', md: '24px' }} fontFamily="Helvetica" color="white">
                                            Строительный консалтинг полного цикла вкладывая в качество и надежность
                                        </Box>
                                    </Typography>
                                </Grid>
                                <Grid item  md={8} lg={8} >
                                    <Grid container>
                                        <Grid item xs={6} md={3} sx={{padding: {xs: '5px'}}}>
                                            <Box sx={{ padding: '5px', maxWidth: {md: '212px'}, height: {xs: '100px', md: '150px'} , background: '#ffffff', borderRadius: '15px', opacity: '0.8', display: 'flex', flexDirection: 'column', justifyContent: 'space-around', alignItems: 'center' }}>
                                                <img alt="icon" src={HandsIcon} />
                                                <Typography component="div">
                                                    <Box fontStyle="italic" fontWeight={900} fontSize={{xs: '12px', sm: '14px', md: '18px'}} fontFamily="Montserrat" color="#2B3F74" textAlign="center">
                                                        Услуги технического заказчика
                                                    </Box>
                                                </Typography>
                                            </Box>
                                        </Grid>
                                        <Grid item xs={6} md={3} sx={{padding: {xs: '5px'}}}>
                                            <Box sx={{ padding: '5px' , maxWidth: {md: '212px'}, height: {xs: '100px', md: '150px'} , background: '#ffffff', borderRadius: '15px', opacity: '0.8', display: 'flex', flexDirection: 'column', justifyContent: 'space-around', alignItems: 'center' }}>
                                                <img alt="icon" src={SignIcon} />
                                                <Typography component="div">
                                                    <Box fontStyle="italic" fontWeight={900} fontSize={{xs: '12px', sm: '14px', md: '18px'}} fontFamily="Montserrat" color="#2B3F74" textAlign="center" >
                                                        Независимая экспертиза сметной документации
                                                    </Box>
                                                </Typography>
                                            </Box>
                                        </Grid>
                                        <Grid item xs={6} md={3} sx={{padding: {xs: '5px'}}}>
                                            <Box sx={{ padding: '5px' , maxWidth: {md: '212px'}, height: {xs: '100px', md: '150px'} , background: '#ffffff', borderRadius: '15px', opacity: '0.8', display: 'flex', flexDirection: 'column', justifyContent: 'space-around', alignItems: 'center' }}>
                                                <img alt="icon" src={BuildIcon} />
                                                <Typography component="div">
                                                    <Box fontStyle="italic" fontWeight={900} fontSize={{xs: '12px', sm: '14px', md: '18px'}} fontFamily="Montserrat" color="#2B3F74" textAlign="center" >
                                                        Оценка стоимости объекта
                                                    </Box>
                                                </Typography>
                                            </Box>
                                        </Grid>
                                        <Grid item xs={6} md={3} sx={{padding: {xs: '5px'}}}>
                                            <Box sx={{ padding: '5px' , maxWidth: {md: '212px'}, height: {xs: '100px', md: '150px'} , background: '#ffffff', borderRadius: '15px', opacity: '0.8', display: 'flex', flexDirection: 'column', justifyContent: 'space-around', alignItems: 'center' }}>
                                                <img alt="icon" src={HouseIcon} />
                                                <Typography component="div">
                                                    <Box fontStyle="italic" fontWeight={900} fontSize={{xs: '12px', sm: '14px', md: '18px'}} fontFamily="Montserrat" color="#2B3F74" textAlign="center" >
                                                        Разработка сметной документации
                                                    </Box>
                                                </Typography>
                                            </Box>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                </Container>
            </Grow>
        </ThemeProvider>
    )
}

export default Home;