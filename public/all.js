getdata();
async function getdata(){
    console.log("Trying to get data")
    const response = await fetch("/api");
    const data = await response.json();
    console.log(response.ok)
    for (item of data) {
        const root = document.createElement("div");
        const geo = document.createElement("div");
        const frugt = document.createElement("div");
        const date = document.createElement("div");
        const linebreak = document.createElement("br")
        geo.textContent = `Lat: ${item.lat} long: ${item.long}`;
        frugt.textContent = `Frugt: ${item.frugt}`;
        date.textContent = `Date: ${new Date(item.timestamp).toLocaleString()}`;
        console.log(data.textContent);
        root.append(geo,frugt,date,linebreak);
        document.body.append(root);
    }
}