import React from "react";
import { Box } from "@mui/system";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Typography } from "@mui/material";

const ContactForm = ({mailData, setMailData, sendEmail }) => {

    return (
        <Box sx={{ width: { xs: '90%' ,md:'70%'}, display: 'flex', flexDirection: 'column', margin: '0 auto' }}>
            <form autoComplete="off" onSubmit={sendEmail}>
                <TextField required name="customer_name" variant="filled" label="Ваше имя" sx={{ margin: '20px 0', background: 'white' }} color="secondary" fullWidth value={mailData.name} onChange={(e) => setMailData({ ...mailData, name: e.target.value })} />
                <TextField required name="customer_phone" variant="filled" label="Телефон" sx={{ background: 'white' }} color="secondary" fullWidth value={mailData.tel} onChange={(e) => setMailData({ ...mailData, tel: e.target.value })} />
                <TextField name="customer_mail" variant="filled" label="E-mail" sx={{ margin: '20px 0', background: 'white' }} color="secondary" fullWidth value={mailData.email} onChange={(e) => setMailData({ ...mailData, email: e.target.value })} />
                <TextField name="service" variant="filled" label="Услуга / консультация" sx={{ background: 'white' }} color="secondary" fullWidth value={mailData.service} onChange={(e) => setMailData({ ...mailData, service: e.target.value })} />
                <TextField
                    id="outlined-multiline-flexible"
                    label="Сообщение"
                    name="message"
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
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    < Button variant="contained" color="secondary" size="large" type="submit" sx={{ color: 'white' }} >Оставить заявку</Button>
                </Box>
            </form>
        </Box>
    )
};

export default ContactForm;