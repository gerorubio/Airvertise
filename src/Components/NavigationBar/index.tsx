import * as React from "react";
import { AppBar, Box, Container, Toolbar, Typography, Button, IconButton, Divider, List, ListItem, ListItemText, ListItemButton, Drawer, Link, Grid } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { INavigationBar } from "./NavigationBar";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

const drawerWidth = 240;
const navItems = ['home', 'app', 'about'];

const NavigationBar: React.FunctionComponent<INavigationBar.IProps> = ({ onConnectWalletClicked }) => {
    const router = useRouter();

    const path = router.pathname;

    const { t } = useTranslation()
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }} color="secondary" >
            <Container>
                <Link href="/home">
                    <img src="/assets/logo/LogoNameAirvertiseTexture.png" style={{ maxWidth: '100%', height: 'auto', margin: 0, padding: 0 }} />
                </Link>
            </Container>
            <Divider />
            <List>
                {navItems.map((item) => (
                <ListItem key={item} disablePadding>
                    <ListItemButton sx={{ textAlign: 'center' }}>
                    <ListItemText sx={{ textTransform:'uppercase' }} primary={item} />
                    </ListItemButton>
                </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <Box sx={{ display: 'flex' }}>
            <AppBar component="nav" position="sticky" sx={{ paddingY: '0.25rem' }}>
                <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', width: {xs: '100%', md: '75%'}, margin: 'auto'}} >
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    onClick={handleDrawerToggle}
                    sx={{ display: { sm: 'none' } }}
                >
                    <MenuIcon />
                </IconButton>
                <Link href="/home">
                    <img src="/assets/logo/LogoNameAirvertiseTexture.png" style={{ maxHeight: '4rem' }}/>
                </Link>
                { path == '/app' ?
                    <Button variant="contained" onClick={onConnectWalletClicked} sx={{ display: { sm: 'none' } }}>
                        {t("components.navigationBar.connectWallet")}
                    </Button>
                    :
                    <Button href="/app" variant="contained" sx={{ display: { sm: 'none' } }}>
                        Launch App
                    </Button>
                }
                <Box sx={{ display: {xs: 'none', sm: 'block'} }}>
                    {navItems.map((item) => (
                        <Link key={item} href={'/' + item} underline='none' px={4} sx={{color: '#fff', textTransform:'uppercase', fontWeight: 600}}>{item}</Link>
                    ))}
                </Box>
                { path == '/app' ?
                    <Button variant="contained" onClick={onConnectWalletClicked} sx={{ display: { xs: 'none', sm: 'block' } }}>
                        {t("components.navigationBar.connectWallet")}
                    </Button>
                    :
                    <Button href="/app" variant="contained" sx={{ display: { xs: 'none', sm: 'block' } }}>
                        Launch App
                    </Button>
                }
                </Toolbar>
            </AppBar>
            <Box component="nav">
                <Drawer
                variant="temporary"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                    keepMounted: true, // Better open performance on mobile.
                }}
                sx={{
                    display: { xs: 'block', lg: 'none' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                }}
                >
                {drawer}
                </Drawer>
            </Box>
        </Box>
    )
}
export default NavigationBar