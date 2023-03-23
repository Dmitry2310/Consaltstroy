import React from "react";
import Cover from './../assets/Images/Cover.png';
import HandsIcon from './../assets/Images/HandsIcon.png';
import SignIcon from './../assets/Images/SignIcon.png';
import BuildIcon from './../assets/Images/BuildIcon.png';
import HouseIcon from './../assets/Images/HouseIcon.png';
import Consulting from './../assets/Images/Consulting.png';
import crad1pic from './../assets/Images/card1pic.png';
import crad2pic from './../assets/Images/card2pic.png';
import crad3pic from './../assets/Images/card3pic.png';
import crad4pic from './../assets/Images/card4pic.png';
import crad5pic from './../assets/Images/card5pic.png';
import crad6pic from './../assets/Images/card6pic.png';

import { Container } from "@mui/system";
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Grid } from "@mui/material";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const intoductionBlock = [
    {
        title: "Услуги технического заказчика",
        icon: HandsIcon,
    },
    {
        title: "Независимая экспертиза сметной документации",
        icon: SignIcon,
    },
    {
        title: "Оценка стоимости объекта",
        icon: BuildIcon,
    },
    {
        title: "Разработка сметной документации",
        icon: HouseIcon,
    }
];

const welcomeBlockButtons = [
    {
        title: "Наша деятельность",
        color: "primary"
    },
    {
        title: "Наши услуги",
        color: "third"
    },
    {
        title: "Проекты",
        color: "third"
    },
    {
        title: "Оставить заявку",
        color: "secondary"
    }
];

const cardServices = [
    {
        title: "Составление сметной документации ",
        img: crad1pic,
        text: "Компания “Консалтэкспертстрой” предлагает услуги по составлению сметной документации. Наши специалисты имеют большой опыт работы в данной области и готовы помочь вам определить реальные затраты на строительство или ремонт объекта недвижимости. Мы гарантируем точность и актуальность наших расчетов, а также своевременное выполнение всех работ. Обращайтесь к нам, и мы с удовольствием поможем вам в решении всех вопросов, связанных с составлением сметной документации.",
        cardColor: "#2B3F74",
        textColor: "#ffffff"
    },
    {
        title: "Финансово-технический аудит",
        img: crad2pic,
        text: "Мы проведем комплексную оценку вашей финансовой и технической деятельности, выявим проблемные зоны и предоставим рекомендации по их устранению. Наши эксперты проведут анализ финансовой отчетности, управленческих процессов, технического оборудования и технологических процессов, чтобы помочь вам оптимизировать работу вашей организации.",
        cardColor: "#ffffff",
        textColor: "#2B3F74"
    },
    {
        title: "Услуги технического заказчика",
        img: crad3pic,
        text: "Предоставляем услуги технического заказчика, обеспечивая полный контроль над строительным процессом. Наша команда профессионалов поможет Вам сократить расходы и время на строительство, а также обеспечить высокое качество работ. Доверьте нам свой проект и получите результат, о котором мечтали!",
        cardColor: "#2B3F74",
        textColor: "#ffffff"
    },
    {
        title: "Независимая экспертиза сметной документации",
        img: crad4pic,
        text: "Вы готовитесь к строительству или реконструкции объекта, но не уверены в правильности составления сметной документации? Наша компания предлагает услугу независимой экспертизы сметной документации, которая поможет вам защитить свои интересы и обеспечить прозрачность в строительной сфере.Независимая экспертиза сметной документации - это комплексная оценка сметы на соответствие нормам безопасности, стандартам качества и экологическим нормам. Наши высококвалифицированные эксперты проведут детальный анализ составленной сметы на корректность расчетов, правильность выбора материалов и оборудования.",
        cardColor: "#ffffff",
        textColor: "#2B3F74"
    },
    {
        title: "Оценка стоимости",
        img: crad5pic,
        text: "Оценка стоимости недвижимости является ключевым фактором при покупке, продаже или сдаче в аренду объекта недвижимости. Компания 'Консалтэкспертстрой' предоставляет высококачественные услуги по оценке стоимости. Наша команда состоит из опытных и квалифицированных экспертов, которые используют современные методы и технологии, чтобы обеспечить наших клиентов точной и объективной оценкой стоимости их недвижимости.   Обратитесь к нам сегодня, и мы гарантируем, что Вы получите высококачественную и надежную услугу по оценке стоимости Вашегообъекта.",
        cardColor: "#2B3F74",
        textColor: "#ffffff"
    },
    {
        title: "Сметный консалтинг",
        img: crad6pic,
        text: "Мы предлагаем комплексный подход к сметному консалтингу, который включает в себя анализ и оценку сметной документации, а также рекомендации по ее улучшению. Мы также поможем вам принять решение о выборе подрядчика и контролировать выполнение работ в соответствии с составленной сметой.Наша компания гарантирует высокое качество услуг, оперативность и индивидуальный подход к каждому клиенту. Мы всегда готовы помочь Вам в решении любых вопросов, связанных с реализацией Вашего проекта. Обращайтесь к нам за сметным консалтингом, и мы сделаем все возможное, чтобы Ваш проект стал успешным и экономически эффективным!",
        cardColor: "#ffffff",
        textColor: "#2B3F74"
    },
]

