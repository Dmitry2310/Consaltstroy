import React from "react";
import Footer from "../Components/Footer";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useState } from "react";

import { Container } from "@mui/system";
import { Box, Card, CardMedia } from "@mui/material";
import logo from "./../assets/Images/Logo.png";
import CardContent from '@mui/material/CardContent';
import { Grid, Typography } from "@mui/material";
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';

const News = () => {

    const news = [
        {
            title: 'Поднятие писи с помощью крана',
            text: 'Теперь рассмотрим ситуацию, в которой между артиклем и связанным с ним существительным расположено одно или несколько дополнительных частей речи. Если таким словом является существительное, то это сразу говорит нам о наличии ее составной группы (левая граница которой как бы помечена артиклем).Теперь рассмотрим ситуацию, в которой между артиклем и связанным с ним существительным расположено одно или несколько дополнительных частей речи. Если таким словом является существительное, то это сразу говорит нам о наличии ее составной группы (левая граница которой как бы помечена артиклем).Теперь рассмотрим ситуацию, в которой между артиклем и связанным с ним существительным расположено одно или несколько дополнительных частей речи. Если таким словом является существительное, то это сразу говорит нам о наличии ее составной группы (левая граница которой как бы помечена артиклем)Теперь рассмотрим ситуацию, в которой между артиклем и связанным с ним существительным расположено одно или несколько дополнительных частей речи. Если таким словом является существительное, то это сразу говорит нам о наличии ее составной группы (левая граница которой как бы помечена артиклем)',
            time: '12.03.2023',
            coverImage: logo
        },
        {
            title: 'Складывание сисек в отвал',
            text: 'Теперь рассмотрим ситуацию, в которой между артиклем и fbjhbe fejbff bejfbns nc dn nn sn  связанным с ним существительным расположено одно или несколько дополнительных частей речи. Если таким словом является существительное, то это сразу говорит нам о наличии ее составной группы (левая граница которой как бы помечена артиклем).Теперь рассмотрим ситуацию, в которой между артиклем и связанным с ним существительным расположено одно или несколько дополнительных частей речи. Если таким словом является существительное, то это сразу говорит нам о наличии ее составной группы (левая граница которой как бы помечена артиклем).Теперь рассмотрим ситуацию, в которой между артиклем и связанным с ним существительным расположено одно или несколько дополнительных частей речи. Если таким словом является существительное, то это сразу говорит нам о наличии ее составной группы (левая граница которой как бы помечена артиклем)Теперь рассмотрим ситуацию, в которой между артиклем и связанным с ним существительным расположено одно или несколько дополнительных частей речи. Если таким словом является существительное, то это сразу говорит нам о наличии ее составной группы (левая граница которой как бы помечена артиклем)',
            time: '08.04.2023',
            coverImage: logo
        },
        {
            title: 'Нет места голубым в этом мире!',
            text: 'Теперь рассмотрим ситуацию, в которой между артиклем и связаsd sdsdwew wjuedwe wdeuiedw dwdwd нным с ним существительным расположено одно или несколько дополнительных частей речи. Если таким словом является существительное, то это сразу говорит нам о наличии ее составной группы (левая граница которой как бы помечена артиклем).Теперь рассмотрим ситуацию, в которой между артиклем и связанным с ним существительным расположено одно или несколько дополнительных частей речи. Если таким словом является существительное, то это сразу говорит нам о наличии ее составной группы (левая граница которой как бы помечена артиклем).Теперь рассмотрим ситуацию, в которой между артиклем и связанным с ним существительным расположено одно или несколько дополнительных частей речи. Если таким словом является существительное, то это сразу говорит нам о наличии ее составной группы (левая граница которой как бы помечена артиклем)Теперь рассмотрим ситуацию, в которой между артиклем и связанным с ним существительным расположено одно или несколько дополнительных частей речи. Если таким словом является существительное, то это сразу говорит нам о наличии ее составной группы (левая граница которой как бы помечена артиклем)',
            time: '03.10.2023',
            coverImage: logo
        }
    ];

    const [isToken, setIsToken] = useState(false);
    const token = useSelector((state) => state.auth.profile?.token);

    useEffect(() => {
        if (token) {
            setIsToken(true)
        } else {
            setIsToken(false)
        }
    }, [token]);

    return (
        <>
            <Container maxWidth="xl" sx={{ flexGrow: '1' }}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Typography sx={{ width: '100%', textAlign: 'center', color: '#054982', fontSize: '24px', fontWeight: '600', paddingTop: '30px' }}>
                        Новости
                    </Typography>
                    {isToken
                        ?
                        <Button variant="contained" color="secondary" size="small" sx={{}}>
                            <Typography color="white">Создать</Typography>
                        </Button>
                        :
                        null
                    }
                </Box>

                <Grid container sx={{ paddingTop: '40px' }} gap={2}>
                    {news.map((item) => {
                        return (
                            <Grid item key={item.title} xs={12} md={8}>
                                <Card elevation={3} sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' } }}>
                                    <CardMedia component="img" image={item.coverImage} sx={{ width: { xl: '50%', md: '50%', sm: '100%' }, padding: '10px', minHeight: '200px', maxHeight: '270px', justifyContent: 'center', alignItems: 'center', }} />
                                    <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', minHeight: '300px' }}>
                                        <CardContent sx={{ alignSelf: 'start', flexGrow: '2', padding: '20px' }} >
                                            <Typography variant="h6" color='primary' gutterBottom> {item.title}</Typography>
                                            <Typography variant="body2" component="p" sx={{ opacity: '0.7' }}>
                                                {item.text.split(' ').splice(0, 60).join(' ')}...
                                            </Typography>
                                        </CardContent>
                                        <CardActions sx={{ width: '100%', display: 'flex', justifyContent: 'space-between', flexGrow: '0', padding: '20px' }}>
                                            <Typography sx={{ opacity: '0.8', color: '#054982' }}>{item.time}</Typography>
                                            <Button size="large" color="secondary" variant="contained" sx={{ marginRight: '50px' }}/* disabled={!user?.result} */ /* onClick={handleLike} */>
                                                <Typography color='white'>Подробнее</Typography>
                                            </Button>
                                            {/* {(user?.result?.googleId === post?.creatorId || user?.result?._id === post?.creatorId) && (
                                            <Button size="small" color="secondary" onClick={handleOpen}>
                                                <DeleteIcon fontSize="small" /> &nbsp; {t("Delete")}
                                            </Button>
                                        )} */}
                                        </CardActions>
                                    </Box>
                                </Card>
                            </Grid>
                        )
                    })}
                </Grid>
            </Container>
            <Footer />
        </>
    )
};

export default News;