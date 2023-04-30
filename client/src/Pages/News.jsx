import React from "react";
import Footer from "../Components/Footer";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useState } from "react";
import { getAllNews } from "./../actions/news";
import { deleteNews } from "./../actions/news";
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import moment from 'moment';
import { useNavigate } from 'react-router-dom';
import ModalWindow from "./../Components/ModalWindow";
import Paginate from "../Components/Paginate";

import { Container } from "@mui/system";
import { Box, Card, CardMedia } from "@mui/material";
import logo from "./../assets/Images/Logo.png";
import CardContent from '@mui/material/CardContent';
import { Grid, Typography } from "@mui/material";
import Button from '@mui/material/Button';
import { CircularProgress } from "@material-ui/core";
import DeleteIcon from '@material-ui/icons/Delete';
import Paper from '@mui/material/Paper';

function useQuery() {
    return new URLSearchParams(useLocation().search);
};

const News = () => {

    const numberOfPages = useSelector((state) => state.news.numberOfPages);
    const [isToken, setIsToken] = useState(false);
    const token = useSelector((state) => state.auth.profile?.token);
    const isLoading = useSelector((state) => state.news.isLoading);
    const news = useSelector((state) => state.news.news);
    const query = useQuery();
    const page = query.get('page') || 1;
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [deleteId, setDeleteId] = useState('');
    //Open MODAL WINDOW
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    //END Open MODAL WINDOW

    const openModalWindow = (id) => {
        setDeleteId(id);
        setOpen(true);
    };

    useEffect(() => {
        if (token) {
            setIsToken(true)
        } else {
            setIsToken(false)
        }
    }, [token]);

    useEffect(() => {
        dispatch(getAllNews(page));
    }, [page, dispatch]);

    if (isLoading) {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '600px' }}>
                <CircularProgress size="5em" />
            </div>
        )
    };

    const deleteThisNews = (id) => {
        dispatch(deleteNews(id));
        dispatch(getAllNews(page));
        handleClose();
    };

    if (!news.length) return (
        <Box sx={{ width: '100%', height: '100%', minHeight: '600px', display: 'flex', justifyContent: 'center', alignItems: 'center', opacity: '0.6' }}>
            Новостей пока нет ...
        </Box>
    );

    return (
        <>
            <Container maxWidth="xl" sx={{ flexGrow: '1' }}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Typography sx={{ width: '100%', textAlign: 'center', color: '#054982', fontSize: '24px', fontWeight: '600', paddingTop: '30px' }}>
                        Новости
                    </Typography>
                    {isToken
                        ?
                        <Button variant="contained" color="secondary" size="small" onClick={() => navigate('/news/create')}>
                            <Typography color="white">Создать</Typography>
                        </Button>
                        :
                        null
                    }
                </Box>
                <Grid container sx={{ paddingTop: '40px', display: 'flex', justifyContent: 'center' }} gap={4}>
                    {news.map((item) => {
                        return (
                            <Grid item key={item.title} xs={12} md={10} lg={10}>
                                <Paper elevation={3} sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, justifyContent: 'space-around', alignItems: 'center' }}>
                                    <ModalWindow handleOpen={handleOpen} handleClose={handleClose} open={open} newsId={deleteId} deleteThisNews={deleteThisNews} />
                                    <Box sx={{ width: { xs: '100%', sm: '30%' } }}>
                                        <Card elevation={1}>
                                            <CardMedia
                                                component="img"
                                                alt={'picture'}
                                                height="300px"
                                                image={item.selectedFile ? item.selectedFile : logo}
                                            />
                                        </Card>
                                    </Box>
                                    <Box sx={{ width: { xs: '90%', sm: '70%' }, display: 'flex', flexDirection: 'column', minHeight: '300px' }}>
                                        <CardContent sx={{ alignSelf: 'start', flexGrow: '2', padding: '20px' }} >
                                            <Typography variant="h6" color='primary' gutterBottom> {item.title}</Typography>
                                            <Typography variant="body2" component="p" sx={{ opacity: '0.7' }}>
                                                {item.message?.split(' ').splice(0, 60).join(' ')}...
                                            </Typography>
                                        </CardContent>
                                        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-between', flexGrow: '0', padding: '20px' }}>
                                            <Box sx={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                                                <Typography sx={{ opacity: '0.8', color: '#054982' }}>{moment(item.updatedAt).format("D.MM.YYYY")}</Typography>
                                                {isToken ?
                                                    <>
                                                        <Button color="error" size="small" variant="text" onClick={() => openModalWindow(item._id)}>
                                                            <DeleteIcon fontSize="small" /> Удалить
                                                        </Button>
                                                    </>
                                                    :
                                                    null
                                                }
                                            </Box>
                                            <Button size="large" color="secondary" variant="contained" sx={{ marginRight: { xs: '20px', sm: '50px' } }} onClick={() => navigate(`/news/${item._id}`)} >
                                                <Typography color='white'>Подробнее</Typography>
                                            </Button>
                                        </Box>
                                    </Box>
                                </Paper>
                            </Grid>
                        )
                    })}
                </Grid>
                {numberOfPages > 1 && (
                        <Paper elevation={6} sx={{width: '80%', margin: '0 auto'}}>
                            <Paginate page={page} numberOfPages={numberOfPages} />
                        </Paper>
                    )}
            </Container>
            <Footer />
        </>
    )
};

export default News;