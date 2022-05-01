let lan;
let long;

getData();

function getData(){
    if ('geolocation' in navigator){
        navigator.geolocation.getCurrentPosition((position) => {
            lat = position.coords.latitude;
            long = position.coords.longitude;
            document.getElementById("lat").textContent = lat;
            document.getElementById("long").textContent = long;

        })
    } else{
        console.log("geolocation not awalible")
    }
}
        
async function sendData(){
    let frugt = document.getElementById("frugt").value;
    console.log(frugt);
    const data = {lat, long, frugt};
    const options = {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
    }
    const responce = await fetch("/api", options);
    const jsonData = await responce.json();
    console.log(jsonData);
    document.getElementById("visualCue").textContent = "Data sendt to database!";

    setTimeout(()=>{
        document.getElementById("visualCue").textContent = "";
    },1000)
}
