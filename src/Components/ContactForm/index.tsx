import React, { FormEvent, useState } from "react";
import { Typography, Container, Grid, FormControl, TextField, Button } from "@mui/material";
import { IContactForm } from "./ContactForm";
import { useTranslation } from "next-i18next";
import e from "express";
import { stringify } from "querystring";

interface ContactValues {
    name?: string;
    email?: string;
}

const ContactForm: React.FunctionComponent<IContactForm.IProps> = () => {
    const { t } = useTranslation()

    const [formValues, setFormValues] = useState<ContactValues>({});
    const handleTextFieldChange = (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = event.target;
        setFormValues({
          ...formValues,
          [name]: value,
        });
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        const response = await fetch('/api/submitContactForm', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formValues)
        })

        const content = await response.json();
    }

    return (
        <Container maxWidth={'xl'} sx={{ paddingY: '4rem' }}>
            <FormControl fullWidth>
                <form onSubmit={handleSubmit}>
                    <Typography variant="h3" align="center" gutterBottom>{t("home.contact.title")}</Typography>
                    <Typography variant="subtitle1" align="center" gutterBottom>{t("home.contact.subtitle")}</Typography>
                    <Grid container pt={8} spacing={3}>
                        <Grid xs={0} md={6} item sx={{ textAlign: 'center', justifyContent: 'center', alignItems: 'center' }} >
                            <img src="/newsletter.png" style={{ maxWidth: '35%', height: 'auto' }} />
                        </Grid>
                        <Grid xs={12} md={6} item>
                            <Grid container direction={"column"} spacing={3} paddingTop={5}>
                                <Grid item>
                                    <TextField
                                        label={t("home.contact.nameLabel")}
                                        name="name"
                                        variant="outlined"
                                        color="secondary"
                                        fullWidth
                                        onChange={handleTextFieldChange}
                                        autoComplete='off'
                                    />
                                </Grid>
                                <Grid item>
                                    <TextField
                                        label={t("home.contact.emailLabel")}
                                        name="email"
                                        variant="outlined"
                                        color="secondary"
                                        type={'email'}
                                        fullWidth
                                        onChange={handleTextFieldChange}
                                        autoComplete='off'
                                    />
                                </Grid>
                                <Grid item>
                                    <Button type="submit" variant="contained" fullWidth size="large" sx={{ background: 'linear-gradient(217deg, #770659, #FB145E 70.71%)' }}>
                                        {t("home.contact.button")}
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </form>
            </FormControl>
        </Container>
    )
}

export default ContactForm