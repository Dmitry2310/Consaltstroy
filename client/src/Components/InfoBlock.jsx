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
            <Grid container gap={1} sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Grid item xs={12}>
                    <Typography sx={{ fontFamily: 'Montserrat', fontStyle: 'normal', fontWeight: '800', fontSize: '17px', color: '#2B3F74', marginBottom: '25px' }}>
                        {info.title}
                    </Typography>
                </Grid>
                <Grid item xs={3.6} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <img src={info.image}></img>
                    <Button variant="contained" color="secondary" sx={{marginTop: '40px', width: '80%'}}>
                        <Typography color= 'white'>
                            выбрать услугу
                        </Typography>
                    </Button>
                </Grid>
                <Grid item xs={8}>{info.textRight}</Grid>
                <Grid item xs={12}>{info.textBottom}</Grid>
            </Grid>
        </>
    )
};

export default InfoBlock;