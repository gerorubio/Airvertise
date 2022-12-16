import * as React from "react";
import { Typography, Container, Grid, FormControl, TextField, Button, Card, CardMedia, Box, IconButton, Icon } from "@mui/material";
import { IContactForm } from "./FooterBar";
import { useTranslation } from "next-i18next";
import { BsTwitter } from "react-icons/bs";
import { FaDiscord } from "react-icons/fa";

const ContactForm: React.FunctionComponent<IContactForm.IProps> = () => {
    const { t } = useTranslation()

    return (
        <Container maxWidth={'xl'} sx={{ paddingY: '5rem' }}>
            <FormControl fullWidth>
                <Typography variant="h3" align="center" gutterBottom>Have some questions?</Typography>
                <Typography variant="subtitle1" align="center" gutterBottom>Please fil out the quick form and we will be in touch with lighting speed.</Typography>
                <Grid container pt={5} spacing={3}>
                    <Grid xs={0} md={6} item sx={{ textAlign: 'center', justifyContent: 'center', alignItems: 'center' }} >
                        <img src="/newsletter.png" style={{ maxWidth: '50%', height: 'auto' }} />
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
                                <Button variant="contained" fullWidth size="large" sx={{ background: 'linear-gradient(217deg, #770659, #FB145E 70.71%)' }}>
                                    Send contact information
                                </Button>
                            </Grid>
                            <Grid item>
                                <Typography variant="h5" align="center" gutterBottom>OR</Typography>
                                <Typography variant="h5" align="center" gutterBottom>Contact us in our social accounts</Typography>
                            </Grid>
                            <Grid item>
                                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                                    <IconButton sx={{ "&:hover": { color: "#FE7B26", background: 'none' } }}>
                                        <BsTwitter style={{ fontSize: '7.5rem', padding: '1rem' }} />
                                    </IconButton>
                                    <IconButton sx={{ "&:hover": { color: "#FE7B26", background: 'none' } }}>
                                        <FaDiscord style={{ fontSize: '7.5rem', padding: '1rem' }} />
                                    </IconButton>
                                </Box>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </FormControl>
        </Container>
    )
}

export default ContactForm