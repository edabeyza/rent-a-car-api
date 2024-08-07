"use strict"
/* -------------------------------------------------------------------------- */
/*                           RENT A CAR API PROJECT                           */
/* -------------------------------------------------------------------------- */

const { mongoose } = require('../configs/dbConnection')

const ReservationSchema = mongoose.Schema({

},{
    collection: 'reservations',
    timestamps: true
})