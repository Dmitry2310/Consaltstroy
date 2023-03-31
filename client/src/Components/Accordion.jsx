import React from "react";
import { useState } from "react";
import "./styles.css";

import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const NavBar = () => {

    const [expanded, setExpanded] = useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <div>
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary
                    expandIcon={expanded === 'panel1' ? <ChevronRightIcon color="secondary" /> : <ChevronRightIcon color="primary" />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                    className={expanded === 'panel1' ? "summaryBackground" : ''}
                >
                    <Typography color={expanded === 'panel1' ? 'white' : '#054982'}>Услуги технического заказчика</Typography>
                </AccordionSummary>
                <AccordionDetails className="accordionDetails">
                    <Typography className="typographyText">
                        Оформление земельно-правовых отношений
                    </Typography>
                </AccordionDetails>
                <AccordionDetails className="accordionDetails">
                    <Typography className="typographyText">
                        Получение исходно-разрешительной документации на предпроектной стадии
                    </Typography>
                </AccordionDetails>
                <AccordionDetails className="accordionDetails">
                    <Typography className="typographyText">
                        Согласование проектных документов на стадии разработки «Проектной документации».
                    </Typography>
                </AccordionDetails>
                <AccordionDetails className="accordionDetails">
                    <Typography className="typographyText">
                        Согласование проектной и рабочей документации
                    </Typography>
                </AccordionDetails>
                <AccordionDetails className="accordionDetails">
                    <Typography className="typographyText">
                        Сдача-приемка объекта
                    </Typography>
                </AccordionDetails>
                <AccordionDetails className="accordionDetails">
                    <Typography className="typographyText">
                        Услуги физическим лицам
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <AccordionSummary
                    expandIcon={expanded === 'panel2' ? <ChevronRightIcon color="secondary" /> : <ChevronRightIcon color="primary" />}
                    aria-controls="panel2bh-content"
                    id="panel2bh-header"
                    className={expanded === 'panel2' ? "summaryBackground" : ''}
                >
                    <Typography color={expanded === 'panel2' ? 'white' : '#054982'}>
                        Независимая экспертиза сметной документации
                    </Typography>
                </AccordionSummary>
            </Accordion>
            <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                <AccordionSummary
                    expandIcon={expanded === 'panel3' ? <ChevronRightIcon color="secondary" /> : <ChevronRightIcon color="primary" />}
                    aria-controls="panel3bh-content"
                    id="panel3bh-header"
                    className={expanded === 'panel3' ? "summaryBackground" : ''}
                >
                    <Typography color={expanded === 'panel3' ? 'white' : '#054982'}>
                        Сметный консалтинг
                    </Typography>
                </AccordionSummary>
            </Accordion>
            <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                <AccordionSummary
                    expandIcon={expanded === 'panel4' ? <ChevronRightIcon color="secondary" /> : <ChevronRightIcon color="primary" />}
                    aria-controls="panel4bh-content"
                    id="panel4bh-header"
                    className={expanded === 'panel4' ? "summaryBackground" : ''}
                >
                    <Typography color={expanded === 'panel4' ? 'white' : '#054982'}>Финансово-технический аудит</Typography>
                </AccordionSummary>
            </Accordion>
            <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
                <AccordionSummary
                    expandIcon={expanded === 'panel5' ? <ChevronRightIcon color="secondary" /> : <ChevronRightIcon color="primary" />}
                    aria-controls="panel5bh-content"
                    id="panel5bh-header"
                    className={expanded === 'panel5' ? "summaryBackground" : ''}
                >
                    <Typography color={expanded === 'panel5' ? 'white' : '#054982'}>Составление сметной документации</Typography>
                </AccordionSummary>
            </Accordion>
        </div>
    )
}

export default NavBar;