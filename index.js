const express = require("express");
const Datastore = require("nedb");
const app = express();
app.listen(3000, () => console.log("listening at 3000"))
app.use(express.static("public"));
app.use(express.json({limit: "1mb"}));

const database = new Datastore('databace.db');
database.loadDatabase();

app.post("/api", (request, response) =>{
    console.log("Jeg fik en request")
    const data = request.body
    const timestamp = Date.now();
    data.timestamp = timestamp;
    database.insert(data);
    console.log(request.body);

    response.json({
        status: "succsess",
        timestamp: timestamp,
        lat: request.body.lat,
        long: request.body.long,
        frugt: request.body.frugt
    })
})

app.get("/api", (request,response) => {
    console.log("nogle brugte get");

    database.find({},(err,data) => {
        if(err){
            response.end();
            return;
        }
        response.json(data);
    })

})