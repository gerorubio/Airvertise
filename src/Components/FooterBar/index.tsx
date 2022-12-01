import * as React from "react";
import { AppBar, Box, Toolbar, Typography, Button, IconButton, Divider, List, ListItem, ListItemText, ListItemButton, Drawer, Link, Container, Grid, Stack } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { IFooterBar } from "./FooterBar";
import { useTranslation } from "next-i18next";

const drawerWidth = 240;
const navItems = ['home', 'app', 'about'];

const FooterBar: React.FunctionComponent<IFooterBar.IProps> = () => {
    const { t } = useTranslation()
    
    return (
        <Container sx={{paddingY: 2}}>
            <Typography variant="h3" align="center">Airvertise</Typography>
            <Typography variant="subtitle1" align="center">Copyright © 2022 HubSpot, Inc.</Typography>
            <Stack
                direction="row"
                divider={<Divider orientation="vertical" flexItem />}
                spacing={4}
                justifyContent={'center'}
                py={1}
            >
                <Link underline="none" color={'white'}>Legal Stuff</Link>
                <Link underline="none" color={'white'}>Privacy Policy</Link>
                <Link underline="none" color={'white'}>Security</Link>
            </Stack>
        </Container>
    )
}

export default FooterBar