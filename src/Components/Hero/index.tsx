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
          style={{ minHeight: '60vh' }}
        >
          <Grid item sm={12} md={7} sx={{ width: { xs: '95%', md: '75%' }}}>
            <Typography variant="h3" gutterBottom>
              <Typewriter
                options={{
                  strings: [
                    t("home.heroTitle.1"),
                    t("home.heroTitle.2")
                  ],
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 10,
                }}
              />
              { t("home.heroSystem")}
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              {t("home.heroInfo")}
            </Typography>
            <Button variant="contained" sx={{marginTop: '1rem'}}>
              {t("home.heroButton")}
            </Button>
          </Grid>
          <Grid item sm={12} md={5}>
            <img src="https://rabbithole.gg/home/artisan.png" style={{width: '100%'}}/>
          </Grid>
        </Grid>
      </Container>
    )
}

export default Hero