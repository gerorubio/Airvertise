import * as React from "react";
import { Typography, Container, useTheme, useMediaQuery, Grid, Box, Card, CardMedia ,CardContent} from "@mui/material";
import { IUseCases } from "./UseCases";
import { useTranslation } from "next-i18next";
import { AnimationOnScroll } from "react-animation-on-scroll";

const features = [
    {
        "title": "home.featureTitle1",
        "text": "home.feature1",
        "img": "..."
    },
    {
        "title": "home.featureTitle2",
        "text": "home.feature2",
        "img": "..."
    },
    {
        "title": "home.featureTitle3",
        "text": "home.feature3",
        "img": "..."
    }
];

const UseCases: React.FunctionComponent<IUseCases.IProps> = () => {
    const { t } = useTranslation()
    const theme = useTheme();
    
    return (
        <Container sx={{ py: '5rem' }}>
            <Typography variant="h3" align="center" gutterBottom>{t('home.feature')}</Typography>
            <Typography variant="h6" align="center">{t("home.leftImageText")}</Typography>
            <Grid container paddingTop={5}>
                <Grid item md={6}>
                    <img src="https://thesmsworks.co.uk/cdn-cgi/image/format=auto,onerror=redirect/public/images/free-SMS-reply-number.webp" style={{ maxWidth: '100%', height: 'auto' }} />
                </Grid>
                <Grid item md={6}>
                    <Grid container>
                        {features.map((feature) => (
                            <Grid key={feature.title} item md={12} paddingY={'1rem'}>
                                <AnimationOnScroll animateIn="animate__fadeIn" animateOnce>
                                    <Card sx={{ width: '75%', mx: 'auto', height:'auto' }}>
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