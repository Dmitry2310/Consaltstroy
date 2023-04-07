import { Grid, Typography } from "@mui/material";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { InfoText } from "../assets/InfoText";

import Button from '@mui/material/Button';

const InfoBlock = () => {

    const paragraf = useSelector((state) => state.manage.paragraf);
    const page = useSelector((state) => state.manage.page);

    /* const [displayParagraf, setDisplayParagraf] = useState('');
    const [displayPage, setDisplayPage] = useState(''); */
    const [info, setInfo] = useState('');

    const filterInfoPage = () => {
        return (
            InfoText.filter((item) => item.page === page)
        )
    };
    const filterInfoParagraf = (displayInfoPage) => {
        return (
            displayInfoPage.filter((item) => item.paragraf === paragraf)
        )
    };

    useEffect(() => {
        const displayInfoPage = filterInfoPage();
        const displayInfoParagraf = filterInfoParagraf(displayInfoPage);
        if (displayInfoParagraf.length) {
            setInfo(displayInfoParagraf[0])
        } else {
            setInfo(displayInfoPage[0])
        }
    }, [paragraf, page]);

    return (
        <>
            <Grid container gap={1} sx={{ display: 'flex', justifyContent: 'space-around' }}>
                <Grid item xs={12}>
                    <Typography sx={{ fontFamily: 'Montserrat', fontStyle: 'normal', fontWeight: '800', fontSize: '17px', color: '#2B3F74', marginBottom: '25px',paddingTop: {xs: '20px'} }}>
                        {info.title}
                    </Typography>
                </Grid>
                <Grid item lg={2.8} md={12} xs={12} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: {xs: 'center', sm: 'flex-start'} }}>
                    <img src={info.image}></img>
                    <Button variant="contained" color="secondary" sx={{marginTop: '40px', width: {xs: '80%', sm: '50%', md: '80%'},marginBottom: {xs: '20px'}}}>
                        <Typography color= 'white'>
                            выбрать услугу
                        </Typography>
                    </Button>
                </Grid>
                <Grid item lg={8} md={12}>{info.textRight}</Grid>
                <Grid item xs={12}>{info.textBottom}</Grid>
            </Grid>
        </>
    )
};

export default InfoBlock;