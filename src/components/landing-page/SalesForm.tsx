import React, {useEffect, useState} from 'react';
import {InputAdornment, MenuItem, OutlinedInput, Select, SelectChangeEvent, TextField} from "@mui/material";
import LinkButton from "../common/LinkButton";
import {ReactSearchAutocomplete} from "react-search-autocomplete";

function SalesForm() {
    const [query, setQuery] = useState("");
    const [manufacturerID, setManufacturerID] = useState("0");
    const [carType, setCarType] = useState("0");
    const [priceUpto, setPriceUpto] = useState("0");

    const [manufacturers, setManufacturers] = useState<any[]>([]);
    const [models, setModels] = useState<any[]>([]);

    useEffect(() => {
        setManufacturers([
            {value: 1, label: "Audi"},
            {value: 2, label: "BMW"},
            {value: 3, label: "Mercedes"},
            {value: 4, label: "Škoda"},
            {value: 5, label: "Volkswagen"},
        ]);
        setModels([
            {id: 1, name: "Audi A1"},
            {id: 2, name: "Audi A2"},
            {id: 3, name: "Audi A3"},
            {id: 4, name: "Audi A4"},
            {id: 5, name: "Audi A5"},
            {id: 6, name: "Audi A6"},
            {id: 7, name: "Audi A7"},
            {id: 8, name: "Audi A8"},
            {id: 9, name: "Audi Q2"},
            {id: 10, name: "Audi Q3"},
            {id: 11, name: "Audi Q3 Sportback"},
            {id: 12, name: "Audi Q5"},
            {id: 13, name: "Audi Q5 Sportback"},
            {id: 14, name: "Audi Q7"},
            {id: 15, name: "Audi Q8"},
            {id: 16, name: "BMW Serije 1"},
            {id: 17, name: "BMW Serije 2"},
            {id: 18, name: "BMW Serije 3"},
            {id: 19, name: "BMW Serije 4"},
            {id: 20, name: "BMW Serije 5"},
            {id: 21, name: "BMW X1"},
            {id: 22, name: "BMW X3"},
            {id: 23, name: "BMW X5"},
            {id: 24, name: "BMW X6"},
            {id: 25, name: "BMW X7"},
            {id: 26, name: "Mercedes A klasa"},
            {id: 26, name: "Mercedes C klasa"},
            {id: 27, name: "Mercedes E klasa"},
            {id: 28, name: "Mercedes S klasa"},
            {id: 29, name: "Mercedes S klasa"},
            {id: 30, name: "Mercedes CLA"},
            {id: 31, name: "Mercedes CLS"},
            {id: 32, name: "Škoda Fabia"},
            {id: 33, name: "Škoda Octavia"},
            {id: 34, name: "Škoda Scala"},
            {id: 35, name: "Škoda Superb"},
            {id: 36, name: "Škoda Enyaq"},
            {id: 37, name: "Škoda Rapid"},
            {id: 38, name: "Volkswagen Polo"},
            {id: 39, name: "Volkswagen Golf"},
            {id: 40, name: "Volkswagen Scirocco"},
            {id: 41, name: "Volkswagen Touran"},
            {id: 42, name: "Volkswagen Passat"},
            {id: 43, name: "Volkswagen Arteon"},
            {id: 44, name: "Volkswagen Tiguan"},
            {id: 45, name: "Volkswagen Touareg"}
        ])
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
