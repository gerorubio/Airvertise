import React, { useState, useEffect } from "react"
import Button from "@mui/material/Button"
import TextField from "@mui/material/TextField"
import FormControlLabel from "@mui/material/FormControlLabel"
import Checkbox from "@mui/material/Checkbox"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import { useTranslation } from "next-i18next"
import { ICampaignForm } from "./CampaignForm"
import FormHelperText from "@mui/material/FormHelperText"
import { useRootStore } from "@mobx/index"
import { observer } from "mobx-react"
import {
    Autocomplete,
    Grid,
    FormControl,
    InputAdornment,
    Stack,
    styled,
    Container,
    Card
} from "@mui/material"
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker"
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment"
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider"
import { create, CID, IPFSHTTPClient } from "ipfs-http-client";

const FormWrapper = styled(Container)`
    /* background: rgba(119, 6, 89, 0.40);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    border: 1px solid rgba(119, 6, 89, 0.1);
    padding: 0.5rem; */
    
    /* background: rgba(254, 123, 38, 0.48);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    border: 1px solid rgba(254, 123, 38, 0.3); */

    /* background: rgba(251, 20, 94, 0.48);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    border: 1px solid rgba(251, 20, 94, 0.1); */

    background: rgba(18, 18, 18, 0.32);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);

    padding: 1rem;
`;

const CampaignForm: React.FunctionComponent<ICampaignForm.IProps> = observer(() => {
    const { t } = useTranslation()
    const { campaignStore } = useRootStore()

    // Date handle
    const handleStartDateChange = (newDate: any) => {
        campaignStore.setStartDateTime(newDate)
    }
    const handleEndDateChange = (newDate: any) => {
        campaignStore.setEndDateTime(newDate)
    }

    // IPFS config
    const projectId = process.env.NEXT_PUBLIC_PROJECT_ID;
    const projectSecret = process.env.NEXT_PUBLIC_PROJECT_SECRET;
    // const projectId = "2K70ZZxkaYl7rrLOUQ9G9lMi9qx";
    // const projectSecret = "b1794790993bfad931a4fae2d2b45c7e";
    const authorization = "Basic " + btoa(projectId + ":" + projectSecret);
  
    let ipfs: IPFSHTTPClient | undefined;
    try {
      ipfs = create({
        url: "https://ipfs.infura.io:5001/api/v0",
        headers: {
          authorization,
        }
  
      });
    } catch (error) {
      console.error("IPFS error ", error);
      ipfs = undefined;
    }

    // Image preview
    const [selectedImage, setSelectedImage] = useState(null);
    const [imageUrl, setImageUrl] = useState(null);
    useEffect(() => {
        if (selectedImage) {
          setImageUrl(URL.createObjectURL(selectedImage));
        }
      }, [selectedImage]);

    // Submit form
    const [images, setImages] = React.useState<{ cid: CID; path: string }[]>([]);
    
    const validateFormAndContinue = async() => {
        // TODO: Add validations: https://trello.com/c/Tz2jPCMY/66-add-airvertise-validations
        if(!selectedImage) {
            return alert("No files selected");
        }

        const result = await (ipfs as IPFSHTTPClient).add(selectedImage);
  
        setImages([
            ...images,
            {
                cid: result.cid,
                path: result.path,
            },
        ]);


        campaignStore.advertisementUri = "https://airvertise.infura-ipfs.io/ipfs/" + result.path;

        const request = campaignStore.createCampaignData()
        console.log(JSON.stringify(request))
    }

    

    return (
        <Box sx={{ minHeight: '93vh', display: 'flex', alignItems: 'center' }}>
            <FormWrapper>
                <LocalizationProvider dateAdapter={AdapterMoment}>
                    <FormControl>
                        <Grid container spacing={2} py={1}>
                            <Grid item xs={12}>
                                <Typography component="h1" variant="h5" textAlign={'center'}>
                                    {t("campaignForm.formTitle")}
                                </Typography>
                            </Grid>
                            <Grid item md={6}>
                                {/* Title */}
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
                                {/* Description */}
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
                                {/* Campaign ID & Value */}
                                <Stack direction={'row'} spacing={1}>
                                    {/* ID */}
                                    <Box>
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
                                    </Box>
                                    {/* Value */}
                                    <Box>
                                        <TextField
                                            type={'number'}
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
                                            autoFocus
                                        />
                                        <FormHelperText id="campaign-airdropValue-helper-text">
                                            {t("campaignForm.airdropValue.helperText")}
                                        </FormHelperText>
                                    </Box>
                                </Stack>
                                {/* Image */}
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="upload"
                                    label={t("campaignForm.upload.label")}
                                    value={selectedImage.name}
                                    name="upload"
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="start">
                                                <Stack direction="row" alignItems="center" spacing={2}>
                                                    <Button variant="contained" component="label">
                                                        {t("campaignForm.upload.button")}
                                                        <input
                                                            hidden
                                                            accept="image/*"
                                                            type="file"
                                                            id="file"
                                                            name="file"
                                                            onChange={event => {
                                                                if (event.target.files && event.target.files[0]) {
                                                                    setSelectedImage(event.target.files[0]);
                                                                }
                                                            }}
                                                        />
                                                    </Button>
                                                </Stack>
                                            </InputAdornment>
                                        ),
                                    }}
                                    autoFocus
                                />
                                <FormHelperText id="campaign-upload-helper-text">
                                    {t("campaignForm.upload.helperText")}
                                </FormHelperText>
                                <Stack direction={'row'} spacing={1}>
                                    <Box>
                                        <DateTimePicker
                                            label={t("campaignForm.startDateTime.label")}
                                            value={campaignStore.startDateTime}
                                            onChange={handleStartDateChange}
                                            renderInput={params => <TextField margin="normal" {...params} fullWidth />}
                                        />
                                        <FormHelperText id="campaign-startDateTime-helper-text">
                                            {t("campaignForm.startDateTime.helperText")}
                                        </FormHelperText>
                                    </Box>
                                    <Box>
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
                                    </Box>
                                </Stack>
                                <FormControlLabel
                                    control={<Checkbox checked={campaignStore.isCampaignEndlessSelected} />}
                                    onChange={(_, checked) => campaignStore.setIsCampaignEndlessSelected(checked)}
                                    label={t("campaignForm.endCampaign.label")}
                                    id="endCampaignchecker"
                                />
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
                            <Grid item md={6}>
                                <Box height={'100%'} display={'flex'} alignItems={'center'}>
                                    {imageUrl && selectedImage && (
                                        <img src={imageUrl} alt={selectedImage.name} style={{ width: '100%', height: 'auto' }} />
                                    )}
                                </Box>
                            </Grid>
                        </Grid>
                        <Button variant="contained" onClick={validateFormAndContinue}>
                            {t("campaignForm.createCampaign")}
                        </Button>
                    </FormControl>
                </LocalizationProvider>
            </FormWrapper>
        </Box>
    )
})

export default CampaignForm