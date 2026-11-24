const express = require('express');
const axios = require('axios');
const app = express();
const PORT=3000;

app.get("/photo", async (req, res) => {

const odgovor = await axios.get("https://api.unsplash.com/photos/?client_id=R-2AwekEGK6owLbGjw_j0atYQpyVlsFMTGuNpdb1nLI");
    const img=await axios.get (odgovor.data[0].urls.raw);
    res.setHeader('Content-Type', "image/jpeg");
    .data.pipe(res);
    try{
        const odgovor = await axios.get("https://api.unsplash.com/photos/?client_id=R-2AwekEGK6owLbGjw_j0atYQpyVlsFMTGuNpdb1nLI");
        const img=await axios.get (odgovor.data[0].urls.raw,{responseType: 'stream'});
        res.setHeader('Content-Type', "image/jpeg");
        .data.pipe(res);
    }
catch (e) {
    res.status(500).json({ error: "Slika nije dostupna" });
    }
});

app.listen(PORT, () => {
    console.log(`Server radi na portu ${PORT}`)
});