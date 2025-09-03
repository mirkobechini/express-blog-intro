const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))

const postList = [
    {
        title: "Ciambellone",
        content: "recipe",
        image: "/images/ciambellone.jpeg",
        tags: ["1", "dessert", "wow"]
    },
    {
        title: "Cracker Barbabietola",
        content: "bio",
        image: "/images/cracker_barbabietola.jpeg",
        tags: ["2", "secondo", "wow"]
    },
    {
        title: "Pane Fritto Dolce",
        content: "list projects",
        image: "/images/pane_fritto_dolce.jpeg",
        tags: ["3", "secondo", "wow"]
    },
    {
        title: "Pasta barbabietola",
        content: "contacts",
        image: "/images/pasta_barbabietola.jpeg",
        tags: ["4", "secondo", "wow"]
    },
    {
        title: "Torta paesana",
        content: "lorem",
        image: "/images/torta_paesana.jpeg",
        tags: ["0", "secondo", "wow"]
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
    res.type("json").send(postList)
})