const HomePage = () => {

    return (
        <Container maxWidth="xl">
            <Box sx={{ width: '100%', height: '420px', overflow: 'hidden', display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
                <img alt="backgroundImage" src={Cover} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <Box sx={{ background: 'rgba(0, 0, 0, 0.5)', mixBlendMode: 'multiply', height: '420px', width: '100%', position: 'absolute' }}></Box>
                <Box sx={{ position: 'absolute', top: '0', left: '0', height: '420px', width: '100%' }}>
                    <Grid container >
                        <Grid item xs={12} sx={{ marginTop: '10%', paddingLeft: '3%', paddingBottom: '3px', position: 'relative' }}>
                            <Typography component="div" gutterBottom sx={{ textDecoration: 'underline', color: '#ffffff' }}>
                                <Box fontStyle="italic" fontWeight={700} fontSize={{ xs: '25px', sm: '30px', md: '60px' }} fontFamily="Helvetica" color="white">
                                    Консалтэкспертстрой
                                </Box>
                            </Typography>
                            {/* <Box sx={{ border: { xs: '1px solid white', md: '2px solid white' }, width: { xs: '275px', sm: '333px', md: '655px' }, position: 'absolute', bottom: '26%' }}></Box> */}
                        </Grid>
                        <Grid container sx={{ display: 'flex', justifyContent: 'space-between' }} >
                            <Grid item xs={9} md={4} lg={4} sx={{ padding: '0 3%' }}>
                                <Typography component="div" >
                                    <Box fontStyle="italic" fontWeight={700} fontSize={{ xs: '12px', sm: '14px', md: '24px' }} fontFamily="Helvetica" color="white">
                                        Строительный консалтинг полного цикла вкладывая в качество и надежность
                                    </Box>
                                </Typography>
                            </Grid>
                            <Grid item md={8} lg={6}>
                                <Grid container sx={{ justifyContent: 'center' }}>
                                    {intoductionBlock.map((block) => {
                                        return (
                                            <Grid key={block.title} item xs={6} md={3} sx={{ padding: { xs: '5px' } }}>
                                                <Box sx={{ padding: '5px', maxWidth: { md: '212px' }, height: { xs: '100px', md: '150px' }, background: '#ffffff', borderRadius: '15px', opacity: '0.8', display: 'flex', flexDirection: 'column', justifyContent: 'space-around', alignItems: 'center' }}>
                                                    <img alt={block.title} src={block.icon} />
                                                    <Typography component="div">
                                                        <Box fontStyle="italic" fontWeight={900} fontSize={{ xs: '12px', sm: '14px', md: '16px' }} fontFamily="Montserrat" color="#2B3F74" textAlign="center">
                                                            {block.title}
                                                        </Box>
                                                    </Typography>
                                                </Box>
                                            </Grid>
                                        )
                                    })}
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
            <Box sx={{ padding: { xs: '30px 0 30px 0', md: '60px 0 60px 0' } }}>
                <Grid container gap={1} sx={{ justifyContent: 'space-around' }}>
                    <Grid item xs={12} md={5} lg={3} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                        {welcomeBlockButtons.map((but) => {
                            return (
                                <Button key={but.title} variant="contained" color={but.color} sx={{ width: '287px', height: '69px', marginTop: '10px', borderRadius: '15px' }}>
                                    <Typography sx={{ fontStyle: 'italic' }}>{but.title}</Typography>
                                </Button>
                            )
                        })}
                    </Grid>
                    <Grid item xs={12} md={6} lg={5} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: { xs: '30px 0 0 0' } }}>
                        <Typography component="div" sx={{ borderBottom: '1px solid #3C4144' }}>
                            <Box fontStyle="italic" fontWeight={300} fontSize={{ xs: '12px', sm: '14px', md: '19px' }} fontFamily="Helvetica" color="#3C4144" textAlign={{ xs: 'center' }}>
                                ДОБРО ПОЖАЛОВАТЬ В ПРОСТРАНСТВО ПРОФЕССИОНАЛОВ
                            </Box>
                        </Typography>
                        <Typography component="div" sx={{ padding: { xs: '10px 5px 5px 5px', md: '30px 10px 10px 10px' } }}>
                            <Box fontStyle="italic" fontWeight={300} fontSize={{ xs: '12px', sm: '14px', md: '16px' }} fontFamily="Helvetica" color="#3C4144DE">
                                Компания “Консалтэкспертстрой” оказывает консалтинговые услуги в сфере реализации инвестиционно-строительных проектов с участием средств частных инвесторов, федерального, регионального, местных бюджетов на всех этапах реализации проекта: выбор земельного участка и оформление земельно-правовых отношений, оценка стоимости проекта, прохождение экспертизы, приемка выполненных работ
                            </Box>
                        </Typography>
                    </Grid>
                    <Grid item md={12} lg={3} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: { xs: '0 0 0 15px' } }}>
                        <img alt="backgroundImage" src={Consulting} style={{ width: '348px', height: '215px', objectFit: 'cover' }} />
                    </Grid>
                </Grid>
            </Box>
            <Box>
                <Box sx={{ paddingTop: '50px' }}>
                    <Typography sx={{ textAlign: 'center', width: '100%', color: '#02081685', fontFamily: 'Helvetica', fontWeight: '700', fontSize: '24px', textDecoration: 'underline' }}>НАШИ УСЛУГИ</Typography>
                </Box>
                <Grid container sx={{ padding: '40px 0 0 0' }} gap={1} >
                    {cardServices.map((card) => {
                        return (
                            <Grid key={card.title} item sm={11.9} md={5.9} lg={3.9} sx={{ background: { xs: card.cardColor }, border: '0.5px solid #2B3F74' }}>
                                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'stretch', justifyContent: 'space-between', height: 'auto'}}>
                                    <Box sx={{ position: 'relative', width: '100%', display: 'flex', justifyContent: 'center', height: '222px' }}>
                                        <img alt="cardImage" src={card.img} style={{ width: '100%' }} />
                                        <Box sx={{ display: 'flex', position: 'absolute', top: '0', width: '100%', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                                            <Typography sx={{ fontFamily: 'Helvetica', fontWeight: '700', fontSize: '24px', textAlign: 'center', fontStyle: 'italic', color: 'white', zIndex: '1', margin: '0 auto', width: '60%', textShadow: '4px 4px 15px rgba(0, 0, 0, 0.25)' }}>{card.title}</Typography>
                                        </Box>
                                        <Box sx={{ background: 'rgba(0, 0, 0, 0.4)', mixBlendMode: 'multiply', width: '100%', position: 'absolute', height: '100%' }}></Box>
                                    </Box>
                                    <Box sx={{ padding: '20px', display: 'flex', justifyContent: 'center'}}>
                                        <Typography color={card.textColor} sx={{ textAlign: 'center', width: '98%', fontFamily: 'Helvetica', fontWeight: '400', fontStyle: 'italic', fontSize: '18px' }}>{card.text}</Typography>
                                    </Box>
                                    <Box sx={{ display: 'flex'}}>
                                        <Button variant="text" color="secondary" sx={{ marginLeft: '10%', padding: '25px', marginTop: 'auto' }}>
                                            <Typography sx={{ textDecoration: 'underline', fontStyle: 'italic' }}>Подробнее</Typography>
                                            <ChevronRightIcon />
                                        </Button>
                                    </Box>
                                </Box>
                            </Grid>
                        )
                    })}
                </Grid>
            </Box>
        </Container>
    )
};

export default HomePage;