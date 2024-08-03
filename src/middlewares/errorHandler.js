"use strict"
/* -------------------------------------------------------------------------- */
/*                           RENT A CAR API PROJECT                           */
/* -------------------------------------------------------------------------- */

/* ------------------------------ errorHandler ------------------------------ */
module.exports = (err, req, res, next) => {

    const errorStatusCode = errorStatusCode || 500

    res.status(errorStatusCode).send({
        error: true,
        message: err.message,
        cause: err.cause,
        stack: err.stack
    })
}
