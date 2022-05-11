import React, {useRef} from 'react';
import {Image} from "../../interfaces/Interfaces";
import {Grid, Tooltip} from "@mui/material";
import ImageUploadPreview from "../common/ImageUploadPreview";
import {AddCircleOutline} from "@mui/icons-material";
import {convertToBase64, deleteImageById} from "../../networking/ImageServices";

interface ImageEditorProps{
    existingImages: Image[];
    newImages: string[];
    existingImagesMutator: Function;
    newImagesMutator: Function;
    adId: number;
}

function ImageEditor(props: ImageEditorProps) {
    const hiddenInputRef = useRef<HTMLInputElement>(null);

    async function uploadImages(e: any){
        const temp = [...props.newImages];
        for(const file of e.target.files){
            const file64 = await convertToBase64(file);
            temp.push(file64);
        }
        props.newImagesMutator(temp);
    }

    return (
        <div>
            <input type={"file"} accept={"image/jpeg, image/png"} multiple onChange={(e)=>{uploadImages(e)}}/>

            <Grid container spacing={2}>
                {
                    props.existingImages.map((img) => {
                        return (
                            <Grid item xl={2}>
                                <ImageUploadPreview src64={img.src64} onRemove={async () => {
                                    await deleteImageById(props.adId);
                                    alert("Image deleted");
                                    let temp = props.existingImages.filter((item) => item.id !== img.id);
                                    props.existingImagesMutator(temp);
                                }}/>
                            </Grid>
                        )
                    })
                }
                {
                    props.newImages.map((img) => {
                        return (
                            <Grid item xl={2}>
                                <ImageUploadPreview src64={img} onRemove={() => {
                                    let temp = props.newImages.filter((item) => item !== img);
                                    props.newImagesMutator(temp);
                                }}/>
                            </Grid>
                        )
                    })
                }
                <Grid item xl={2}>
                    {
                        props.existingImages.length > 0 && (
                            <div style={{display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "#fafafaaa", height: "100%"}}>
                                <input
                                    ref={hiddenInputRef}
                                    type={"file"}
                                    accept={"image/jpeg, image/png"}
                                    multiple style={{display: "none"}}
                                    onChange={(e) => {
                                        uploadImages(e);
                                    }}
                                />
                                <Tooltip title={"Dodaj slike"}>
                                    <AddCircleOutline fontSize={"large"} style={{color: "#fa0000"}} onClick={() => {
                                        hiddenInputRef?.current?.click();
                                    }}/>
                                </Tooltip>
                            </div>
                        )
                    }
                </Grid>
            </Grid>
        </div>
    );
}

export default ImageEditor;