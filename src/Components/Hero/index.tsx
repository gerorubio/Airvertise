import * as React from "react";
import { AppBar, Box, Toolbar, Typography, Button, IconButton, Divider, List, ListItem, ListItemText, ListItemButton, Drawer, Link, Container, Grid, Stack } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { IHero } from "./Hero";
import { useTranslation } from "next-i18next";
import Typewriter from "typewriter-effect";

const drawerWidth = 240;
const navItems = ['home', 'app', 'about'];

const Hero: React.FunctionComponent<IHero.IProps> = () => {
    const { t } = useTranslation()
    
    return (
      <Container>
        <Grid container
          spacing={5}
          alignItems="center"
          justifyContent="center"
          style={{ minHeight: '100vh' }}
        >
          <Grid item sm={12} md={7} sx={{ width: { xs: '95%', md: '75%' }}}>
            <Typography variant="h2" sx={{ fontWeight: 'bold' }} >
              <Typewriter
                options={{
                  strings: [
                    t("home.heroTitle.1"),
                    t("home.heroTitle.2"),
                    t("home.heroTitle.3")
                  ],
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 10,
                }}
              />
            </Typography>
            <Typography variant="h2" gutterBottom>
              { t("home.heroSystem")}
            </Typography>
            <Typography variant="h5" gutterBottom>
              {t("home.heroInfo")}
            </Typography>
            <Stack direction={'row'} spacing={3}>
              <Button href="/app" variant="contained" size="large">
                {t("home.heroButton")}
              </Button>
              <Button href="#Process" variant="contained" size="large">Learn more</Button>
            </Stack>
              
          </Grid>
          <Grid item sm={12} md={5}>
            <img src="/assets/logo/LogoA.png" style={{width: '100%'}}/>
          </Grid>
        </Grid>
      </Container>
    )
}

export default Hero