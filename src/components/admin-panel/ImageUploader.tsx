import React, {useRef, useState} from 'react';
import {Grid, Tooltip} from "@mui/material";
import ImageUploadPreview from "../common/ImageUploadPreview";
import {AddCircleOutline} from "@mui/icons-material";

function ImageUploader(props: any) {
    const [encodedImages, setEncodedImages] = useState<any[]>([]);
    const hiddenInputRef = useRef<HTMLInputElement>(null);

    async function convertToBase64(file:any){
        return new Promise<any>((resolve, reject) => {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file);

            fileReader.onload = () => {
                resolve(fileReader.result);
            }

            fileReader.onerror = (err) => {
                reject(err);
            }
        })
    }

    async function uploadImages(e: any){
        const temp = [...encodedImages];
        for(const file of e.target.files){
            const file64 = await convertToBase64(file);
            temp.push(file64);
        }
        setEncodedImages(temp);
    }

    return (
        <div>
            <input type={"file"} accept={"image/jpeg, image/png"} multiple onChange={(e)=>{uploadImages(e)}}/>

            <Grid container spacing={2}>
                {
                    encodedImages.map((img) => {
                        return (
                            <Grid item xl={2}>
                                <ImageUploadPreview src64={img} onRemove={() => {
                                    let temp = encodedImages.filter((item) => item !== img);
                                    setEncodedImages(temp);
                                }}/>
                            </Grid>
                        )
                    })
                }
                <Grid item xl={2}>
                    <div style={{display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "#fafafaaa", height: "100%"}}>
                        <input
                            ref={hiddenInputRef}
                            type={"file"}
                            accept={"image/jpeg, image/png"}
                            multiple style={{display: "none"}}
                            onChange={(e) => {
                                console.log("CHANGE", e);
                                uploadImages(e);
                            }}
                        />
                        <Tooltip title={"Dodaj slike"}>
                            <AddCircleOutline fontSize={"large"} style={{color: "#fa0000"}} onClick={() => {
                                hiddenInputRef?.current?.click();
                            }}/>
                        </Tooltip>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}

export default ImageUploader;