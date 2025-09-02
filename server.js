const express = require('express')
const app = express()
const port = 3000

const postList = [
    {
        title: "post 1",
        content: "lorem",
        image: "immagine",
        tags: ["1", "secondo", "wow"]
    }
]

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`);
})

//Routes
//root
app.get('/', (req, res) => {
    res.send("<h1>Server del mio blog</h1>")
})

//bacheca
app.get('/bacheca', (req, res) => {
    res.send("list of post")
})
