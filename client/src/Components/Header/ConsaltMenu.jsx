import React, { useState, useEffect, useRef } from "react";

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const ConsaltMenu = () => {

    let ref = useRef();

    const [dropdown, setDropdown] = useState(false);
   

    useEffect(() => {
        const handler = (event) => {
            if (dropdown && ref.current && !ref.current.contains(event.target)) {
                setDropdown(false);
            }
        };
        document.addEventListener("mousedown", handler);
        document.addEventListener("touchstart", handler);
        return () => {
            // Cleanup the event listener
            document.removeEventListener("mousedown", handler);
            document.removeEventListener("touchstart", handler);
        };
    }, [dropdown]);

    const onMouseEnter = (text) => {
        /* window.innerWidth > 960 && */
        setDropdown(true);
        
    };

    const onMouseLeave = () => {
        /* window.innerWidth > 960 && */
        setDropdown(false);
       
    };

    return (
        <Box sx={{position: 'absolute', top: '0', color: 'red'}}>
            <Typography>RETljhnsodn;esdpend;nnbkblkblbnlin</Typography>
            <Typography>RETljhnsodn;esdpend;n</Typography>
            <Typography>RETljhnsodn;esdpend;n</Typography>
        </Box>
    )
}

export default ConsaltMenu;