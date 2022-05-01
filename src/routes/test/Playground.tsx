import React, {useEffect, useState} from 'react';
import ButtonRegular from "../../components/common/ButtonRegular";
import LinkButton from "../../components/common/LinkButton";
import {DeleteForever, DoneAll, Edit} from "@mui/icons-material";
import ReviewCard from "../../components/landing-page/ReviewCard";
import {Grid} from "@mui/material";
import AdCard from "../../components/app/AdCard";
import AdBrief from "../../components/admin-panel/AdBrief";
import OfferBrief from "../../components/admin-panel/OfferBrief";
import Gallery from "../../components/common/Gallery";
import {fetchAllAds} from "../../networking/AdServices";

interface Ad{
    "id": number;
    "title": string;
    "manufacturerId": number;
    "modelId": number;
    "price": number;
    "year": number;
    "mileage": number;
    "volume": number;
    "horsepower": number;
    "car_typeId": number;
    "fuel_typeId": number;
    "drive_typeId": number;
    "transmission": string;
    "availableForRent": boolean;
    "lowestPrice": number;
    "thumbnailUrl": string;
    "firebaseFolderUrl": string;
    "manufacturer": Manufacturer;
    "model": Model;
    "car_type": SimpleType;
    "fuel_type": SimpleType;
    "drive_type": SimpleType;
}

interface Manufacturer{
    "id": number;
    "name": string;
    "countryId": number;
}

interface Model{
    "id": number;
    "name": string;
    "manufacturerId": number;
}

interface SimpleType{
    id: number;
    type: string;
}

function Playground() {

    const [ads, setAds] = useState<Ad[]>([]);

    useEffect(() => {
        getAds();
    })

    async function getAds(){
        const res = await fetchAllAds();
        setAds(res);
    }

    return (
        <div style={{padding: "2rem"}}>
            <ButtonRegular text={"PRETRAŽI"} variant={"filled"} color={"red"}/>
            <ButtonRegular text={"PRETRAŽI"} variant={"filled"} color={"green"}/>
            <ButtonRegular text={"PRETRAŽI"} variant={"filled"} color={"blue"}/>
                <br/>
                <br/>

            <Grid container spacing={2} style={{padding: "1rem", marginBottom: "2rem"}}>
                <Grid item xl={3} lg={3} md={4} sm={6} xs={12}>
                    <AdCard
                        carID={1}
                        thumbnailURL={"https://s9.pik.ba/galerija/2021-10/21/03/slika-502636-617171f2463a1-velika.jpg"}
                        adTitle={"BMW 320 D F30"}
                        yearBuilt={2015}
                        transmission={"Manuelni"}
                        mileage={170000}
                        horsepower={163}
                        price={29950}
                    />
                </Grid>
                {
                    ads.map((ad) => {
                        return (
                            <Grid item xl={3} lg={3} md={4} sm={6} xs={12}>
                                <AdCard
                                    carID={ad.id}
                                    thumbnailURL={ad.thumbnailUrl}
                                    adTitle={ad.title}
                                    yearBuilt={ad.year}
                                    transmission={ad.transmission}
                                    mileage={ad.mileage}
                                    horsepower={ad.horsepower}
                                    price={ad.price}
                                />
                            </Grid>
                        )
                    })
                }
            </Grid>

            <Grid container spacing={2} style={{padding: "1rem", marginBottom: "2rem"}}>
                <Grid item xl={12} lg={12} md={12} sm={6} xs={12}>
                    <AdBrief
                        carID={1}
                        thumbnailURL={"https://s9.pik.ba/galerija/2021-10/21/03/slika-502636-617171f2463a1-velika.jpg"}
                        adTitle={"BMW 320 D F30"}
                        dateCreated={"25.08.2021."}
                        price={29950}
                    />
                </Grid>

                <Grid item xl={12} lg={12} md={12} sm={6} xs={12}>
                    <AdBrief
                        carID={1}
                        thumbnailURL={"https://s9.pik.ba/galerija/2022-02/08/11/slika-502636-6202455fc7f78-velika.jpg"}
                        adTitle={"BMW 320 D F30"}
                        dateCreated={"25.08.2021."}
                        price={29950}
                    />
                </Grid>

                <Grid item xl={12} lg={12} md={12} sm={6} xs={12}>
                    <AdBrief
                        carID={1}
                        thumbnailURL={"https://s9.pik.ba/galerija/2021-09/04/06/slika-502636-6133a42d9d834-velika.jpg"}
                        adTitle={"BMW 320 D F30"}
                        dateCreated={"25.08.2021."}
                        price={29950}
                    />
                </Grid>

                <Grid item xl={12} lg={12} md={12} sm={6} xs={12}>
                    <AdBrief
                        carID={1}
                        thumbnailURL={"https://s9.pik.ba/galerija/2022-04/11/08/slika-502636-625474c1c8e91-velika.jpg"}
                        adTitle={"BMW 320 D F30"}
                        dateCreated={"25.08.2021."}
                        price={29950}
                    />
                </Grid>

                <Grid item xl={12} lg={12} md={12} sm={6} xs={12}>
                    <AdBrief
                        carID={1}
                        thumbnailURL={"https://s9.pik.ba/galerija/2022-03/09/02/slika-502636-6228b0050db99-velika.jpg"}
                        adTitle={"BMW 320 D F30"}
                        dateCreated={"25.08.2021."}
                        price={29950}
                    />
                </Grid>
            </Grid>

            <Grid container spacing={2} style={{padding: "1rem", marginBottom: "2rem"}}>
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
            <Grid container spacing={2}>
                <Grid item xl={5}>
                    <Gallery/>
                </Grid>
            </Grid>

        </div>
    );
}

export default Playground;