export async function uploadImage(img: object){
    const res = await fetch(`http://localhost:5000/images`,
        {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(img)
        }
    );
    if(res.ok){
        return res.json();
    }
    else {
        return {error: "Kreiranje novog oglasa nije uspjelo", status: res.status};
    }
}