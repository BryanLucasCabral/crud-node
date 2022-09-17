const express = require('express')
const routes = require('./routes')
const app = express()
/*const port = 3000*/




require('./database')

app.use(express.json())
app.use(routes)
/*app.listen(port, () => {console.log(`aplicacao rodando em http://localhost:${port}`)})*/
app.listen(3030)