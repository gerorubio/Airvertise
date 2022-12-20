import * as React from "react";
import { Typography, Container, Grid, FormControl, TextField, Button, Card, CardMedia, Box, IconButton, Icon } from "@mui/material";
import { IContactForm } from "./ContactForm";
import { useTranslation } from "next-i18next";

const ContactForm: React.FunctionComponent<IContactForm.IProps> = () => {
    const { t } = useTranslation()

    return (
        <Container maxWidth={'xl'} sx={{ paddingY: '4rem' }}>
            <FormControl fullWidth>
                    <Typography variant="h3" align="center" gutterBottom>Have some questions?</Typography>
                    <Typography variant="subtitle1" align="center" gutterBottom>Please fill out the quick form and we will be in touch with lighting speed.</Typography>
                <Grid container pt={8} spacing={3}>
                    <Grid xs={0} md={6} item sx={{ textAlign: 'center', justifyContent: 'center', alignItems: 'center' }} >
                        <img src="/newsletter.png" style={{ maxWidth: '35%', height: 'auto' }} />
                    </Grid>
                    <Grid xs={12} md={6} item>
                        <Grid container direction={"column"} spacing={3} paddingTop={5}>
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
                                <Button variant="contained" fullWidth size="large" sx={{ background: 'linear-gradient(217deg, #770659, #FB145E 70.71%)' }}>
                                    Send contact information
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