import * as React from "react";
import { Typography, Button, Container, Grid, Stack, Box, Card } from "@mui/material";
import { IHero } from "./Hero";
import { useTranslation } from "next-i18next";
import Typewriter from "typewriter-effect";

const Hero: React.FunctionComponent<IHero.IProps> = () => {
    const { t } = useTranslation()
    
    return (
      <Box sx={{ margin: '1.75%', marginTop: '3rem', background: 'linear-gradient(150deg, #fe7b26, #ff5041, #fb145e, #ba0063, #770659)', boxShadow: 3, borderRadius: 4 }}>
        <Grid container
          spacing={5}
          alignItems="center"
          justifyContent="center"
          style={{ minHeight: '90vh' }}
        >
          <Grid item>
            <Typography variant="h3" sx={{ fontWeight: 'bold' }} align={'center'}>
              <Typewriter
                options={{
                  strings: [
                    t("home.hero.title.1"),
                    t("home.hero.title.2"),
                    t("home.hero.title.3")
                  ],
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 10,
                }}
              />
            </Typography>
            <Typography variant="h3" align={'center'} gutterBottom>
              { t("home.hero.marketing")}
            </Typography>
            <Typography variant="h5" align={'center'} width={'75%'} marginX={'auto'} gutterBottom>
              {t("home.hero.info")}
            </Typography>
            <Grid container sx={{ width: { xs: '75%', sm: '50%' }, marginX: 'auto', display: 'flex', justifyContent: 'space-between', flexDirection: { xs: "column", md: "row"} }}>
              <Button href="/app" variant="contained" size="large" sx={{ margin: '0.5rem', background: 'linear-gradient(to right, #770659 0%, #53346D 100%)', color: '#FEFEFE' }}>
                {t("home.hero.start")}
              </Button>
              <Button href="/claim" variant="contained" size="large" sx={{ margin: '0.5rem', background: 'linear-gradient(to right, #770659 0%, #53346D 100%)', color: '#FEFEFE' }}>{t("components.navigationBar.claimIncentive")}</Button>
              <Button href="#Process" variant="contained" size="large" sx={{ margin: '0.5rem', background: 'linear-gradient(to right, #770659 0%, #53346D 100%)', color: '#FEFEFE' }}>{t("home.hero.learn")}</Button>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    )
}
export default Hero;