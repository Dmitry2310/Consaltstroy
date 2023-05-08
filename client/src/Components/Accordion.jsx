import React from "react";
import { useState } from "react";
import "./styles.css";
import { useDispatch } from "react-redux";

import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { useSelector } from "react-redux";
import { useEffect } from "react";

const NavBar = () => {

    const dispatch = useDispatch();
    const [expanded, setExpanded] = useState(false);
    const page = useSelector((state) => state.manage.page);
    const paragraf = useSelector((state) => state.manage.paragraf);

    const panels = ['panel1', 'panel2', 'panel3', 'panel4', 'panel5', 'panel6'];

    const handleChange = (panel, paragraf) => (event, isExpanded = true) => {
        setExpanded(isExpanded ? panel : false);
        if (isExpanded) {
            dispatch({ type: 'GO_TO_PAGE', payload: panel });
            dispatch({ type: 'GO_TO_PARGRAF', payload: paragraf });
        } 
    };

    const goToParagraf = (paragraf) => {
        dispatch({ type: 'GO_TO_PARGRAF', payload: paragraf });
    };

    useEffect(() => {
        if (panels.includes(page)) {
            setExpanded(page);
        }
    }, [page]);

    return (
        <div>
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1', 'paragraf1.0')}>
                <AccordionSummary
                    expandIcon={expanded === 'panel1' ? <ChevronRightIcon color="secondary" /> : <ChevronRightIcon color="primary" />}
                    aria-controls="panel1bh-content"
                    expanded={'panel1'}
                    id="panel1bh-header"
                    sx={{ background: (expanded === 'panel1' ? '#054982' : 'white') }}
                >
                    <Typography color={expanded === 'panel1' ? 'white' : '#054982'}>Услуги технического заказчика</Typography>
                </AccordionSummary>
                <AccordionDetails className="accordionDetails" onClick={() => goToParagraf('paragraf1.0')}>
                    <Typography className={paragraf !== 'paragraf1.0' ? "typographyText" : 'typographyTextUnderline'}>
                        Услуги технического заказчика
                    </Typography>
                </AccordionDetails>
                <AccordionDetails className="accordionDetails" onClick={() => goToParagraf('paragraf1.1')}>
                    <Typography className={paragraf !== 'paragraf1.1' ? "typographyText" : 'typographyTextUnderline'}>
                        Оформление земельно-правовых отношений
                    </Typography>
                </AccordionDetails>
                <AccordionDetails className="accordionDetails" onClick={() => goToParagraf('paragraf1.2')}>
                    <Typography className={paragraf !== 'paragraf1.2' ? "typographyText" : 'typographyTextUnderline'}>
                        Получение исходно-разрешительной документации на предпроектной стадии
                    </Typography>
                </AccordionDetails>
                <AccordionDetails className="accordionDetails" onClick={() => goToParagraf('paragraf1.3')}>
                    <Typography className={paragraf !== 'paragraf1.3' ? "typographyText" : 'typographyTextUnderline'}>
                        Согласование проектных документов на стадии разработки «Проектной документации»
                    </Typography>
                </AccordionDetails>
                <AccordionDetails className="accordionDetails" onClick={() => goToParagraf('paragraf1.4')}>
                    <Typography className={paragraf !== 'paragraf1.4' ? "typographyText" : 'typographyTextUnderline'}>
                        Согласование проектной и рабочей документации
                    </Typography>
                </AccordionDetails>
                <AccordionDetails className="accordionDetails" onClick={() => goToParagraf('paragraf1.5')}>
                    <Typography className={paragraf !== 'paragraf1.5' ? "typographyText" : 'typographyTextUnderline'}>
                        Сдача-приемка объекта
                    </Typography>
                </AccordionDetails>
                <AccordionDetails className="accordionDetails" onClick={() => goToParagraf('paragraf1.6')}>
                    <Typography className={paragraf !== 'paragraf1.6' ? "typographyText" : 'typographyTextUnderline'}>
                        Услуги физическим лицам
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2', 'paragraf2.0')}>
                <AccordionSummary
                    expandIcon={expanded === 'panel2' ? <ChevronRightIcon color="secondary" /> : <ChevronRightIcon color="primary" />}
                    aria-controls="panel2bh-content"
                    id="panel2bh-header"
                    sx={{ background: (expanded === 'panel2' ? '#054982' : 'white') }}
                >
                    <Typography color={expanded === 'panel2' ? 'white' : '#054982'}>
                        Независимая экспертиза сметной документации
                    </Typography>
                </AccordionSummary>
            </Accordion>
            <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3', 'paragraf3.0')}>
                <AccordionSummary
                    expandIcon={expanded === 'panel3' ? <ChevronRightIcon color="secondary" /> : <ChevronRightIcon color="primary" />}
                    aria-controls="panel3bh-content"
                    id="panel3bh-header"
                    sx={{ background: (expanded === 'panel3' ? '#054982' : 'white') }}
                >
                    <Typography color={expanded === 'panel3' ? 'white' : '#054982'}>
                        Сметный консалтинг
                    </Typography>
                </AccordionSummary>
            </Accordion>
            <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4', 'paragraf4.0')}>
                <AccordionSummary
                    expandIcon={expanded === 'panel4' ? <ChevronRightIcon color="secondary" /> : <ChevronRightIcon color="primary" />}
                    aria-controls="panel4bh-content"
                    id="panel4bh-header"
                    sx={{ background: (expanded === 'panel4' ? '#054982' : 'white') }}
                >
                    <Typography color={expanded === 'panel4' ? 'white' : '#054982'}>Финансово-технический аудит</Typography>
                </AccordionSummary>
            </Accordion>
            <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5', 'paragraf5.0')}>
                <AccordionSummary
                    expandIcon={expanded === 'panel5' ? <ChevronRightIcon color="secondary" /> : <ChevronRightIcon color="primary" />}
                    aria-controls="panel5bh-content"
                    id="panel5bh-header"
                    sx={{ background: (expanded === 'panel5' ? '#054982' : 'white') }}
                >
                    <Typography color={expanded === 'panel5' ? 'white' : '#054982'}>Составление сметной документации</Typography>
                </AccordionSummary>
            </Accordion>
            <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6', 'paragraf6.0')}>
                <AccordionSummary
                    expandIcon={expanded === 'panel6' ? <ChevronRightIcon color="secondary" /> : <ChevronRightIcon color="primary" />}
                    aria-controls="panel5bh-content"
                    id="panel5bh-header"
                    sx={{ background: (expanded === 'panel6' ? '#054982' : 'white') }}
                >
                    <Typography color={expanded === 'panel6' ? 'white' : '#054982'}>Стоимостной инжиниринг</Typography>
                </AccordionSummary>
            </Accordion>
        </div>
    )
};

export default NavBar;