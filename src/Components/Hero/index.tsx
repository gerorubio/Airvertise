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
          <Grid item>
            <Typography variant="h3" sx={{ fontWeight: 'bold' }} align={'center'}>
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
            <Typography variant="h3" align={'center'} gutterBottom>
              { t("home.heroSystem")}
            </Typography>
            <Typography variant="h5" align={'center'} width={'75%'} marginX={'auto'} gutterBottom>
              {t("home.heroInfo")}
            </Typography>
            <Stack direction={'row'} spacing={3} justifyContent={'center'} py={3}>
              <Button href="/app" variant="contained" size="large">
                {t("home.heroButton")}
              </Button>
              <Button href="#Process" variant="contained" size="large">Learn more</Button>
              <Button href="/claim" variant="contained" size="large">Claim reward</Button>
            </Stack>
              
          </Grid>
        </Grid>
      </Container>
    )
}

export default Hero