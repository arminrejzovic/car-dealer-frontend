import React from 'react';
import {Grid} from "@mui/material";
import Gallery from "../components/common/Gallery";

interface Car{

}

function CarForSale() {
    return (
        <div>
            <Grid container spacing={2}>
                <Grid item xl={6} sm={12} xs={12}>
                    <div>
                        <Gallery/>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}

export default CarForSale;
