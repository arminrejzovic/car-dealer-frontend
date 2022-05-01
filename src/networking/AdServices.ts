interface Ad{
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
}

export async function fetchAllAds(){
    const res = await fetch("http://localhost:5000/ads?_expand=manufacturer&_expand=model&_expand=car_type&_expand=fuel_type&_expand=drive_type");
    if(res.ok){
        return res.json();
    }
    else {
        return {error: "Pretraga nije uspjela", status: res.status};
    }
}

export async function fetchAdById(id: number){
    const res = await fetch(`http://localhost:5000/ads/${id}?_expand=manufacturer&_expand=model&_expand=car_type&_expand=fuel_type&_expand=drive_type`);
    if(res.ok){
        return res.json();
    }
    else {
        return {error: "Pretraga nije uspjela", status: res.status};
    }
}

export async function deleteAdById(id: number){
    const res = await fetch(`http://localhost:5000/ads/${id}`, {method: "DELETE"});
    if(res.ok){
        return res.json();
    }
    else {
        return {error: "Brisanje oglasa nije uspjelo", status: res.status};
    }
}

export async function createNewAd(ad: Ad){
    const res = await fetch(`http://localhost:5000/ads`,
        {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(ad)
        }
    );
    if(res.ok){
        return res.json();
    }
    else {
        return {error: "Kreiranje novog oglasa nije uspjelo", status: res.status};
    }
}

interface Changes{
    "title"?: string;
    "manufacturerId"?: number;
    "modelId"?: number;
    "price"?: number;
    "year"?: number;
    "mileage"?: number;
    "volume"?: number;
    "horsepower"?: number;
    "car_typeId"?: number;
    "fuel_typeId"?: number;
    "drive_typeId"?: number;
    "transmission"?: string;
    "availableForRent"?: boolean;
    "lowestPrice"?: number;
    "thumbnailUrl"?: string;
}

export async function updateAd(id: number, changes: Changes){
    const current = await fetchAdById(id);
    const updatedAd = {...current, ...changes};

    const res = await fetch(`http://localhost:5000/ads/${id}`,
        {
            method: "PUT",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(updatedAd)
        }
    );

    if(res.ok){
        return res.json();
    }
    else {
        return {error: "Ažuriranje oglasa nije uspjelo", status: res.status};
    }
}