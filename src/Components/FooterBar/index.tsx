import * as React from "react";
import { Box, Typography, Divider, Link, Stack, IconButton, Icon } from "@mui/material";
import { IFooterBar } from "./FooterBar";
import { useTranslation } from "next-i18next";
import { BsTwitter } from "react-icons/bs";
import { FaDiscord } from "react-icons/fa";

const drawerWidth = 240;
const navItems = ['home', 'app', 'about'];

const FooterBar: React.FunctionComponent<IFooterBar.IProps> = () => {
    const { t } = useTranslation()
    
    return (
        <Box sx={{ backgroundImage: 'url(/assets/logo/Texture.png)', backgroundSize: 'cover', color: '#121212', paddingY: '0.5rem' }}>
            <div style={{ display: 'flex', justifyContent: 'center', paddingBottom: '2rem' }}>
                <img src="/assets/logo/LogoNameAirvertiseBlack.png" style={{ width: '12%', marginRight: 'auto', marginLeft: 'auto' }} />
            </div>
            <Stack
                direction="row"
                divider={<Divider orientation="vertical" sx={{ backgroundColor: '#121212' }} flexItem />}
                spacing={4}
                justifyContent={'center'}
                pb={4}
            >
                <Link underline="none" color={'black'}>Legal Stuff</Link>
                <Link underline="none" color={'black'}>Privacy Policy</Link>
                <Link underline="none" color={'black'}>Security</Link>
            </Stack>
            <Stack direction={'row'} justifyContent={'center'} spacing={3} pb={3}>
                <IconButton sx={{ color: '#121212', "&:hover": { color: "#00acee", background: 'none' } }}>
                    <BsTwitter style={{ fontSize: '2rem' }}/>
                </IconButton>
                <IconButton sx={{ color: '#121212', "&:hover": { color: "#5865F2", background: 'none' } }}>
                    <FaDiscord style={{ fontSize: '2rem' }}/>
                </IconButton>
            </Stack>
            <Typography variant="subtitle1" align="center">Copyright © 2022 Airvertise Inc.</Typography>
        </Box>
    )
}

export default FooterBar