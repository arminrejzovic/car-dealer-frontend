import React from 'react';
import {Announcement} from "../../interfaces/Interfaces";
import Styles from "./AdBrief.module.css";
import {Card, Grid} from "@mui/material";
import LinkButton from "../common/LinkButton";
import {DeleteForever, DoneAll, Edit} from "@mui/icons-material";
import ButtonRegular from "../common/ButtonRegular";

interface AnnouncementBriefProps{
    announcement: Announcement;
}

function AnnouncementBrief(props: AnnouncementBriefProps) {
    return (
        <Card className={Styles.adBrief}>
            <Grid container spacing={2}>
                <Grid item xl={10}>
                    <div>
                        <h2>{props.announcement.title}</h2>
                        <h3>{props.announcement.dateCreated}</h3>
                    </div>
                    <p>{props.announcement.text}</p>
                </Grid>

                <Grid item xl={2} lg={2} md={3} sm={12} xs={12}>
                    <div style={{height:"100%", display: "grid", gap: "1rem"}}>
                        <ButtonRegular text={"MODIFIKUJ"} variant={"filled"} color={"blue"} icon={<Edit/>}/>
                        <ButtonRegular text={"PONIŠTI"} variant={"filled"} color={"red"} icon={<DeleteForever/>}/>
                    </div>
                </Grid>
            </Grid>
        </Card>
    );
}

export default AnnouncementBrief;