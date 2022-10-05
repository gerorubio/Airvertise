import * as React from "react"
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import IconButton from "@mui/material/IconButton"
import MenuIcon from "@mui/icons-material/Menu"
import { INavigationBar } from "./NavigationBar"
import { useTranslation } from "next-i18next"

const NavigationBar: React.FunctionComponent<INavigationBar.IProps> = ({ onConnectWalletClicked }) => {
    const { t } = useTranslation()

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        {t("common.airvertise")}
                    </Typography>
                    <Button variant="contained" color="secondary" onClick={onConnectWalletClicked}>
                        {t("components.navigationBar.connectWallet")}
                    </Button>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default NavigationBar
