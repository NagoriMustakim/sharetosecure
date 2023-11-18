const express = require('express')
const colors = require('colors')
const cors = require('cors')
const morgon = require('morgan')
const connectDB = require('../server/config/db')
const router = require('./routes/user.routes')
const contractrouter = require('./routes/contract.routes')
const activityrouter = require('./routes/activity.routes')
const bankrouter = require('./routes/bank.routes')
require('dotenv').config()


const app = express()
const PORT = 4000

app.use(cors())
app.use(express.json())
app.use(morgon('dev'))
app.use('/api/v1/user', router)
app.use('/api/v1/contract', contractrouter)
app.use('/api/v1/activity', activityrouter) 
app.use('/api/v1/bank', bankrouter)
connectDB()
app.get('/', (req, res) => {
    res.send("welocome to homepage")
        .end()
})



app.listen(PORT, () => {
    console.log(`Server listing on ${`http://localhost:${PORT}`}`.bgMagenta.white);
})