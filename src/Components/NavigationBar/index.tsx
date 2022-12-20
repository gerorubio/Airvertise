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
                <img src="/assets/logo/LogoNameAirvertiseTexture.png" style={{ maxWidth: '100%', height: 'auto', margin: 0, padding: 0 }} />
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
            <AppBar component="nav" position="sticky" sx={{ paddingY: '0.5rem' }}>
                <Toolbar sx={{width: {xs: '100%', sm: '90%', md: '75%'}, margin: 'auto'}} >
                    <Grid container>
                        {/* Menu hamburguesa */}
                        <Grid item xs={2} md={'auto'}>
                            <IconButton
                                color="inherit"
                                aria-label="open drawer"
                                edge="start"
                                onClick={handleDrawerToggle}
                                sx={{ mr: 2, display: { sm: 'none' } }}
                            >
                                <MenuIcon />
                            </IconButton>
                        </Grid>
                        {/* Logo */}
                        <Grid item xs={8} md={2}>
                            <img src="/assets/logo/LogoNameAirvertiseTexture.png" style={{ maxWidth: '75%', height: 'auto', margin: 0, marginTop: '1remrem' }} />
                        </Grid>
                        {/* Buton en drawer */}
                        <Grid item xs={2} md={'auto'}>
                            { path == '/app' ?
                                <Button variant="contained" onClick={onConnectWalletClicked} sx={{ display: { xs: 'block', sm: 'none' } }}>
                                    {t("components.navigationBar.connectWallet")}
                                </Button>
                                :
                                <Button href="/app" variant="contained" sx={{ display: { xs: 'block', sm: 'none' } }}>
                                    Launch App
                                </Button>
                            }
                        </Grid>
                        {/* Links */}
                        <Grid item xs={'auto'} md={7} sx={{ display: 'flex', justifyContent: 'center', width: '50%', margin: 'auto' }}>
                            {navItems.map((item) => (
                                <Link key={item} href={'/' + item} underline='none' px={4} sx={{color: '#fff', textTransform:'uppercase', fontWeight: 600}}>{item}</Link>
                            ))}
                        </Grid>
                        {/* Button */}
                        <Grid item xs={'auto'} md={2} sx={{ display: 'flex', alignItems: 'center' }}>
                            { path == '/app' ?
                                <Button variant="contained" onClick={onConnectWalletClicked} sx={{ display: { xs: 'none', sm: 'block' } }}>
                                    {t("components.navigationBar.connectWallet")}
                                </Button>
                                :
                                <Button href="/app" variant="contained">
                                    Launch App
                                </Button>
                            }
                        </Grid>
                    </Grid>
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
                    display: { xs: 'block', sm: 'none' },
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