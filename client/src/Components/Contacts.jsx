import React, { useState } from "react";

import { Grid } from "@mui/material";
import Typography from '@mui/material/Typography';
import { Box } from "@mui/system";
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Contacts = () => {

    const [mailData, setMailData] = useState({
        name: '',
        tel: '',
        email: '',
        service: '',
        message: ''
    });

    return (
        <Grid container sx={{ justifyContent: 'space-around', paddingTop: '60px', background: '#054982', paddingBottom: '50px', height: '100vh' }}>
            <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Box sx={{ width: '70%', display: 'flex', flexDirection: 'column' }}>
                    <form autoComplete="off" /* onSubmit={handleSubmit} */>
                        <TextField required name="title" variant="filled" label="Ваше имя" sx={{ margin: '20px 0', background: 'white' }} color="secondary" fullWidth value={mailData.name} onChange={(e) => setMailData({ ...mailData, name: e.target.value })} />
                        <TextField required name="title" variant="filled" label="Телефон" sx={{ background: 'white' }} color="secondary" fullWidth value={mailData.tel} onChange={(e) => setMailData({ ...mailData, tel: e.target.value })} />
                        <TextField name="title" variant="filled" label="E-mail" sx={{ margin: '20px 0', background: 'white' }} color="secondary" fullWidth value={mailData.email}  onChange={(e) => setMailData({ ...mailData, email: e.target.value })}  />
                        <TextField name="title" variant="filled" label="Услуга / консультация" sx={{ background: 'white' }} color="secondary" fullWidth value={mailData.service}  onChange={(e) => setMailData({ ...mailData, service: e.target.value })}  />
                        <TextField
                            id="outlined-multiline-flexible"
                            label="Сообщение"
                            multiline
                            fullWidth
                            rows={8}
                            variant="filled"
                            sx={{ margin: '20px 0', background: 'white' }}
                            maxRows={10}
                            required
                            color="secondary"
                        value={mailData.message}
                        onChange={(e) => setMailData({ ...mailData, message: e.target.value })} 
                        />
                        <Box sx={{display: 'flex', justifyContent: 'center'}}>
                            < Button variant="contained" color="secondary" size="large" type="submit" sx={{ color: 'white' }} >Оставить заявку</Button>
                        </Box>
                    </form>
                </Box>
            </Grid>
            <Grid item xs={12} md={6} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-around' }}>
                <Box sx={{ width: '80%' }}>
                    <Typography sx={{ fontFamily: 'Helvetica', fontStyle: 'italic', fontWeight: '700', fontSize: '19px', lineHeight: '22px', textAlign: 'center', color: 'white', paddingTop: { xs: '30px' } }}>
                        Благодарим за ваш интерес к нашей компании.
                    </Typography>
                    <Typography sx={{ fontFamily: 'Helvetica', fontStyle: 'italic', fontWeight: '700', fontSize: '19px', lineHeight: '22px', textAlign: 'justify', color: 'white', paddingTop: '17px' }}>
                        Если у вас возникли вопросы или вы хотите узнать больше о наших услугах, пожалуйста, заполните форму обратной связи.
                        Мы готовы ответить на любые ваши вопросы и предоставить подробную информацию о наших услугах.
                    </Typography>
                    <Typography sx={{ fontFamily: 'Helvetica', fontStyle: 'italic', fontWeight: '700', fontSize: '19px', lineHeight: '22px', textAlign: 'justify', color: 'white', paddingTop: '17px' }}>
                        Будем рады помочь вам решить любые вопросы или проблемы, связанные со строительством, ремонтом или реконструкцией объектов любого назначения.
                    </Typography>
                </Box>
                <Box sx={{ paddingTop: '30px', paddingBottom: '40px' }}>
                    <Typography sx={{ fontFamily: 'Helvetica', fontStyle: 'italic', fontWeight: '700', fontSize: '25px', lineHeight: '29px', textAlign: 'center', color: 'white', marginBottom: '20px' }}>
                        СВЯЗАТЬСЯ С НАМИ
                    </Typography>
                    <Box sx={{ display: 'flex', background: '#EAF9FD', justifyContent: 'center', borderRadius: '15px', padding: '8px 20px 8px 20px', alignItems: 'center' }}>
                        <LocalPhoneIcon sx={{ color: '#054982', width: { xs: '30px', md: '50px' }, height: { xs: '30px', md: '50px' }, marginRight: '15px' }} />
                        <Typography sx={{ fontSize: { xs: '16px', md: '25px' }, fontWeight: '700', lineHeight: '34px', fontFamily: 'Helvetica', color: '#054982' }}> + 7 (999)999-99-99 </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', background: '#EAF9FD', justifyContent: 'center', marginTop: '30px', borderRadius: '15px', padding: { xs: '4px 8px 4px 8px', md: '8px 20px 8px 20px' }, alignItems: 'center' }}>
                        <MailOutlineIcon sx={{ color: '#054982', width: { xs: '30px', md: '50px' }, height: { xs: '30px', md: '50px' }, marginRight: '20px' }} />
                        <Typography sx={{ fontSize: { xs: '16px', md: '25px' }, fontWeight: '700', lineHeight: '34px', fontFamily: 'Helvetica', color: '#054982', textDecoration: 'underline' }}> keskonsalt@yandex.ru </Typography>
                    </Box>
                </Box>
            </Grid>
        </Grid>
    )
}

export default Contacts;