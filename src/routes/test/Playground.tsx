import React, {useEffect, useState} from 'react';
import ButtonRegular from "../../components/common/ButtonRegular";
import {Grid} from "@mui/material";
import OfferBrief from "../../components/admin-panel/OfferBrief";
import {createNewAd, fetchAdById, updateAd} from "../../networking/AdServices";
import {AdExpanded as Ad} from "../../interfaces/Interfaces";


function Playground() {
    const [ad, setAd] = useState<Ad>();

    useEffect(() => {
        getAdForDemo();
    },[])

    async function getAdForDemo(){
        const res = await fetchAdById(3);
        setAd(res);
    }

    return (
        <div style={{padding: "2rem"}}>
            <div>
                <img src={ad?.thumbnailUrl} style={{height: "0rem"}}/>
                <h1>{ad?.title}</h1>
                <p>
                    {ad?.lowestPrice} to {ad?.price}
                </p>

                <ButtonRegular
                    text={"POVEĆAJ CIJENU"}
                    variant={"filled"}
                    color={"red"}
                    onClick={async () => {
                        // @ts-ignore
                        const res = await updateAd(3, {price: ad?.price+1000});
                        setAd(res);
                    }}
                />

            </div>

            {
                /*
                false && <Grid container spacing={2} style={{padding: "1rem", marginBottom: "2rem"}}>
                    <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                        <OfferBrief
                            carID={1}
                            thumbnailURL={"https://s9.pik.ba/galerija/2021-10/21/03/slika-502636-617171f2463a1-velika.jpg"}
                            adTitle={"BMW 320 D F30"}
                            dateCreated={"25.08.2021."}
                            price={29950}
                            username={"veldin_s"}
                            offer={28000}
                        />
                    </Grid>
                </Grid>
                 */
            }
        </div>
    );
}

export default Playground;