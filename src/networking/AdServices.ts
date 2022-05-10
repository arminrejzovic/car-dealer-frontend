import {Ad} from "../interfaces/Interfaces";

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
    const res = await fetch(`http://localhost:5000/ads/${id}?_expand=manufacturer&_expand=model&_expand=car_type&_expand=fuel_type&_expand=drive_type&_embed=images`);
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

export async function updateAd(newData: Ad, id: number){
    //const current = await fetchAdById(id);
    //const updatedAd = {...current, ...changes};

    const res = await fetch(`http://localhost:5000/ads/${id}`,
        {
            method: "PUT",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(newData)
        }
    );

    if(res.ok){
        return res.json();
    }
    else {
        return {error: "Ažuriranje oglasa nije uspjelo", status: res.status};
    }
}

export function getDummyAd():Ad{
    const today = new Date();
    return {
        color: "Bijela",
        description: "",
        doors: "2/3",
        emissionStandard: "Euro 1",
        gears: "3+R",
        lights: "Ostalo",
        parkingCamera: "Nema",
        rimSize: 0,
        tyres: "Ljetne",
        title: "",
        manufacturerId: 1,
        modelId: 1,
        price: 0,
        year: 2022,
        mileage: 0,
        volume: 1,
        horsepower: 0,
        car_typeId: 1,
        fuel_typeId: 1,
        drive_typeId: 1,
        transmission: "Manuelni",
        availableForRent: false,
        lowestPrice: 0,
        thumbnailUrl: "",
        firebaseFolderUrl:"",
        registrationUntil: "2023-01",
        dateCreated: `${today.getDay()}.${today.getMonth()}.${today.getFullYear()}.`,
        images:[{id:0, src64: "", adId: 0}]
    };
}