import React from 'react';
import ButtonRegular from "../../components/common/ButtonRegular";
import LinkButton from "../../components/common/LinkButton";
import {DeleteForever, DoneAll, Edit} from "@mui/icons-material";
import ReviewCard from "../../components/landing-page/ReviewCard";
import {Grid} from "@mui/material";
import AdCard from "../../components/app/AdCard";
import AdBrief from "../../components/admin-panel/AdBrief";
import OfferBrief from "../../components/admin-panel/OfferBrief";
import Gallery from "../../components/common/Gallery";

function Playground() {
    return (
        <div style={{padding: "2rem"}}>
            <p>Hello world</p>
            <ButtonRegular text={"PRETRAŽI"} variant={"filled"} color={"red"}/>
            <ButtonRegular text={"PRETRAŽI"} variant={"filled"} color={"green"}/>
            <ButtonRegular text={"PRETRAŽI"} variant={"filled"} color={"blue"}/>
                <br/>
                <br/>
            <ButtonRegular text={"PRETRAŽI"} variant={"outlined"} color={"red"}/>
            <ButtonRegular text={"PRETRAŽI"} variant={"outlined"} color={"green"}/>
            <ButtonRegular text={"PRETRAŽI"} variant={"outlined"} color={"blue"}/>
                <br/>
                <br/>
            <LinkButton text={"PRETRAŽI"} variant={"filled"} color={"red"} linkTo={"/"}/>
            <LinkButton text={"PRETRAŽI"} variant={"filled"} color={"green"} linkTo={"/"}/>
            <LinkButton text={"PRETRAŽI"} variant={"filled"} color={"blue"} linkTo={"/"}/>
                <br/>
                <br/>
            <LinkButton text={"PRETRAŽI"} variant={"outlined"} color={"red"} linkTo={"/"}/>
            <LinkButton text={"PRETRAŽI"} variant={"outlined"} color={"green"} linkTo={"/"}/>
            <LinkButton text={"PRETRAŽI"} variant={"outlined"} color={"blue"} linkTo={"/"}/>
                <br/>
                <br/>
            <ButtonRegular text={"PRETRAŽI"} variant={"outlined"} color={"red"} icon={<DeleteForever/>}/>
            <ButtonRegular text={"PRETRAŽI"} variant={"outlined"} color={"green"} icon={<DoneAll/>}/>
            <ButtonRegular text={"PRETRAŽI"} variant={"outlined"} color={"blue"} icon={<Edit/>}/>
                <br/>
                <br/>
            <ButtonRegular text={"PONIŠTI"} variant={"filled"} color={"red"} icon={<DeleteForever/>}/>
            <ButtonRegular text={"ZAVRŠI"} variant={"filled"} color={"green"} icon={<DoneAll/>}/>
            <ButtonRegular text={"PROMIJENI"} variant={"filled"} color={"blue"} icon={<Edit/>}/>


            <Grid container spacing={2} style={{padding: "1rem", marginBottom: "2rem"}} justifyContent={"space-around"}>
                <Grid item xl={4} lg={4} md={6} sm={6} xs={12}>
                    <ReviewCard
                        title={"VW GOLF 7 HIGHLINE"}
                        username={"Beneku"}
                        date={"28.02.2022"}
                        review={"U današnje vrijeme,kupovina polovnog i sigurnog automobila postala je pravi rizik kupovine. Kad je ovaj prodavac u pitanju,slobodno mogu reci da svako dosad kupljeno vozilo imalo uredan ispis servisne historije,vrhunski ocuvano stanje,dobre gume i ostale potrošne dijelove. I pored toga vlasnik opet dopušta sve provjere i to kako radnim tako i danima vikenda. Ja bih preporučio saradnju !"}
                    />
                </Grid>
                <Grid item xl={4} lg={4} md={6} sm={6} xs={12}>
                    <ReviewCard
                        title={"Peugeot 508 2.0 HDI"}
                        username={"Skender87"}
                        date={"09.12.2019."}
                        review={"Prodavač je za čistu 10ku..sve preporuke. Auta uredna, onako kako pise u oglasu i kako je na fotografijama prikazano izgleda i više od toga..vec 2. auto kupujem od njega...TOP TOP TOP.."}
                    />
                </Grid>
                <Grid item xl={4} lg={4} md={12} sm={12} xs={12}>
                    <ReviewCard
                        title={"ŠKODA SUPERB DSG 2018."}
                        username={"Rex5"}
                        date={"24.02.2022"}
                        review={"Sa vlasnikom dogovoren iznos za uplatu a nakon toga vozilo odvezeno u ovlašteni servis na pregled. Sve što je navedeno na oglasu i dokumentovano papirima potvrđeno je i na pregledu.Apsolutno preporučujem saradnju kako zbog komunikacije s vlasnikom tako i zbog stanja vozila koje sam kupio. Preporučio bih svakom ko želi siguran i mlad polovan auto."}
                    />
                </Grid>
            </Grid>

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

                <Grid item xl={3} lg={3} md={4} sm={6} xs={12}>
                    <AdCard
                        carID={1}
                        thumbnailURL={"https://s9.pik.ba/galerija/2022-02/08/11/slika-502636-6202455fc7f78-velika.jpg"}
                        adTitle={"BMW 320 D F30"}
                        yearBuilt={2015}
                        transmission={"Manuelni"}
                        mileage={170000}
                        horsepower={163}
                        price={29950}
                    />
                </Grid>

                <Grid item xl={3} lg={3} md={4} sm={6} xs={12}>
                    <AdCard
                        carID={1}
                        thumbnailURL={"https://s9.pik.ba/galerija/2022-04/11/08/slika-502636-625474c1c8e91-velika.jpg"}
                        adTitle={"VW GOLF 7 HIGHLINE 2018"}
                        yearBuilt={2018}
                        transmission={"Manuelni"}
                        mileage={170000}
                        horsepower={163}
                        price={29950}
                    />
                </Grid>

                <Grid item xl={3} lg={3} md={4} sm={6}>
                    <AdCard
                        carID={1}
                        thumbnailURL={"https://s9.pik.ba/galerija/2021-09/04/06/slika-502636-6133a42d9d834-velika.jpg"}
                        adTitle={"BMW 320 D F30"}
                        yearBuilt={2015}
                        transmission={"Manuelni"}
                        mileage={170000}
                        horsepower={163}
                        price={29950}
                    />
                </Grid>
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