import React, {useState} from 'react';
import {Grid} from "@mui/material";
import Styles from "./Gallery.module.css"

function Gallery() {
    const [index, setIndex] = useState(0);
    const [activeImage, setActiveImage] = useState("https://s9.pik.ba/galerija/2022-02/12/05/slika-502636-6207e5f4103fd-velika.jpg");

    const imgs = [
        "https://s9.pik.ba/galerija/2022-02/12/05/slika-502636-6207e5f4103fd-velika.jpg",
        "https://s9.pik.ba/galerija/2021-10/19/05/slika-502636-616ee9ca471b8-velika.jpg",
        "https://s9.pik.ba/galerija/2021-10/21/03/slika-502636-617171fe4d9e0-velika.jpg",
        "https://s9.pik.ba/galerija/2021-10/21/03/slika-502636-6171723869260-velika.jpg",
        "https://s9.pik.ba/galerija/2022-02/12/05/slika-502636-6207e5e55c103-velika.jpg",
        "https://s9.pik.ba/galerija/2021-09/30/09/slika-502636-6155622040307-velika.jpg",
        "https://s9.pik.ba/galerija/2021-09/30/09/slika-502636-61556223ad68e-velika.jpg",
        "https://s9.pik.ba/galerija/2021-09/30/09/slika-502636-6155625118c40-velika.jpg",
        "https://s9.pik.ba/galerija/2021-09/30/09/slika-502636-615562886eae4-velika.jpg",
        "https://s9.pik.ba/galerija/2021-09/30/09/slika-502636-6155629a953ce-velika.jpg"
    ];

    function incrementIndex() {
        setActiveImage(imgs[index+2]);
        if(index !== imgs.length-2){
            setIndex(index+2);
        }
    }

    function decrementIndex(){
        setActiveImage(imgs[index]);
        if(index > 0){
            setIndex(index-2);
        }
    }

    function middle(){
        setActiveImage(imgs[index+1]);
    }
    return (
        <Grid container spacing={2}>
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                <img src={activeImage} style={{width: "100%"}}/>
            </Grid>
            <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
                <img
                    className={imgs[index] === activeImage ? Styles.active : Styles.inactive}
                    src={imgs[index]}
                    onClick={decrementIndex}
                />
            </Grid>
            <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
                {
                    imgs[index+1]
                        ? <img
                            className={imgs[index+1] === activeImage ? Styles.active : Styles.inactive}
                            src={imgs[index+1]}
                            onClick={middle}
                        />
                        : null
                }
            </Grid>
            <Grid item xl={4} lg={4} md={4} sm={4} xs={4}>
                {
                    imgs[index+2]
                        ? <img
                            className={imgs[index+2] === activeImage ? Styles.active : Styles.inactive}
                            src={imgs[index+2]}
                            onClick={incrementIndex}
                        />
                        : null
                }
            </Grid>
        </Grid>
    );
}

export default Gallery;