import express from 'express'
const app = express()

app.get('/', (req, res, next) => {
    res.send('Tour booking api')
})

app.get('/tours', (req, res, next) => {
    res.send('Get the tour list biatch')
})

app.post('/tours', (req, res, next) => {
    res.send('Add a new tour')
})

app.listen(process.env.PORT || 8091, () => console.log('server started...'))