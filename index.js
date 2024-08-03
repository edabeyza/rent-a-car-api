"use strict"
/* -------------------------------------------------------------------------- */
/*                           RENT A CAR API PROJECT                           */
/* -------------------------------------------------------------------------- */

/* -------------------------------- requires -------------------------------- */
const express = require('express')
const app = express()

require('express-async-errors')

require('dotenv').config()
const PORT = process.env?.PORT || 8000

/* ------------------------------ dbConnection ------------------------------ */
const { dbConnection } = require('./src/configs/dbConnection')
dbConnection()

/* ------------------------------- run server ------------------------------- */
app.listen(PORT, () => console.log('Running on http://127.0.0.1:' + PORT))