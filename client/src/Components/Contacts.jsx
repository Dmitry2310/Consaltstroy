import React, { useState } from "react";
import { useDispatch } from "react-redux";
import emailjs from "@emailjs/browser";
import { Grid } from "@mui/material";
import Typography from '@mui/material/Typography';
import { Box } from "@mui/system";
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import ContactForm from "./ContactForm";
import Vk from "./../assets/Images/vk.png";
import Telegram from "./../assets/Images/telegram.png";
import WhatsUp from "./../assets/Images/whatsup.png";

const Contacts = () => {

    const dispatch = useDispatch();

    const [mailData, setMailData] = useState({
        name: '',
        tel: '',
        email: '',
        service: '',
        message: ''
    });

    const sendEmail = (e) => {
        e.preventDefault();
        dispatch({ type: "NOTIFICATION", payload: '' });
        emailjs.sendForm('service_pmo85ri', 'template_koe4xwt', e.target, 'WYnU8-UJETj1GEigF');
        setMailData({
            name: '',
            tel: '',
            email: '',
            service: '',
            message: ''
        });
        dispatch({ type: "NOTIFICATION", payload: 'Ваша заявка отправлена успешно' });
    };

    return (
        <Grid container sx={{ justifyContent: 'space-around', paddingTop: '60px', background: '#054982', paddingBottom: '50px', minHeight: '100vh' }}>
            <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <ContactForm mailData={mailData} sendEmail={sendEmail} setMailData={setMailData} />
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
                    <Box sx={{ display: 'flex', gap: '20px', justifyContent: 'center', paddingTop: '30px' }}>
                        <a target="_blank" href={'http://'}><img src={Vk} alt="vk" style={{ height: '40px', cursor: 'pointer' }}></img></a>
                        <a target="_blank" href={'http://'}><img src={Telegram} alt="telegram" style={{ height: '40px', cursor: 'pointer' }}></img></a>
                        <a target="_blank" href={'http://'}><img src={WhatsUp} alt="whatsup" style={{ height: '40px', cursor: 'pointer' }}></img></a>
                    </Box>
                </Box>

            </Grid>
        </Grid>
    )
}

export default Contacts;