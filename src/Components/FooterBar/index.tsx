import * as React from "react";
import { Box, Typography, Divider, Link, Stack, IconButton, Icon, Grid } from "@mui/material";
import { IFooterBar } from "./FooterBar";
import { useTranslation } from "next-i18next";
import { BsTwitter } from "react-icons/bs";
import { FaDiscord } from "react-icons/fa";

const drawerWidth = 240;
const navItems = ['home', 'app', 'about'];

const FooterBar: React.FunctionComponent<IFooterBar.IProps> = () => {
    const { t } = useTranslation()
    
    return (
        <Box sx={{ backgroundImage: 'url(/assets/logo/Texture.png)', backgroundSize: 'cover', color: '#121212', paddingY: '1rem' }}>
            <Grid container>
                <Grid item md={3} />
                <Grid item md={6} display={'flex'} justifyContent={'center'}>
                    <Stack spacing={2}>
                        <img src="/assets/logo/LogoNameAirvertiseBlack.png" style={{ width: '30%', marginRight: 'auto', marginLeft: 'auto' }} />
                        <Typography variant="subtitle1" align="center">Copyright © 2022 Airvertise Inc.</Typography>
                    </Stack>
                </Grid>
                <Grid item md={3} sx={{ display: 'flex', justifyContent: 'center' }} >
                    <IconButton sx={{ color: '#121212', "&:hover": { color: "#5865F2", background: 'none' } }}>
                        <FaDiscord style={{ fontSize: '2.75rem' }}/>
                    </IconButton>
                    <IconButton sx={{ color: '#121212', "&:hover": { color: "#00acee", background: 'none' } }}>
                        <BsTwitter style={{ fontSize: '2.75rem' }}/>
                    </IconButton>
                </Grid>
            </Grid>
            
            
        </Box>
    )
}

export default FooterBar