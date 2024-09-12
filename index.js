const app = require('express')();
const PORT = 80;
const newUrl = 'https://krpano-7b93c.web.app';

app.get('/', (req, res) => {
    console.log(req.url);
    res.redirect(newUrl + req.url);
})

app.listen(PORT);