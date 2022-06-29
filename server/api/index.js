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
        url: 'https://rapidprod-sendgrid-v1.p.rapidapi.com/mail/send',
        headers: {
            'content-type': 'application/json',
            'X-RapidAPI-Key': 'ae5381ecc8msh0f57ec82fa1bea2p1bb060jsn95500a02d0b4',
            'X-RapidAPI-Host': 'rapidprod-sendgrid-v1.p.rapidapi.com'
        },
        data: `{"personalizations":[{"to":[{"email":"jobtennis21@gmail.com"}],"subject":" ${req.body.name}: ${req.body.subject}"}],"from":{"email":"${req.body.email}"},"content":[{"type":"text/plain","value":"${req.body.message}"}]}`
    };

    axios.request(options).then(function(response) {
        res.send("You have successfully send your feedback!!!")

        console.log(response.data);


    }).catch(function(error) {
        //console.error(error);
        res.send(error.message)
    });

});

export default app;