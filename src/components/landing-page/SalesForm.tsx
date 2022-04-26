import React, {useEffect, useState} from 'react';
import {InputAdornment, MenuItem, OutlinedInput, TextField} from "@mui/material";
import LinkButton from "../common/LinkButton";

function SalesForm() {
    const [query, setQuery] = useState("");
    const [manufacturerID, setManufacturerID] = useState(0);
    const [carType, setCarType] = useState(0);
    const [priceUpto, setPriceUpto] = useState("0");

    const [manufacturers, setManufacturers] = useState<any[]>([]);

    useEffect(() => {
        setManufacturers([
            {value: 1, label: "Audi"},
            {value: 2, label: "BMW"},
            {value: 3, label: "Mercedes"},
            {value: 4, label: "Škoda"},
            {value: 5, label: "Volkswagen"},
        ])
    },[]);

    return (
        <div style={{width: "100%"}}>
            hello
        </div>
    );
}

export default SalesForm;
