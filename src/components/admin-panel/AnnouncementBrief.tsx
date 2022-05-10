import React, {useEffect, useState} from 'react';
import {Announcement} from "../../interfaces/Interfaces";
import Styles from "./AdBrief.module.css";
import {Card, Grid, TextField} from "@mui/material";
import LinkButton from "../common/LinkButton";
import {DeleteForever, DoneAll, Edit} from "@mui/icons-material";
import ButtonRegular from "../common/ButtonRegular";
import {deleteAnnouncementById, updateAnnouncement} from "../../networking/AnnouncementServices";

interface AnnouncementBriefProps{
    announcement: Announcement;
    announcementMutator: Function;
    announcementListRef: Announcement[];
}

function AnnouncementBrief(props: AnnouncementBriefProps) {
    const [editMode, setEditMode] = useState(false);
    const [newData, setNewData] = useState<Announcement>({id:0, title: "", text: "", dateCreated: ""});

    useEffect(() => {
        setNewData({...props.announcement});
    }, []);

    return (
        <Card className={Styles.adBrief}>
            <Grid container spacing={2}>
                <Grid item xl={10} lg={10} md={9} sm={12} xs={12}>
                    <div style={{display: "flex", gap: "1rem", alignItems: "center", marginBottom: "2rem"}}>
                        {
                            editMode
                                ? <TextField fullWidth type={"text"} value={newData.title} onChange={(e) => {setNewData({...newData, title: e.target.value})}}/>
                                : <h2>{newData.title}</h2>
                        }
                        <h3 style={{color: "var(--light-text)"}}>{newData.dateCreated}</h3>
                    </div>
                    {
                        editMode
                            ? <TextField fullWidth multiline value={newData.text} onChange={(e) => setNewData({...newData, text: e.target.value})}/>
                            : <p style={{maxWidth: "75ch"}}>{newData    .text}</p>
                    }
                </Grid>

                <Grid item xl={2} lg={2} md={3} sm={12} xs={12}>
                    <div style={{height:"100%", display: "grid", gap: "1rem"}}>
                        {
                            editMode
                                ? <ButtonRegular
                                    text={"SAČUVAJ"}
                                    variant={"filled"}
                                    color={"green"}
                                    icon={<DoneAll/>}
                                    onClick={async () => {
                                        const res = await updateAnnouncement(newData);
                                        setNewData(res);
                                        setEditMode(false);
                                    }}
                                />
                                : <ButtonRegular
                                    text={"MODIFIKUJ"}
                                    variant={"filled"}
                                    color={"blue"}
                                    icon={<Edit/>}
                                    onClick={() => {
                                        setEditMode(true);
                                    }}
                                />
                        }

                        <ButtonRegular
                            text={"PONIŠTI"}
                            variant={"filled"}
                            color={"red"}
                            icon={<DeleteForever/>}
                            onClick={async () => {
                                await deleteAnnouncementById(props.announcement.id);
                                let temp = props.announcementListRef.filter((item) => item.id !== props.announcement.id);
                                props.announcementMutator(temp);
                            }}
                        />
                    </div>
                </Grid>
            </Grid>
        </Card>
    );
}

export default AnnouncementBrief;