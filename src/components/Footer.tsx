import { FC } from "react";
import {  Box } from '@mui/material';
import { Typography } from "@mui/material";

const Footer: FC = () => {
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: '#0072fffa',
            height: '50px',
            alignItems: 'center',
            justifyContent: 'center'
        }}>

            <Typography variant="subtitle1" sx={{ color: 'white' }}>

                Esri Bulgaria - Task for Front End Geospatial Developer. Angel Stoyanov
            </Typography>
        </Box>
    )
}

export default Footer;