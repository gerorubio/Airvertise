import * as React from "react";
import { Container, Grid, Stack, Typography, Box } from "@mui/material";
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
        info: "home.processes.process1.info"
      },
      {
        color: "linear-gradient(160deg, #FB145E 60%, #fc2d6e 60%)",
        id: "home.processes.process2.id",
        title: "home.processes.process2.title",
        info: "home.processes.process2.info"
      },
      {
        color: "linear-gradient(160deg, #FE7B26 60%, #f58b44 60%)",
        id: "home.processes.process3.id",
        title: "home.processes.process3.title",
        info: "home.processes.process3.info"
      }
    ]

    const stepsDisplay = steps.map(step => {
      return(
        <Grid key={step.id} item xs={12} md={4} paddingY={5}>
          <AnimationOnScroll animateIn="animate__fadeInLeft">
            <Box sx={{
              width: '95%',
              marginX: 'auto',
              background: step.color,
              paddingX: '1.75rem', borderRadius: '1rem',
              outline: '0.125rem solid white',
              outlineOffset: '-0.5rem',
            }}>
              <Stack spacing={1}
                sx={{
                  minHeight: {
                    xs: 'auto',
                    md: '30rem'
                  },
                  textAlign: 'center',
                  justifyContent: 'center',
                  paddingY: '1rem'
                }}
              >
                <Typography variant="h3">{ t(step.id) }</Typography>
                <KeyboardDoubleArrowRightIcon sx={{display: {xs: 'none', md: 'block'}, fontSize: '4.5rem', alignSelf: 'center'}} />
                <Typography variant="h4">{ t(step.title) }</Typography>
                <Typography textAlign={'justify'}>{ t(step.info) }</Typography>
                <KeyboardDoubleArrowDownIcon sx={{display: {xs: 'block', md: 'none'}, fontSize: '4.5rem', alignSelf: 'center'}} />
              </Stack>
            </Box>
          </AnimationOnScroll>
        </Grid>
      );
    })

    return (
      <Container>
        <Grid container spacing={9}>
          { stepsDisplay }
        </Grid>
      </Container>
    );
}

export default ProcessSection