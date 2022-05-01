export async function fetchAllAds(){
    const res = await fetch("http://localhost:5000/ads?_expand=manufacturer&_expand=model&_expand=car_type&_expand=fuel_type&_expand=drive_type");
    if(res.ok){
        return res.json();
    }
    else {
        return {error: "Pretraga nije uspjela", status: res.status};
    }
}