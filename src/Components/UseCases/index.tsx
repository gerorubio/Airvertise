import * as React from "react";
import { Typography, Container, useTheme, useMediaQuery, Grid, Box, Card, CardMedia ,CardContent} from "@mui/material";
import { IUseCases } from "./UseCases";
import { useTranslation } from "next-i18next";
import { AnimationOnScroll } from "react-animation-on-scroll";

const features = [
    {
        "title": "home.useCase.useCases.useCase1.title",
        "text": "home.useCase.useCases.useCase1.info"
    },
    {
        "title": "home.useCase.useCases.useCase2.title",
        "text": "home.useCase.useCases.useCase2.info"
    },
    {
        "title": "home.useCase.useCases.useCase3.title",
        "text": "home.useCase.useCases.useCase3.info"
    }
];

const UseCases: React.FunctionComponent<IUseCases.IProps> = () => {
    const { t } = useTranslation()
    const theme = useTheme();
    
    return (
        <Container sx={{ py: '5rem' }}>
            <Typography variant="h3" align="center" gutterBottom>{t('home.useCase.title')}</Typography>
            <Typography variant="h6" align="center">{t('home.useCase.subtitle')}</Typography>
            <Grid container paddingTop={5}>
                <Grid item md={6}>
                    <img src="https://static.vecteezy.com/system/resources/previews/008/506/601/original/money-and-finances-3d-icon-3d-rendering-png.png" style={{ maxWidth: '100%', height: 'auto' }} />
                </Grid>
                <Grid item md={6}>
                    <Grid container spacing={1.5}>
                        {features.map((feature) => (
                            <Grid key={feature.title} item md={12}>
                                <AnimationOnScroll animateIn="animate__fadeIn" animateOnce>
                                    <Card sx={{ width: '90%', mx: 'auto', height:'auto' }}>
                                        <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            {t(feature.title)}
                                        </Typography>
                                        <Typography variant="subtitle1" color="text.secondary">
                                            {t(feature.text)}
                                        </Typography>
                                        </CardContent>
                                    </Card>
                                </AnimationOnScroll>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    )
}

export default UseCases