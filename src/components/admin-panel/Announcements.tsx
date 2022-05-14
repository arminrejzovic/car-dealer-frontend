import React, {useEffect, useState} from 'react';
import {Announcement} from "../../interfaces/Interfaces";
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Grid, Snackbar,
    TextField
} from "@mui/material";
import ButtonRegular from "../common/ButtonRegular";
import {Add} from "@mui/icons-material";
import {ReactSearchAutocomplete} from "react-search-autocomplete";
import {createNewAnnouncement, fetchAllAnnouncements} from "../../networking/AnnouncementServices";
import AnnouncementBrief from "./AnnouncementBrief";

function Announcements() {
    const [announcements, setAnnouncements] = useState<Announcement[]>([]);
    const [results, setResults] = useState<Announcement[]>([]);
    const [dialogOpened, setDialogOpened] = useState(false);
    const [newAnnouncement, setNewAnnouncement] = useState({title:"", text: "", dateCreated: (new Date()).toDateString()});
    const [snackbarOpen, setSnackbarOpen] = useState(false);


    async function getAnnouncements(){
        const res = await fetchAllAnnouncements();
        setAnnouncements(res);
        setResults(res);
    }

    useEffect(() => {
        getAnnouncements();
    }, []);

    return (
        <div style={{padding: "3rem", display: "grid", gap: "3rem"}}>
            <Grid container spacing={2}>
                <Grid item xl={2} lg={2} md={3} sm={4} xs={5.5}>
                    <h2 style={{fontSize:"2rem"}}>SAOPŠTENJA</h2>
                </Grid>
                <Grid item xl={8} lg={8} md={6} sm={4} xs={0}/>
                <Grid item xl={2} lg={2} md={3} sm={4} xs={6}>
                    <ButtonRegular text={"NOVO SAOPŠTENJE"} variant={"filled"} color={"red"} icon={<Add/>} onClick={() => {setDialogOpened(true)}}/>
                </Grid>
            </Grid>

            <ReactSearchAutocomplete
                items={[]}
                onSearch={(keyword)=>{
                    setResults(announcements.filter((announcement) => {
                        const title = announcement.title.toLowerCase();
                        const text = announcement.text.toLowerCase();
                        const keywordLowercase = keyword.toLowerCase();
                        return (title.includes(keywordLowercase) || text.includes(keywordLowercase));
                    }))
                }}
                onHover={()=>{}}
                onSelect={()=>{}}
                onFocus={()=>{}}
                formatResult={()=>{}}
                placeholder={"Pretraži saopštenja"}
                styling={{borderRadius:"0", zIndex:1000}}
            />

            <Grid container spacing={2}>
                {
                    results.map((item) => {
                        return (
                            <Grid item xl={12} lg={12} md={12} sm={6} xs={12}>
                                <AnnouncementBrief
                                    announcement={item}
                                    announcementListRef={announcements}
                                    announcementMutator={setResults}
                                />
                            </Grid>
                        );
                    })
                }
            </Grid>

            <Dialog open={dialogOpened} onClose={() => {setDialogOpened(false)}}>
                <DialogTitle>NOVO SAOPŠTENJE</DialogTitle>
                <DialogContent>
                    <TextField
                        margin="dense"
                        label="Naslov"
                        type="text"
                        fullWidth
                        variant="standard"
                        onChange={(e) => {
                            setNewAnnouncement({...newAnnouncement, title: e.target.value});
                        }}
                    />
                    <TextField
                        margin="dense"
                        label="Tekst"
                        type="text"
                        fullWidth
                        multiline
                        variant="standard"
                        onChange={(e) => {
                            setNewAnnouncement({...newAnnouncement, text: e.target.value});
                        }}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => {setDialogOpened(false)}}>Otkaži</Button>
                    <Button
                        onClick={async () => {
                            const res = await createNewAnnouncement(newAnnouncement);
                            const na = announcements;
                            na.push(res);
                            setAnnouncements(na);
                            setDialogOpened(false);
                            setSnackbarOpen(true);
                        }}
                    >KREIRAJ!
                    </Button>
                </DialogActions>
            </Dialog>

            <Snackbar
                open={snackbarOpen}
                autoHideDuration={6000}
                onClose={() => {setSnackbarOpen(false)}}
                message="Novo saopštenje kreirano"
                action={undefined}
            />
        </div>
    );
}

export default Announcements;