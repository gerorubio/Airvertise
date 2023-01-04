import * as React from "react";
import { Typography, Container, useTheme, useMediaQuery, Box, Card, CardContent} from "@mui/material";
import { IRoadmap } from "./Roadmap";
import { useTranslation } from "next-i18next";
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { AnimationOnScroll } from "react-animation-on-scroll";

const Roadmap: React.FunctionComponent<IRoadmap.IProps> = () => {
    const { t } = useTranslation()
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('md'));

    const events = [
        {
            "title": "home.roadmap.events.event1.title",
            "text": "home.roadmap.events.event1.text",
            "date": "home.roadmap.events.event1.date"
        },
        {
            "title": "home.roadmap.events.event2.title",
            "text": "home.roadmap.events.event2.text",
            "date": "home.roadmap.events.event2.date"
        },
        {
            "title": "home.roadmap.events.event3.title",
            "text": "home.roadmap.events.event3.text",
            "date": "home.roadmap.events.event3.date"
        },
        {
            "title": "home.roadmap.events.event4.title",
            "text": "home.roadmap.events.event4.text",
            "date": "home.roadmap.events.event4.date"
        },
        {
            "title": "home.roadmap.events.event5.title",
            "text": "home.roadmap.events.event5.text",
            "date": "home.roadmap.events.event5.date"
        }
    ]

    const eventItems = events.map((item, index) => {
        return(
                <>
                    <TimelineItem key={item.title}>
                        {/* <AnimationOnScroll animateIn={index % 2 == 0 ? 'animate__fadeInLeft' : 'animate__fadeInRight'} animateOnce> */}
                            <TimelineOppositeContent
                                sx={{ m: 'auto 0', display: {xs: 'none', md: 'block'} }}
                                align="right"
                                variant="body2"
                            >
                                <Typography variant="h5">
                                    {t(item.date)}
                                </Typography>
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineConnector />
                                    <TimelineDot color="primary">
                                        <CalendarMonthIcon />
                                    </TimelineDot>
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent sx={{ py: '12px', px: 2 }}>
                                <Card>
                                    <CardContent>
                                        <Typography sx={{display: {md: 'none'}}}>
                                            {t(item.date)}
                                        </Typography>
                                        <Typography variant="h5" component="span" textAlign={'justify'} sx={{ color: '#c01caa' }}>
                                            {t(item.title)}
                                        </Typography>
                                        <Typography variant="subtitle1">
                                            {t(item.text)}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </TimelineContent>
                        {/* </AnimationOnScroll> */}
                    </TimelineItem>
                </>
        )
    })

    return (
        <Container sx={{paddingY: '2rem'}}>
            <Typography variant="h2" align="center" textTransform={'uppercase'}>{t('home.roadmap.roadmap')}</Typography>
            {/* <Timeline position={matches?'alternate':'right'}> */}
            <Timeline position={'alternate'}>
                {eventItems}
            </Timeline>
        </Container>
    )
}

export default Roadmap