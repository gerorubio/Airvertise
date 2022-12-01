import * as React from "react";
import { Typography, Container, useTheme, useMediaQuery} from "@mui/material";
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

const Roadmap: React.FunctionComponent<IRoadmap.IProps> = () => {
    const { t } = useTranslation()
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('md'));

    return (
        <Container sx={{paddingY: '2rem'}}>
            <Typography variant="h2" align="center" textTransform={'uppercase'}>Roadmap</Typography>
            <Timeline position={matches?'alternate':'right'}>
                <TimelineItem>
                    <TimelineOppositeContent
                        sx={{ m: 'auto 0', display: {xs: 'none', md: 'block'} }}
                        align="right"
                        variant="body2"
                    >
                        <Typography sx={{}}>
                            24/11
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
                            24/11
                        </Typography>
                        <Typography variant="h6" component="span">
                            Great event title
                        </Typography>
                        <Typography>
                            Description of the great event. Magna Lorem magna qui veniam excepteur exercitation. Aute sint quis incididunt aliqua consectetur irure Lorem aliqua. Officia reprehenderit reprehenderit consequat cillum excepteur velit nisi aute aliqua aliquip Lorem enim.
                        </Typography>
                    </TimelineContent>
                </TimelineItem>

                <TimelineItem>
                    <TimelineOppositeContent
                        sx={{ m: 'auto 0', display: {xs: 'none', md: 'block'} }}
                        align="right"
                        variant="body2"
                    >
                        <Typography sx={{}}>
                            24/11
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
                            24/11
                        </Typography>
                        <Typography variant="h6" component="span">
                            Great event title
                        </Typography>
                        <Typography>
                            Description of the great event. Magna Lorem magna qui veniam excepteur exercitation. Aute sint quis incididunt aliqua consectetur irure Lorem aliqua. Officia reprehenderit reprehenderit consequat cillum excepteur velit nisi aute aliqua aliquip Lorem enim.
                        </Typography>
                    </TimelineContent>
                </TimelineItem>

                <TimelineItem>
                    <TimelineOppositeContent
                        sx={{ m: 'auto 0', display: {xs: 'none', md: 'block'} }}
                        align="right"
                        variant="body2"
                    >
                        <Typography sx={{}}>
                            24/11
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
                            24/11
                        </Typography>
                        <Typography variant="h6" component="span">
                            Great event title
                        </Typography>
                        <Typography>
                            Description of the great event. Magna Lorem magna qui veniam excepteur exercitation. Aute sint quis incididunt aliqua consectetur irure Lorem aliqua. Officia reprehenderit reprehenderit consequat cillum excepteur velit nisi aute aliqua aliquip Lorem enim.
                        </Typography>
                    </TimelineContent>
                </TimelineItem>

                <TimelineItem>
                    <TimelineOppositeContent
                        sx={{ m: 'auto 0', display: {xs: 'none', md: 'block'} }}
                        align="right"
                        variant="body2"
                    >
                        <Typography sx={{}}>
                            24/11
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
                            24/11
                        </Typography>
                        <Typography variant="h6" component="span">
                            Great event title
                        </Typography>
                        <Typography>
                            Description of the great event. Magna Lorem magna qui veniam excepteur exercitation. Aute sint quis incididunt aliqua consectetur irure Lorem aliqua. Officia reprehenderit reprehenderit consequat cillum excepteur velit nisi aute aliqua aliquip Lorem enim.
                        </Typography>
                    </TimelineContent>
                </TimelineItem>

                <TimelineItem>
                    <TimelineOppositeContent
                        sx={{ m: 'auto 0', display: {xs: 'none', md: 'block'} }}
                        align="right"
                        variant="body2"
                    >
                        <Typography sx={{}}>
                            24/11
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
                            24/11
                        </Typography>
                        <Typography variant="h6" component="span">
                            Great event title
                        </Typography>
                        <Typography>
                            Description of the great event. Magna Lorem magna qui veniam excepteur exercitation. Aute sint quis incididunt aliqua consectetur irure Lorem aliqua. Officia reprehenderit reprehenderit consequat cillum excepteur velit nisi aute aliqua aliquip Lorem enim.
                        </Typography>
                    </TimelineContent>
                </TimelineItem>
            </Timeline>
        </Container>
    )
}

export default Roadmap