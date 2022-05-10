export async function fetchAllAnnouncements(){
    const res = await fetch("http://localhost:5000/announcements");
    if(res.ok){
        return res.json();
    }
    else {
        return {error: "Pretraga nije uspjela", status: res.status};
    }
}