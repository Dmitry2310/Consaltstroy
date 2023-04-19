import React from "react";
import Logo from "./../assets/Images/Logo.png";
import { useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useState } from "react";
import Footer from "../Components/Footer";
import { useParams } from 'react-router-dom';
import moment from 'moment';
import ChangeNews from "./ChangeNews";

import { Grid, Typography } from "@mui/material";
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import { Box, Card, CardMedia } from "@mui/material";
import { Container } from "@mui/system";

const NewsDetails = () => {

    const user = useSelector((state) => state.auth.profile)
    let params = useParams();
    const newsId = params.id
    const [displayNews, setDisplayNews] = useState('');
    const [isChanging, setIsChanging] = useState(false);

    const allNews = useSelector((state) => state.news.news)

    useEffect(() => {
        const news = allNews.filter((news) => news._id === newsId);
        setDisplayNews(news[0]);
    }, []);

    if (isChanging) {
        return (
            <ChangeNews news={displayNews} setIsChanging={setIsChanging} />
        );
    };

    return (
        <>
            <Container maxWidth="xl" sx={{ flexGrow: '1' }}>
                <Paper style={{ padding: '20px', borderRadius: '15px', marginTop: '30px' }} elevation={6}>
                    <Grid container gap={1} sx={{ justifyContent: 'space-between', display: 'flex', flexDirection: 'column' }}>
                        <Grid item xs={12} >
                            <Grid container sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <Grid item xs={8}>
                                    <Typography variant='h4' >{displayNews?.title}</Typography>
                                    <Typography variant="body1" component={'span'} sx={{ opacity: '0.7' }}>{moment(displayNews.updatedAt).format("D.MM.YYYY")}</Typography>
                                </Grid>
                                <Grid item xs={3}>
                                    {user
                                        &&
                                        <Box sx={{ display: 'flex', gap: '10px', margin: { xs: '20px', sm: '0 0' }, justifyContent: 'flex-end' }}>
                                            <Button size="small" variant='contained' color="secondary" sx={{ maxHeight: '31px', color: 'white' }} onClick={() => setIsChanging(true)}>
                                                Править
                                            </Button>
                                        </Box>
                                    }
                                </Grid>
                            </Grid>
                            <Divider style={{ margin: '20px 0' }} />
                        </Grid>
                        <Grid item xs={12}>
                            <Grid container gap={2}>
                                <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
                                    <Card sx={{ maxWidth: '100%', margin: '0 auto' }} elevation={3}>
                                        <CardMedia
                                            component="img"
                                            alt={'picture'}
                                            height="300px"
                                            width="100%"
                                            image={displayNews?.selectedFile || Logo}
                                        />
                                    </Card>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12}>
                            <Box>
                                <Typography variant="body1" component={'span'} sx={{ opacity: '0.9', display: 'flex', padding: { xs: '3px', sm: '25px' } }} >{displayNews?.message}</Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Paper>
            </Container>
            <Footer />
        </>
    )
};
export default NewsDetails;