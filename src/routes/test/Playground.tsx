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
import {createNewAd, fetchAdById, fetchAllAds, updateAd} from "../../networking/AdServices";

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
    const [ad, setAd] = useState<Ad>();

    useEffect(() => {
        getAds();
        getAdForDemo();
    },[])

    async function getAds(){
        const res = await fetchAllAds();
        setAds(res);
    }

    async function getAdForDemo(){
        const res = await fetchAdById(3);
        setAd(res);
    }

    return (
        <div style={{padding: "2rem"}}>
            <ButtonRegular text={"PRETRAŽI"} variant={"filled"} color={"red"}/>
            <ButtonRegular text={"PRETRAŽI"} variant={"filled"} color={"green"}/>
            <ButtonRegular text={"PRETRAŽI"} variant={"filled"} color={"blue"}/>
                <br/>
                <br/>

            <Grid container spacing={2} style={{padding: "1rem", marginBottom: "2rem"}}>
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

            <div>
                <img src={ad?.thumbnailUrl}/>
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
                    }}/>

                <ButtonRegular
                    text={"KREIRAJ DUMMY OGLAS"}
                    variant={"filled"}
                    color={"green"}
                    onClick={async () => {
                        const res = await createNewAd({
                            title: "Alfa Romeo 159 Test",
                            manufacturerId: 9,
                            modelId: 104,
                            price: 25000,
                            year: 2011,
                            mileage: 199000,
                            volume: 1.5,
                            horsepower: 110,
                            car_typeId: 1,
                            fuel_typeId: 2,
                            drive_typeId: 1,
                            transmission: "Manuelni",
                            availableForRent: false,
                            lowestPrice: 24000,
                            thumbnailUrl: "data:image/jpeg;base64,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",
                            firebaseFolderUrl: ""
                        })
                        setAds([...ads, res]);
                    }}/>
            </div>

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