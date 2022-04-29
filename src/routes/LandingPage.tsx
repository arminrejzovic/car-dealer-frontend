import React from 'react';
import {Phone} from "@mui/icons-material";
import Styles from "./LandingPage.module.css"
import {Card, Container, Grid, Typography} from "@mui/material";

import eu from "../img/icons/eu.png";
import service from "../img/icons/servis.png";
import allInclusive from "../img/icons/all-inclusive.png";
import arrivedOnWheels from "../img/icons/arrived-on-wheels.png";

import scirocco from "../img/scirocco-cropped.png";
import touran from "../img/turan.png";
import LinkButton from "../components/common/LinkButton";
import ReviewCard from "../components/landing-page/ReviewCard";
import SalesForm from "../components/landing-page/SalesForm";
import Location from "../components/landing-page/Location";
import Footer from "../components/landing-page/Footer";


function LandingPage() {
    return (
        <div>
            <div className={Styles.hero}>
                <div className={Styles.overlay}>
                    <header style={{display: "flex", justifyContent: "space-between", color: "white", alignItems: "center"}}>
                        <h2 style={{fontSize: "2rem"}}><span style={{color: "#FA0000"}}>AUTO</span> HASANOVIĆ</h2>
                        <div style={{display: "flex", alignItems: "center"}}>
                            <Phone fontSize={"large"}/>
                            <div>
                                <h4 style={{fontSize: "1rem"}}>Pozovite nas na</h4>
                                <h4 style={{fontSize: "1rem"}}>+387 61 123 456</h4>
                            </div>
                        </div>
                    </header>

                    <div style={{maxWidth:"60ch", marginTop: "2rem"}}>
                        <h1 style={{marginBottom: "2rem", fontSize: "3rem"}}>NAJPOVOLJNIJI EUROPSKI POLOVNJACI</h1>
                        <p style={{marginBottom: "2rem"}}>S vama od 2019. godine, Auto Hasanović je uspješna firma koja se bavi uvozom prodajom i iznajmljivanjem automobila. Naša vozila uvozimo iz Holandije, uz posebnu pažnju na kvalitet. Sva naša vozila u BiH stižu na točkovima i za svako su plaćene sve dadžbine do registracije. Vozila pregledamo u ovlaštenom servisu prije prodaje. Garantujemo Vam kvalitetno i pouzdano vozilo!</p>
                        <LinkButton linkTo={"/prodaja"} text={"POGLEDAJ PONUDU"} variant={"filled"} color={"red"}/>
                    </div>
                </div>
            </div>
            <Container maxWidth={"xl"} style={{padding: "4rem"}}>
                <Card style={{padding: "4rem 10rem", marginTop: "-10%", textAlign: "center"}}>
                    <Grid container spacing={10}>
                        <Grid item xl={3} lg={3} md={6} sm={12} xs={12}>
                            <div>
                                <img src={eu}/>
                                <h3>UVOZ IZ EUROPSKE UNIJE</h3>
                            </div>
                        </Grid>

                        <Grid item xl={3} lg={3} md={6} sm={12} xs={12}>
                            <div>
                                <img src={service}/>
                                <h3>VOZILA PROVJERENA NA SERVISU</h3>
                            </div>
                        </Grid>

                        <Grid item xl={3} lg={3} md={6} sm={12} xs={12}>
                            <div>
                                <img src={allInclusive}/>
                                <h3>PLAĆENO SVE DO REGISTRACIJE</h3>
                            </div>
                        </Grid>

                        <Grid item xl={3} lg={3} md={6} sm={12} xs={12}>
                            <div>
                                <img src={arrivedOnWheels}/>
                                <h3>VOZILA STIGLA NA TOČKOVIMA</h3>
                            </div>
                        </Grid>
                    </Grid>
                </Card>

                <section style={{marginTop: "2rem"}}>
                    <h1 style={{fontSize: "2.375rem"}}>PRODAJA AUTOMOBILA</h1>
                    <Grid container spacing={2}>
                        <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
                            <SalesForm/>
                        </Grid>

                        <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
                            <img className={Styles.sectionImage} src={scirocco}/>
                        </Grid>
                    </Grid>
                </section>

                <section style={{marginTop: "2rem"}}>
                    <h1 style={{fontSize: "2.375rem"}}>IZNAJMLJIVANJE AUTOMOBILA</h1>
                    <Grid container spacing={2}>
                        <Grid item xl={6}>
                            <img className={Styles.sectionImage} src={touran}/>
                        </Grid>

                        <Grid item xl={6}>

                        </Grid>
                    </Grid>
                </section>

                <section>
                    <h1 style={{fontSize: "2.375rem"}}>PREKO <span>700</span> POZITIVNIH DOJMOVA NA OLX.BA</h1>
                    <Grid container spacing={2} style={{marginTop: "2rem", marginBottom: "2rem"}} justifyContent={"space-around"}>
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
                </section>

                <section>
                    <Location/>
                </section>
            </Container>
            <Footer/>
        </div>
    );
}

export default LandingPage;