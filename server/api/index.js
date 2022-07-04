import express from "express";
import axios from "axios";


const app = express();

app.use(express.json());



app.post("/api", (req, res) => {
    console.log("requested", req.body)
    console.log("requested fileds", req.fields)
    console.log("requested req", req.query)

    const options = {
        method: 'POST',
        url: process.env.SEND_GRID_URL,
        headers: {
            'content-type': 'application/json',
            'X-RapidAPI-Key': process.env.SEND_GRID_API_KEY,
            'X-RapidAPI-Host': process.env.SEND_GRID_HOST_NAME
        },
        data: `{"personalizations":[{"to":[{"email":"jobtennis21@gmail.com"}],"subject":" ${req.body.name}: ${req.body.subject}"}],"from":{"email":"${req.body.email}"},"content":[{"type":"text/plain","value":"${req.body.message}"}]}`
    };

    axios.request(options).then(function(response) {
        res.send("You have successfully send your feedback!!!")

        console.log(response.data);


    }).catch(function(error) {
        console.error(error);
        res.send("Something went wrong, please try again!!")
    });

});

export default app;