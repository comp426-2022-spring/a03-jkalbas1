const express = require('express')
const args = require('minimist')(process.argv.slice(2))
const app = express()

const port = args.port || 5000

const server = app.listen(port, () => {
    console.log(`App listening on port ${port}`)
});

app.use(function(req, res){
    res.status(404).send('404 NOT FOUND')
})