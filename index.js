const express = require("express");
const app = express();
const newUrl = 'https://krpano-7b93c.web.app';

app.get('/', (req, res) => {
    console.log(decodeURIComponent(newUrl + req.url));
    res.redirect(decodeURIComponent(((newUrl + req.url))));
})

app.listen(3000, () => console.log("Server ready on port 3000."));

module.exports = app;