import React, {useEffect, useState} from 'react';
import ButtonRegular from "../common/ButtonRegular";
import {Add} from "@mui/icons-material";
import {ReactSearchAutocomplete} from "react-search-autocomplete";
import {Grid} from "@mui/material";
import AdBrief from "./AdBrief";
import {fetchAllAds} from "../../networking/AdServices";
import {Ad} from "../../interfaces/Interfaces";

function Oglasi() {
    const [ads, setAds] = useState<Ad[]>([]);
    const [results, setResults] = useState<Ad[]>([]);

    async function getAds(){
        const res = await fetchAllAds();
        setAds(res);
        setResults(res);
    }

    useEffect(() => {
        getAds();
    }, []);

    return (
        <div style={{padding: "3rem", display: "grid", gap: "3rem"}}>
            <Grid container spacing={2}>
                <Grid item xl={2} lg={2} md={3} sm={4} xs={5.5}>
                    <h2 style={{fontSize:"2rem"}}>OGLASI</h2>
                </Grid>
                <Grid item xl={8} lg={8} md={6} sm={4} xs={0}/>
                <Grid item xl={2} lg={2} md={3} sm={4} xs={6}>
                    <ButtonRegular text={"NOVI OGLAS"} variant={"filled"} color={"red"} icon={<Add/>}/>
                </Grid>
            </Grid>

            <ReactSearchAutocomplete
                items={[]}
                onSearch={(keyword)=>{
                    setResults(ads.filter((ad) => {
                        return ad.title.toLowerCase().includes(keyword.toLowerCase());
                    }))
                }}
                onHover={()=>{}}
                onSelect={()=>{}}
                onFocus={()=>{}}
                formatResult={()=>{}}
                placeholder={"Pretraži oglase"}
                styling={{borderRadius:"0", zIndex:1000}}
            />

            <Grid container spacing={2}>
                {
                    results.map((item) => {
                        return (
                            <Grid item xl={12} lg={12} md={12} sm={6} xs={12}>
                                <AdBrief
                                    carID={item.id}
                                    thumbnailURL={item.thumbnailUrl}
                                    adTitle={item.title}
                                    dateCreated={item.dateCreated}
                                    price={item.price}
                                />
                            </Grid>
                        );
                    })
                }
            </Grid>
        </div>
    );
}

export default Oglasi;