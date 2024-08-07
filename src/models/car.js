"use strict"
/* -------------------------------------------------------------------------- */
/*                           RENT A CAR API PROJECT                           */
/* -------------------------------------------------------------------------- */

const { mongoose } = require('../configs/dbConnection')

const CarSchema = mongoose.Schema({
    plateNumber: {},

    brand: {},

    model:{},

    year: {},

    isAutomathic: {},

    pricePerDay: {},

    isPublish:{},

    createdId:{},

    updatedId:{}

}, { 
    collection:'cars',
    timestamps: true
})

module.exports.Car = mongoose.model('Car', CarSchema)