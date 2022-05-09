import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {Card, Grid, InputAdornment, makeStyles, OutlinedInput, TextField} from "@mui/material";
import {AdExpanded as Ad} from "../../interfaces/Interfaces";
import {fetchAdById} from "../../networking/AdServices";
import Gallery from "../common/Gallery";
import ButtonRegular from "../common/ButtonRegular";
import {Close, DoneAll} from "@mui/icons-material";

function Oglas() {
    const [ad, setAd] = useState<Ad>();
    const [newData, setNewData] = useState<Ad>();

    let params = useParams();

    async function getAd(id: number){
        const res = await fetchAdById(id);
        setAd(res);
        setNewData(res);
    }

    useEffect(()=>{
        const adID = params.id;
        getAd(+adID!!);
    }, []);

    return (
        <div style={{display: "grid", gap: "2rem", padding: "3rem"}}>
            <Grid container spacing={2}>
                <Grid item xl={6}>
                    <Gallery/>
                </Grid>
                <Grid item xl={6}>
                    <TextField
                        value={newData?.title || ''}
                        style={{width: "100%", marginBottom: "2rem"}}
                        onChange={(e) => {
                            setNewData({...newData!!, title: e.target.value});
                        }}
                        label={"Naslov"}
                        placeholder={""}
                    />
                    <Grid container spacing={2} justifyContent={"space-between"} style={{marginBottom: "2rem"}}>
                        <Grid item xl={4}>
                            <TextField
                                label={"Cijena"}
                                placeholder={""}
                                value={newData?.price || ''}
                                type={"number"}
                                onChange={(e) => {
                                    setNewData({...newData!!, price: +e.target.value});
                                }}
                                inputProps={{
                                    'aria-label': 'cijena od',
                                    'min': '0',
                                    step: '100'
                                }}
                                InputProps={{
                                    endAdornment: <InputAdornment position="end">BAM</InputAdornment>
                                }}
                            />
                        </Grid>
                        <Grid item xl={5} onClick={() => {setNewData({...newData!!, availableForRent: !newData?.availableForRent})}}>
                            {
                                newData?.availableForRent
                                    ? <ButtonRegular text={"DOSTUPAN ZA IZNAJMLJIVANJE"} variant={"filled"} color={"green"} icon={<DoneAll/>}/>
                                    : <ButtonRegular text={"NEDOSTUPAN ZA IZNAJMLJIVANJE"} variant={"filled"} color={"red"} icon={<Close/>}/>
                            }
                        </Grid>
                    </Grid>
                    <Grid container spacing={4}>
                        <Grid item xl={4}>
                            <Card>
                                <h5>Proizvođač</h5>
                                <h4>{ad?.manufacturer.name}</h4>
                            </Card>
                        </Grid>
                        <Grid item xl={4}>
                            <Card>
                                <h5>Model</h5>
                                <h4>{ad?.model.name}</h4>
                            </Card>
                        </Grid>
                        <Grid item xl={4}>
                            <Card>
                                <h5>Godište</h5>
                                <h4>{ad?.year}</h4>
                            </Card>
                        </Grid>
                        <Grid item xl={4}>
                            <Card>
                                <h5>Kilometraža</h5>
                                <h4>{ad?.mileage}</h4>
                            </Card>
                        </Grid>
                        <Grid item xl={4}>
                            <Card>
                                <h5>Gorivo</h5>
                                <h4>{ad?.fuel_type.type}</h4>
                            </Card>
                        </Grid>
                        <Grid item xl={4}>
                            <Card>
                                <h5>Transmisija</h5>
                                <h4>{ad?.transmission}</h4>
                            </Card>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
}

export default Oglas;