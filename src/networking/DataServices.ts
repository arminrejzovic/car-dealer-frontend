export async function fetchAllManufacturers(){
    const res = await fetch("http://localhost:5000/manufacturers");
    if(res.ok){
        return res.json();
    }
    else {
        return {error: "Pretraga nije uspjela", status: res.status};
    }
}

export async function fetchManufacturerById(id: number){
    const res = await fetch(`http://localhost:5000/manufacturers/${id}`);
    if(res.ok){
        return res.json();
    }
    else {
        return {error: "Pretraga nije uspjela", status: res.status};
    }
}

export async function fetchAllModels(){
    const res = await fetch("http://localhost:5000/models?_expand=manufacturer");
    if(res.ok){
        return res.json();
    }
    else {
        return {error: "Pretraga nije uspjela", status: res.status};
    }
}

export async function fetchModelById(id: number){
    const res = await fetch(`http://localhost:5000/models/${id}/?_expand=manufacturer`);
    if(res.ok){
        return res.json();
    }
    else {
        return {error: "Pretraga nije uspjela", status: res.status};
    }
}

export async function fetchManufacturersByCountry(countryId: number){
    const res = await fetch(`http://localhost:5000/countries/${countryId}?_embed=manufacturers`);
    if(res.ok){
        return res.json();
    }
    else {
        return {error: "Pretraga nije uspjela", status: res.status};
    }
}

export async function fetchAllCarTypes(){
    const res = await fetch(`http://localhost:5000/car_types`);
    if(res.ok){
        return res.json();
    }
    else {
        return {error: "Pretraga nije uspjela", status: res.status};
    }
}

export async function fetchAllFuelTypes(){
    const res = await fetch(`http://localhost:5000/fuel_types`);
    if(res.ok){
        return res.json();
    }
    else {
        return {error: "Pretraga nije uspjela", status: res.status};
    }
}

export async function fetchAllDriveTypes(){
    const res = await fetch(`http://localhost:5000/drive_types`);
    if(res.ok){
        return res.json();
    }
    else {
        return {error: "Pretraga nije uspjela", status: res.status};
    }
}



