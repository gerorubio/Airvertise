import * as React from "react";
import { Typography, Container, Grid, FormControl, TextField, Button, Card, CardMedia } from "@mui/material";
import { IContactForm } from "./FooterBar";
import { useTranslation } from "next-i18next";
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import Image from "next/image";

const ContactForm: React.FunctionComponent<IContactForm.IProps> = () => {
    const { t } = useTranslation()

    return (
        <Container maxWidth={'xl'} sx={{ paddingY: '1rem' }}>
            <FormControl fullWidth>
                <Typography variant="h3" align="center" gutterBottom>Have some questions?</Typography>
                <Typography variant="subtitle1" align="center" gutterBottom>Please fil out the quick form and we will be in touch with lighting speed.</Typography>
                <Grid container pt={5} spacing={3}>
                    <Grid xs={0} md={6} item sx={{ textAlign: 'center', justifyContent: 'center' }} >
                        <img src="/newsletter.png" width={'60%'} />
                    </Grid>
                    <Grid xs={12} md={6} item>
                        <Grid container direction={"column"} spacing={3}>
                            <Grid item>
                                <TextField
                                    label="Name"
                                    variant="outlined"
                                    color="secondary"
                                    className="inputRounded"
                                    fullWidth
                                />
                            </Grid>
                            <Grid item>
                                <TextField
                                    label="What's your email?"
                                    variant="outlined"
                                    color="secondary"
                                    className="inputRounded"
                                    fullWidth
                                />
                            </Grid>
                            <Grid item>
                                <TextField
                                    label="Your questions"
                                    multiline
                                    rows={7}
                                    variant="outlined"
                                    color="secondary"
                                    className="inputRounded"
                                    fullWidth
                                />
                            </Grid>
                            <Grid item>
                                <Button variant="contained" fullWidth size="large" sx={{ background: 'linear-gradient(217deg, #770659, #FB145E 70.71%)' }}>
                                    Send Message
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </FormControl>
        </Container>
    )
}

export default ContactForm