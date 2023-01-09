import * as React from "react";
import Link from 'next/link';
import { AppBar, Box, Container, Toolbar, Button, IconButton, Divider, List, ListItem, ListItemText, ListItemButton, Drawer, Link as MuiLink, Stack } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { INavigationBar } from "./NavigationBar";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { Web3Button } from "@web3modal/react";

const drawerWidth = 240;
const navItems = ['home', 'app', 'about'];

const NavigationBar: React.FunctionComponent<INavigationBar.IProps> = () => {
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
                <MuiLink component={Link} href="/home">
                    <img src="/assets/logo/LogoNameAirvertiseTexture.png" style={{ maxWidth: '100%', height: 'auto', margin: 0, padding: 0 }} />
                </MuiLink>
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
        <>
            <AppBar component="nav" position="absolute" sx={{ paddingY: '0.25rem' }}>
                <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', width: {xs: '100%', md: '90%'}, marginX: 'auto'}} >
                    {/* Menu de hamburguesa */}
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ display: { md: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    {/* Logo */}
                    <Box component={Link} href="/home" display='flex' justifyContent='center' p={0.5}>
                        <img src="/assets/logo/LogoNameAirvertiseTexture.png" style={{ maxHeight: '4rem', height: '100%' }}/>
                    </Box>
                    { path == '/app' ?
                        <Box sx={{ display: { md: 'none' } }}>
                            <Web3Button />
                        </Box>
                        :
                        <Link href={'/claim'}>
                            <Button variant="contained" sx={{ display: { md: 'none' }, background: 'linear-gradient(170deg, rgba(251,20,94,1) 0%, rgba(254,123,38,1) 50%, rgba(119,6,89,1) 100%)', color: '#fafafa' }}>
                                Claim incentive
                            </Button>
                        </Link>
                    }
                    <Box sx={{ display: {xs: 'none', md: 'flex'}, justifyContent: 'space-evenly', width: '50%' }}>
                        {navItems.map((item) => (
                            <Link key={item} href={'/' + item} >
                                <a style={{ color: '#fff', textTransform:'uppercase', fontWeight: 600, textDecoration: 'none' }}>
                                    {item}
                                </a>
                            </Link>
                        ))}
                    </Box>
                    <Stack direction={'row'} spacing={0.5}>
                        { path == '/home' ?
                            <Link href={'/app'}>
                                <Button href="/app" variant="contained" sx={{ display: { xs: 'none', md: 'block' } }}>
                                    Launch App
                                </Button>
                            </Link>
                            :
                            <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                                <Web3Button />
                            </Box>
                        }
                        { path == '/home' ?
                            <Link href={'/claim'}>
                                <Button variant="contained" sx={{ display: { xs: 'none', md: 'block' }, background: 'linear-gradient(170deg, rgba(251,20,94,1) 0%, rgba(254,123,38,1) 50%, rgba(119,6,89,1) 100%)', color: '#fafafa' }}>
                                    Claim incentive
                                </Button>
                            </Link>
                            
                            :
                            <></>
                        }
                    </Stack>
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
        </>
    )
}
export default NavigationBar