import * as React from "react";
import { Container, Grid, Stack, Typography, Box, Card, CardContent, CardMedia } from "@mui/material";
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import { IProcessSection } from "./ProcessSection";
import { useTranslation } from "next-i18next";
import { AnimationOnScroll } from 'react-animation-on-scroll';

const ProcessSection: React.FunctionComponent<IProcessSection.IProps> = () => {
    const { t } = useTranslation()

    const steps = [
      {
        color: "linear-gradient(160deg, #770659 60%, #79155e 60%)",
        id: "home.processes.process1.id",
        title: "home.processes.process1.title",
        info: "home.processes.process1.info",
        image: "https://media.istockphoto.com/id/1220332806/es/foto/forma-humana-amarilla-entre-las-oscuras-destacarse-fuera-del-concepto-de-la-multitud.jpg?b=1&s=612x612&w=0&k=20&c=4rKVCFFmzAxz_OJa1ZqYdNR7wKeib742GoWbadUUSl0="
      },
      {
        color: "linear-gradient(160deg, #FB145E 60%, #fc2d6e 60%)",
        id: "home.processes.process2.id",
        title: "home.processes.process2.title",
        info: "home.processes.process2.info",
        image: "https://media.istockphoto.com/id/916093310/es/vector/altavoz-en-mano.jpg?s=612x612&w=0&k=20&c=QcGZapU_2F-_cKv487ZkglqUCQa-o_aDp0Dn_sAWA8c="
      },
      {
        color: "linear-gradient(160deg, #FE7B26 60%, #f58b44 60%)",
        id: "home.processes.process3.id",
        title: "home.processes.process3.title",
        info: "home.processes.process3.info",
        image: "https://static.vecteezy.com/system/resources/previews/008/506/601/original/money-and-finances-3d-icon-3d-rendering-png.png"
      }
    ]

    const stepsDisplay = steps.map(step => {
      return(
        <Grid key={step.id} item xs={12} md={4} paddingY={5}>
          <AnimationOnScroll animateIn="animate__fadeInLeft" animateOnce>
            <Card sx={{ height: '33rem' }}>
              <CardMedia
                component={'img'}
                src={step.image}
                sx={{ height: '18rem', marginRight: 'auto', marginLeft: 'auto' }}
              />
              <CardContent>
                <Stack>
                  <Typography variant="h4" align="center">{ t(step.title) }</Typography>
                  <KeyboardDoubleArrowRightIcon sx={{display: {xs: 'none', md: 'block'}, fontSize: '4.5rem', alignSelf: 'center'}} />
                  <Typography textAlign={'justify'}>{ t(step.info) }</Typography>
                  <KeyboardDoubleArrowDownIcon sx={{display: {xs: 'block', md: 'none'}, fontSize: '4.5rem', alignSelf: 'center'}} />
                </Stack>
              </CardContent>
            </Card>
          </AnimationOnScroll>
        </Grid>
      );
    });

    return (
      <Container sx={{ height: { md: '100vh' }, display: 'flex', justifyContent: 'center', alignItems: 'center' }} id={'Process'}>
        <Box>
          <Typography variant="h3" align="center" sx={{ paddingBottom: '2rem' }} gutterBottom >How it works?</Typography>
          <Grid container spacing={4}>
            { stepsDisplay }
          </Grid>
        </Box>
      </Container>
    );
}

export default ProcessSection