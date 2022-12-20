import * as React from "react";
import { Typography, Container, useTheme, useMediaQuery, Box} from "@mui/material";
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
            "title": "home.roadmap.events.title1",
            "text": "home.roadmap.events.text1",
            "date": "home.roadmap.events.date1"
        },
        {
            "title": "home.roadmap.events.title2",
            "text": "home.roadmap.events.text2",
            "date": "home.roadmap.events.date2"
        },
        {
            "title": "home.roadmap.events.title3",
            "text": "home.roadmap.events.text3",
            "date": "home.roadmap.events.date3"
        },
        {
            "title": "home.roadmap.events.title4",
            "text": "home.roadmap.events.text4",
            "date": "home.roadmap.events.date4"
        },
        {
            "title": "home.roadmap.events.title5",
            "text": "home.roadmap.events.text5",
            "date": "home.roadmap.events.date5"
        }
    ]

    const eventItems = events.map((item, index) => {
        return(
            <Box key={index} sx={{ overflow: 'hidden' }}>
                <AnimationOnScroll animateIn={index % 2 == 0 ? 'animate__fadeInLeft' : 'animate__fadeInRight'} animateOnce>
                    <TimelineItem key={item.title}>
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
                            <Typography sx={{display: {md: 'none'}}}>
                                {t(item.date)}
                            </Typography>
                            <Typography variant="h6" component="span">
                                {t(item.title)}
                            </Typography>
                            <Typography variant="body2">
                                {t(item.text)}
                            </Typography>
                        </TimelineContent>
                    </TimelineItem>
                </AnimationOnScroll>
            </Box>
                
            
        )
    })

    return (
        <Container sx={{paddingY: '2rem'}}>
            <Typography variant="h2" align="center" textTransform={'uppercase'}>{t('home.roadmap.roadmap')}</Typography>
            <Timeline position={matches?'alternate':'right'}>
                {eventItems}
            </Timeline>
        </Container>
    )
}

export default Roadmap