import React from 'react';
import {Link} from "react-router-dom";
import {Card, Grid} from "@mui/material";
import Styles from "./AdCard.module.css";

interface AdCardProps{
    carID: number;
    thumbnailURL: string;
    adTitle: string;
    yearBuilt: number;
    transmission: string;
    mileage: number;
    horsepower: number;
    price: number;
}

function AdCard(props: AdCardProps) {
    return (
        <Link to={`/cars?id=${props.carID}`} style={{textDecoration: "none"}}>
            <Card className={Styles.adCard} style={{borderRadius: "10px"}}>
                <img src={props.thumbnailURL} style={{aspectRatio:"16/9"}}/>
                <div style={{padding: "1rem"}}>
                    <h3>{props.adTitle}</h3>
                    <Grid container spacing={1} style={{textAlign: "center", textDecoration: "none", fontWeight: "normal"}}>
                        <Grid item xl={6} lg={6} md={6} sm={6} xs={6}>
                            <h5>{props.yearBuilt}. godište</h5>
                        </Grid>
                        <Grid item xl={6} lg={6} md={6} sm={6} xs={6}>
                            <h5>{props.transmission}</h5>
                        </Grid>
                        <Grid item xl={6} lg={6} md={6} sm={6} xs={6}>
                            <h5>{props.mileage} km</h5>
                        </Grid>
                        <Grid item xl={6} lg={6} md={6} sm={6} xs={6}>
                            <h5>{props.horsepower} KS</h5>
                        </Grid>
                    </Grid>
                    <h3 style={{width: "100%", textAlign: "end", color: "var(--light-red)"}}>{props.price} KM</h3>
                </div>
            </Card>
        </Link>
    );
}

export default AdCard;