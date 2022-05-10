import React from 'react';
import {DeleteForever, DoneAll, Edit} from "@mui/icons-material";
import {Card, Grid} from "@mui/material";
import ButtonRegular from "../common/ButtonRegular";
import LinkButton from "../common/LinkButton";
import Styles from "./AdBrief.module.css"
import {AdExpanded} from "../../interfaces/Interfaces";
import {deleteAdById} from "../../networking/AdServices";

export interface AdBriefProps{
    carID: number;
    thumbnailURL: string;
    adTitle: string;
    dateCreated: string;
    price: number;

    adListRef: AdExpanded[];
    adMutator: Function;
}

function AdBrief(props: AdBriefProps) {
    return (
        <Card className={Styles.adBrief}>
            <Grid container spacing={2}>
                <Grid item xl={3} lg={3} md={4} sm={12} xs={12}>
                    <img className={Styles.adBriefThumbnail} style={{height: "100%", width: "100%"}} src={props.thumbnailURL}/>
                </Grid>

                <Grid item xl={7} lg={7} md={5} sm={12} xs={12}>
                    <div style={{display: "flex", height:"100%", flexDirection:"column", justifyContent: "space-between"}}>
                        <div>
                            <h3>{props.adTitle}</h3>
                            <h4 style={{color: "var(--light-text)", fontWeight: "normal"}}>{props.dateCreated}</h4>
                        </div>
                        <div>
                            <h3>{props.price} KM</h3>
                        </div>
                    </div>
                </Grid>

                <Grid item xl={2} lg={2} md={3} sm={12} xs={12}>
                    <div style={{height:"100%", display: "grid", gap: "1rem"}}>
                        <LinkButton linkTo={`/admin/${props.carID}`} text={"MODIFIKUJ"} variant={"filled"} color={"blue"} icon={<Edit/>}/>
                        <ButtonRegular text={"PRODATO"} variant={"filled"} color={"green"} icon={<DoneAll/>}/>
                        <ButtonRegular
                            text={"PONIŠTI"}
                            variant={"filled"}
                            color={"red"}
                            icon={<DeleteForever/>}
                            onClick={async () => {
                                await deleteAdById(props.carID);
                                const temp = props.adListRef.filter(ad => {
                                    return ad.id !== props.carID;
                                })
                                props.adMutator(temp);
                            }}
                        />
                    </div>
                </Grid>
            </Grid>
        </Card>
    );
}

export default AdBrief;