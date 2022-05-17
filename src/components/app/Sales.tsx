import React, {useEffect, useState} from 'react';
import {useLocation} from "react-router-dom";
import {AdExpanded} from "../../interfaces/Interfaces";
import {ReactSearchAutocomplete} from "react-search-autocomplete";
import {Grid} from "@mui/material";
import AdBrief from "../admin-panel/AdBrief";
import AdCard from "./AdCard";
import {fetchAllAds} from "../../networking/AdServices";

function Sales() {
    const location = useLocation();
    const [allAds, setAllAds] = useState<AdExpanded[]>([]);
    const [results, setResults] = useState<AdExpanded[]>([]);

    const [query, setQuery] = useState("");

    useEffect(() => {
        getAds();
    }, []);

    async function getAds() {
        const res = await fetchAllAds();
        setAllAds(res);
        setResults(res);
    }

    function filter(query: string) {
        setResults(allAds.filter((ad) => {
            return ad.title.toLowerCase().includes(query)
        }));
    }

    return (
        <div style={{padding: "3rem", display: "grid", gap: "3rem"}}>
            <ReactSearchAutocomplete
                items={[]}
                onSearch={(keyword) => {
                    filter(keyword.toLowerCase());
                }}
                placeholder={"Pretraži oglase"}
                styling={{borderRadius: "0", zIndex: 1000}}
            />

            <Grid container spacing={4}>
                {
                    results.length > 0 ? (
                            results.map((item) => {return (
                                <Grid item xl={3} lg={3} md={4} sm={6} xs={12}>
                                    <AdCard
                                        carID={item.id}
                                        thumbnailURL={item.images[0].src64}
                                        adTitle={item.title}
                                        yearBuilt={item.year}
                                        transmission={item.transmission}
                                        mileage={item.mileage}
                                        horsepower={item.horsepower}
                                        price={item.price}
                                    />
                                </Grid>
                            );
                            })
                        )
                    : (
                        <h1>NO RESULTS</h1>
                    )
                }
            </Grid>
        </div>
    );
}

export default Sales;