import React, {useEffect, useState} from 'react';
import {InputAdornment, MenuItem, OutlinedInput, Select, SelectChangeEvent, TextField} from "@mui/material";
import LinkButton from "../common/LinkButton";
import {ReactSearchAutocomplete} from "react-search-autocomplete";
import {fetchAllModels} from "../../networking/DataServices";

function SalesForm() {
    const [query, setQuery] = useState("");
    const [manufacturerID, setManufacturerID] = useState("0");
    const [carType, setCarType] = useState("0");
    const [priceUpto, setPriceUpto] = useState("0");

    const [manufacturers, setManufacturers] = useState<any[]>([]);
    const [models, setModels] = useState<any[]>([]);

    useEffect(() => {
        getModels();
    },[]);

    function handleOnSearch(){
        console.log("SEARCH");
    }

    function handleOnHover(){

    }

    function handleOnSelect(){

    }

    function handleOnFocus(){

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
                styling={{borderRadius:"0", zIndex:1000}}
            />

            
        </div>
    );
}

export default SalesForm;
