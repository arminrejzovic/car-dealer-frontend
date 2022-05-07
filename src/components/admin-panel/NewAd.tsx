import React, {useState} from 'react';
import ImageUploader from "./ImageUploader";

function NewAd() {
    const [encodedImages, setEncodedImages] = useState<any[]>([]);
    return (
        <div style={{display: "grid", gap: "2rem", padding: "3rem"}}>
            <h1>NOVI OGLAS</h1>
            <h3>1. Slike</h3>
            <ImageUploader encodedImages={encodedImages} encodedImagesMutator={setEncodedImages}/>
        </div>
    );
}

export default NewAd;