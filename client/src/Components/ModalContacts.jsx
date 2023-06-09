import React, { useState } from "react";
import { useDispatch } from "react-redux";
import emailjs from "@emailjs/browser";
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import ContactForm from './ContactForm';
import { useEffect } from 'react';
import { ERROR } from './../Constants/actionTypes';

const style = {
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    alignAitems: 'center',
    justifyContent: 'center',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: {xs:'70%', md: '40%'},
    bgcolor: '#054982',
    boxShadow: 24,
    p: 4,
    borderRadius: '10px'
};

export default function ModalContacts({ handleClose, open, title }) {

    const [mailData, setMailData] = useState({
        name: '',
        tel: '',
        email: '',
        service: '',
        message: ''
    });

    const dispatch = useDispatch();

    const [checked, setChecked] = useState(false);

    const handleChangeCheckBox = (event) => {
        setChecked(event.target.checked);
    }
    const sendEmail = (e) => {
        e.preventDefault();
        if (checked === true) {
            dispatch({ type: "NOTIFICATION", payload: '' });
            emailjs.sendForm('service_pmo85ri', 'template_koe4xwt', e.target, 'WYnU8-UJETj1GEigF');
            setMailData({
                name: '',
                tel: '',
                email: '',
                service: '',
                message: ''
            });
            setChecked(false);
            dispatch({ type: "NOTIFICATION", payload: 'Ваша заявка отправлена успешно' });
            handleClose();
        } else {
            dispatch({ type: ERROR , payload: 'Подтвердите что вы не робот' });
        }
    };

    useEffect(() => {
        setMailData({...mailData, service: `${title}`})
    }, [title]);

    return (
        <div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                slots={{ backdrop: Backdrop }}
                slotProps={{
                    backdrop: {
                        timeout: 500,
                    },
                }}
            >
                <Fade in={open}>
                    <Box sx={style}>
                        <ContactForm mailData={mailData} setMailData={setMailData} sendEmail={sendEmail} checked={checked} handleChangeCheckBox={handleChangeCheckBox}/>
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
};