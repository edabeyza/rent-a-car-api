"use strict"
/* -------------------------------------------------------------------------- */
/*                           RENT A CAR API PROJECT                           */
/* -------------------------------------------------------------------------- */

/* --------------------------- mongodb connection --------------------------- */
const mongoose = require('mongoose')

const dbConnection = function() {
    mongoose.connect(process.env.MONGODB)
        .then(() => console.log('** Db Is Connected Succesfully **'))
        .catch((err) => console.log('-- Db Is Not Connected --', err))
}

module.exports={
    mongoose,
    dbConnection
}