import React, {useEffect, useRef, useState} from 'react';
import {fetchAllModels} from "../../networking/DataServices";
import {ReactSearchAutocomplete} from "react-search-autocomplete";
import {Divider, Grid, InputAdornment, OutlinedInput} from "@mui/material";
import Styles from "./SalesForm.module.css";
import ButtonRegular from "../common/ButtonRegular";
import LinkButton from "../common/LinkButton";

function RentForm() {
    const [query, setQuery] = useState("");
    const [dateFrom, setDateFrom] = useState("");
    const [dateTo, setDateTo] = useState("");
    const [priceFrom, setPriceFrom] = useState("");
    const [priceUpto, setPriceUpto] = useState("");
    const [today, setToday] = useState("");

    const [models, setModels] = useState<any[]>([]);

    useEffect(() => {
        getModels();
        const t = new Date();
        setToday(t.toISOString().slice(0, 10));
    },[]);

    function handleOnSearch(){}

    function handleOnHover(){}

    function handleOnFocus(){}

    function handleOnSelect(item: {id:number, name:string;}){
        setQuery(item.name);
    }

    async function getModels(){
        const res = await fetchAllModels();
        const models = res.map((model: any) => {
            return {
                id: model.id,
                name: `${model.manufacturer.name} ${model.name}`
            }
        })
        setModels(models);
    }

    const formatResult = (item: any) => {
        return (
            <>
                <span style={{ display: 'block', textAlign: 'left' }}>{item.name}</span>
            </>
        )
    }

    return (
        <div style={{width: "100%"}}>
            <ReactSearchAutocomplete
                items={models}
                onSearch={handleOnSearch}
                onHover={handleOnHover}
                onSelect={handleOnSelect}
                onFocus={handleOnFocus}
                formatResult={formatResult}
                placeholder={"Pretraži oglase"}
                styling={{borderRadius:"0", zIndex:1000}}
            />

            <Divider style={{marginTop: "1rem", marginBottom: "1rem"}}>ili</Divider>

            <Grid container spacing={2}>
                <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                    <h3>Cijena po danu</h3>
                </Grid>
                <Grid item xl={6} lg={6} md={6} sm={6} xs={12}>
                    <OutlinedInput
                        id="cijena-od"
                        className={Styles.input}
                        placeholder={"Cijena od"}
                        value={priceFrom}
                        type={"number"}
                        onChange={(e) => {
                            setPriceFrom(e.target.value);
                        }}
                        endAdornment={<InputAdornment position="end">BAM</InputAdornment>}
                        inputProps={{
                            'aria-label': 'cijena od',
                            'min': '0',
                            step: '100'
                        }}
                    />
                </Grid>
                <Grid item xl={6} lg={6} md={6} sm={6} xs={12}>
                    <OutlinedInput
                        id="cijena-do"
                        className={Styles.input}
                        placeholder={"Cijena do"}
                        value={priceUpto}
                        type={"number"}
                        onChange={(e) => {
                            setPriceUpto(e.target.value);
                        }}
                        endAdornment={<InputAdornment position="end">BAM</InputAdornment>}
                        inputProps={{
                            'aria-label': 'cijena do',
                            'min': priceFrom,
                            step: '100'
                        }}
                    />
                </Grid>
            </Grid>


            <Grid container spacing={2} style={{marginTop: "1rem", marginBottom: "2rem"}}>
                <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                    <h3>Termin</h3>
                </Grid>
                <Grid item xl={6} lg={6} md={6} sm={6} xs={12}>
                    <OutlinedInput
                        id="termin-od"
                        className={Styles.input}
                        placeholder={"Od"}
                        value={dateFrom}
                        type={"date"}
                        onChange={(e) => {
                            setDateFrom(e.target.value);
                        }}
                        aria-describedby="outlined-weight-helper-text"
                        inputProps={{
                            'aria-label': 'Datum od',
                            'min': `${today}`,
                            'max': '2024-01-01'
                        }}
                    />
                </Grid>
                <Grid item xl={6} lg={6} md={6} sm={6} xs={12}>
                    <OutlinedInput
                        id="datum-do"
                        className={Styles.input}
                        placeholder={"Do"}
                        value={dateTo}
                        type={"date"}
                        onChange={(e) => {
                            setDateTo(e.target.value);
                        }}
                        aria-describedby="outlined-weight-helper-text"
                        inputProps={{
                            'aria-label': 'Datum do',
                            'min': dateFrom
                        }}
                    />
                </Grid>
            </Grid>
            <Grid container spacing={2}>
                <Grid item xl={5} lg={5} md={5} sm={5} xs={12}>
                    <ButtonRegular text={"PRETRAŽI"} variant={"filled"} color={"red"}/>
                </Grid>
                <Grid item xl={5} lg={5} md={5} sm={5} xs={12}>
                    <LinkButton linkTo={"/iznajmljivanje/pretraga"} text={"DETALJNA PRETRAGA"} variant={"outlined"} color={"red"}/>
                </Grid>
            </Grid>
        </div>
    );
}

export default RentForm;