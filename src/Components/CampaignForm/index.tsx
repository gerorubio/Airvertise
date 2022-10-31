import * as React from "react"
import Avatar from "@mui/material/Avatar"
import Button from "@mui/material/Button"
import CssBaseline from "@mui/material/CssBaseline"
import TextField from "@mui/material/TextField"
import FormControlLabel from "@mui/material/FormControlLabel"
import Checkbox from "@mui/material/Checkbox"
import Link from "@mui/material/Link"
import Grid from "@mui/material/Unstable_Grid2"
import Box from "@mui/material/Box"
import LockOutlinedIcon from "@mui/icons-material/LockOutlined"
import Typography from "@mui/material/Typography"
import Container from "@mui/material/Container"
import { useTranslation } from "next-i18next"
import { ICampaignForm } from "./CampaignForm"
import FormHelperText from "@mui/material/FormHelperText"
import { useRootStore } from "@mobx/index"
import { observer } from "mobx-react"
import Chip from "@mui/material/Chip"
import CloseIcon from "@mui/icons-material/Close"
import {
    Autocomplete,
    FilledInput,
    FormControl,
    IconButton,
    Input,
    InputAdornment,
    InputLabel,
    OutlinedInput,
} from "@mui/material"
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker"
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment"
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider"
import CloudUploadIcon from "@mui/icons-material/CloudUpload"
import ChipInput from "@Components/ChipInput"

const CampaignForm: React.FunctionComponent<ICampaignForm.IProps> = observer(() => {
    const { t } = useTranslation()
    const { campaignStore } = useRootStore()

    const handleEndDateChange = (newDate: any) => {
        campaignStore.setEndDateTime(newDate)
    }

    const handleClickUploadFile = () => {}

    function validateFormAndContinue(): void {
        // TODO: Add validations: https://trello.com/c/Tz2jPCMY/66-add-airvertise-validations

        const request = campaignStore.createCampaignData()
        console.log(JSON.stringify(request))
    }

    return (
        <LocalizationProvider dateAdapter={AdapterMoment}>
            <FormControl>
                <Grid container spacing={2} margin={2}>
                    <Grid xs={12}>
                        <Box
                            sx={{
                                marginTop: 8,
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                            }}
                        >
                            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                                <LockOutlinedIcon />
                            </Avatar>
                            <Typography component="h1" variant="h5">
                                Let's start creating your campaign
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid xs={12} sm={6}>
                        <TextField
                            margin="normal"
                            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                campaignStore.setTitle(event.target.value)
                            }}
                            required
                            fullWidth
                            id="title"
                            label={t("campaignForm.title.label")}
                            value={campaignStore.title}
                            name="title"
                            autoFocus
                        />
                        <FormHelperText id="campaign-title-helper-text">
                            {t("campaignForm.title.helperText")}
                        </FormHelperText>
                    </Grid>
                    <Grid xs={12} sm={6}>
                        <TextField
                            margin="normal"
                            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                campaignStore.setName(event.target.value)
                            }}
                            required
                            fullWidth
                            id="name"
                            label={t("campaignForm.name.label")}
                            value={campaignStore.name}
                            name="name"
                            autoFocus
                        />
                        <FormHelperText id="campaign-name-helper-text">
                            {t("campaignForm.name.helperText")}
                        </FormHelperText>
                    </Grid>
                    <Grid xs={12} sm={6}>
                        <TextField
                            margin="normal"
                            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                campaignStore.setDescription(event.target.value)
                            }}
                            required
                            fullWidth
                            id="description"
                            label={t("campaignForm.description.label")}
                            value={campaignStore.description}
                            name="description"
                            autoFocus
                        />
                        <FormHelperText id="campaign-description-helper-text">
                            {t("campaignForm.description.helperText")}
                        </FormHelperText>
                    </Grid>
                    <Grid sx={{ alignItems: "center" }} xs={12} sm={6}>
                        <TextField
                            margin="normal"
                            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                campaignStore.setAirdropValue(event.target.value)
                            }}
                            required
                            fullWidth
                            id="airdropValue"
                            label={t("campaignForm.airdropValue.label")}
                            value={campaignStore.airdropValue}
                            name="airdropValue"
                            InputProps={{
                                startAdornment: <InputAdornment position="start">wei</InputAdornment>,
                            }}
                            autoFocus
                        />
                        <FormHelperText id="campaign-airdropValue-helper-text">
                            {t("campaignForm.airdropValue.helperText")}
                        </FormHelperText>
                    </Grid>
                    <Grid sx={{ alignItems: "center" }} sm={6} lg={3}>
                        <DateTimePicker
                            label={t("campaignForm.endDateTime.label")}
                            value={campaignStore.endDateTime}
                            disabled={campaignStore.isCampaignEndlessSelected}
                            onChange={handleEndDateChange}
                            renderInput={params => <TextField margin="normal" {...params} fullWidth />}
                        />
                        <FormHelperText id="campaign-endDateTime-helper-text">
                            {t("campaignForm.endDateTime.helperText")}
                        </FormHelperText>
                    </Grid>
                    <Grid sx={{ alignSelf: "center" }} sm={6} marginBottom={3} lg={3}>
                        <FormControlLabel
                            control={<Checkbox checked={campaignStore.isCampaignEndlessSelected} />}
                            onChange={(_, checked) => campaignStore.setIsCampaignEndlessSelected(checked)}
                            label={t("campaignForm.endCampaign.label")}
                            id="endCampaignchecker"
                        />
                    </Grid>
                    <Grid sx={{ alignItems: "center" }} sm={12} lg={6}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="upload"
                            label={t("campaignForm.upload.label")}
                            value={campaignStore.advertisementUri}
                            name="upload"
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="start">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickUploadFile}
                                        >
                                            <CloudUploadIcon />
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                            autoFocus
                        />
                        <FormHelperText id="campaign-upload-helper-text">
                            {t("campaignForm.upload.helperText")}
                        </FormHelperText>
                    </Grid>
                    <Grid sx={{ alignItems: "center" }} xs={12} sm={12}>
                        <Autocomplete
                            multiple
                            freeSolo
                            limitTags={20}
                            id="multiple-limit-tags"
                            value={campaignStore.destinations}
                            onChange={(event, newValue) => {
                                campaignStore.setDestinations(newValue as string[])
                            }}
                            renderInput={params => (
                                <TextField
                                    fullWidth
                                    maxRows={2}
                                    {...params}
                                    margin="normal"
                                    label={t("campaignForm.destinations.label")}
                                    placeholder={t("campaignForm.destinations.label")}
                                />
                            )}
                            options={[]}
                        />
                        <FormHelperText id="campaign-upload-helper-text">
                            {t("campaignForm.destinations.helperText")}
                        </FormHelperText>
                    </Grid>
                    <Grid sx={{ textAlign: "end" }} xs={12}>
                        <Button variant="contained" onClick={() => validateFormAndContinue()}>
                            {t("campaignForm.createCampaign")}
                        </Button>
                    </Grid>
                </Grid>
            </FormControl>
        </LocalizationProvider>
    )
})

export default CampaignForm
