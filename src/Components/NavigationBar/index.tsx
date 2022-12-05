import * as React from "react";
import { AppBar, Box, Toolbar, Typography, Button, IconButton, Divider, List, ListItem, ListItemText, ListItemButton, Drawer, Link } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { INavigationBar } from "./NavigationBar";
import { useTranslation } from "next-i18next";

const drawerWidth = 240;
const navItems = ['home', 'app', 'about'];

const NavigationBar: React.FunctionComponent<INavigationBar.IProps> = ({ onConnectWalletClicked }) => {
    const { t } = useTranslation()
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }} color="secondary" >
            <Typography variant="h6" sx={{ my: 2 }}>
                {t("common.airvertise")}
            </Typography>
            <Divider />
            <List>
                {navItems.map((item) => (
                <ListItem key={item} disablePadding>
                    <ListItemButton sx={{ textAlign: 'center' }}>
                    <ListItemText primary={item} />
                    </ListItemButton>
                </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <Box sx={{ display: 'flex' }}>
            <AppBar component="nav" position="sticky">
                <Toolbar sx={{width: {xs: '100%', sm: '90%', md: '75%'}, margin: 'auto'}} >
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1 }}
                    >
                        {t("common.airvertise")}
                    </Typography>
                    <Button variant="contained" onClick={onConnectWalletClicked} sx={{ display: { xs: 'block', sm: 'none' } }}>
                        {t("components.navigationBar.connectWallet")}
                    </Button>
                    <Box sx={{ display: { xs: 'none', sm: 'block' }, width: '50%', margin: 'auto' }}>
                        {navItems.map((item) => (
                            <Link key={item} href={'/' + item} underline='none' px={1} sx={{color: '#fff', textTransform:'uppercase', fontWeight: 600}}>{item}</Link>
                        ))}
                    </Box>
                    <Button variant="contained" onClick={onConnectWalletClicked} sx={{ display: { xs: 'none', sm: 'block' } }}>
                        {t("components.navigationBar.connectWallet")}
                    </Button>
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


{/* <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        {t("common.airvertise")}
                    </Typography>

<Button variant="contained" color="secondary" onClick={onConnectWalletClicked}>
                        {t("components.navigationBar.connectWallet")}
                    </Button> */}