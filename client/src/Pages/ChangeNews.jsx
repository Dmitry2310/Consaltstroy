import React, { useState } from "react";
import Footer from "../Components/Footer";
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { updateNews } from "./../actions/news";

import Paper from '@mui/material/Paper';
import { Container } from "@mui/system";
import TextField from '@mui/material/TextField';
import { Grid, Typography } from "@mui/material";
import Box from '@mui/material/Box';
import { Card, CardMedia } from "@mui/material";
import Button from '@mui/material/Button';
import { CircularProgress } from "@material-ui/core";

const ChangeNews = ({news, setIsChanging}) => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [creating, setCreating] = useState(false);
    const [postData, setPostData] = useState({
        title: news.title,
        message: news.message,
        selectedFile: news.selectedFile,
    });

    //Upload cover photo -------------
    const [selectedImage, setSelectedImage] = useState('');
    const hiddenFileInput = React.useRef(null);

    const fileChange = (e) => {
        if (e.target.files.length !== 0) {
            setSelectedImage(e.target.files[0]);
        } else {
            return;
        }
    };

    const convertToBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file);
            fileReader.onload = () => {
                resolve(fileReader.result);
            };
            fileReader.onerror = (error) => {
                reject(error)
            }
        })
    };

    const handleClick = () => {
        hiddenFileInput.current.click();
    };
    // END Upload cover photo -------------

    //Clear page data
    const clear = () => {
        setPostData({ title: '', message: '', selectedFile: '' });
        setSelectedImage('');
    };
    //END Clear page data

    //Sent req to the server
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (selectedImage) {
            const base64 = await convertToBase64(selectedImage);
            const post = { ...postData, selectedFile: base64 };
            dispatch(updateNews(news._id, post, navigate));
            setCreating(true);
        } else {
            dispatch(updateNews(news._id, postData, navigate));
            setCreating(true);
        }
        /* setIsLoading(true); */
        clear();
        setSelectedImage('');
    };
    // END Sent req to the server

    if (creating) {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '600px' }}>
                <CircularProgress size="5em" />
            </div>
        )
    };

    return (
        <>
            <Container maxWidth="xl" sx={{ flexGrow: '1' }}>
                <Paper style={{ padding: '20px', borderRadius: '15px', marginTop: '30px' }} elevation={6}>
                    <form autoComplete="off" onSubmit={handleSubmit}>
                        <Grid container gap={1} sx={{ justifyContent: 'space-between', display: 'flex', flexDirection: 'column' }}>
                            <Grid item xs={12}>
                                <TextField required name="title" variant="outlined" label="Название" sx={{ margin: '15px 20px 0 0' }} color="primary" fullWidth value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value })} />
                                <Box sx={{ paddingTop: '40px' }} >
                                <Grid container gap={2} sx={{ padding: '5px' }}>
                                    <Grid item xs={12} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
                                        <Card sx={{ maxWidth: '80%', margin: '0 auto' }} elevation={3}>
                                            <CardMedia
                                                component="img"
                                                alt={'picture'}
                                                height="220px"
                                                image={selectedImage !== '' ? URL.createObjectURL(selectedImage) : news.selectedFile}
                                            />
                                        </Card>
                                        <Box>
                                            <input type='file' accept="image/*" style={{ display: 'none' }} onChange={fileChange} ref={hiddenFileInput}></input>
                                            <Button variant='contained' onClick={handleClick}>Загрузить фото</Button>
                                        </Box>
                                    </Grid>
                                </Grid>
                                    <TextField
                                        id="outlined-multiline-flexible"
                                        label="Новость"
                                        multiline
                                        fullWidth
                                        maxRows={40}
                                        required
                                        value={postData.message}
                                        onChange={(e) => setPostData({ ...postData, message: e.target.value })}
                                    />
                                </Box>
                            </Grid>
                            <Grid item xs={12} sm={3}>
                               
                            </Grid>
                            <Grid item xs={12}>
                                <Box sx={{ display: 'flex', width: '100%', justifyContent: { md: 'flex-end' }, flexDirection: { xs: 'column', md: 'row' } }}>
                                    < Button variant="contained" color="primary" size="medium" type="submit" sx={{ margin: '10px ' }} >Опубликовать</Button>
                                    < Button variant="contained" color="secondary" size="medium" sx={{ margin: '10px', marginRight: { md: '5%' } }} onClick={clear} ><Typography color="white">Очистить</Typography> </Button>
                                </Box>
                            </Grid>
                        </Grid>
                    </form>
                </Paper>
            </Container>
            <Footer />
        </>
    )
};

export default ChangeNews;