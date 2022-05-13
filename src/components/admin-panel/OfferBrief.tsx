import React from 'react';
import {AdBriefProps} from "./AdBrief";
import {Card, Grid} from "@mui/material";
import Styles from "./AdBrief.module.css";
import LinkButton from "../common/LinkButton";
import {AccountCircle, DeleteForever, DoneAll, Edit} from "@mui/icons-material";
import ButtonRegular from "../common/ButtonRegular";

interface OfferBriefProps extends AdBriefProps{
    username: string;
    offer: number;
}

function OfferBrief(props: OfferBriefProps) {
    return (
        <Card className={Styles.adBrief}>
            <Grid container spacing={2}>
                <Grid item xl={3} lg={3} md={4} sm={12} xs={12}>
                    <img style={{height: "100%", width: "100%"}} src={props.thumbnail}/>
                </Grid>

                <Grid item xl={4.5} lg={4.5} md={5} sm={6} xs={12}>
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

                <Grid item xl={4.5} lg={4.5} md={3} sm={6} xs={12}>
                    <div style={{display: "flex", height:"100%", flexDirection:"column", justifyContent: "space-between", gap:"1rem"}}>
                        <div>
                            <div style={{display:"flex", alignItems: "center"}}>
                                <AccountCircle fontSize={"large"}/>
                                <h3>{props.username}</h3>
                            </div>
                            <h3>Ponuda - <span style={{color: "var(--light-red)"}}>{props.offer}</span> KM</h3>
                        </div>
                        <div style={{display:"flex", gap: "1rem"}}>
                            <ButtonRegular text={"PRIHVATI"} variant={"filled"} color={"green"} icon={<DoneAll/>}/>
                            <ButtonRegular text={"ODBIJ"} variant={"filled"} color={"red"} icon={<DeleteForever/>}/>
                        </div>
                    </div>
                </Grid>
            </Grid>
        </Card>
    );
}

export default OfferBrief;