'use strict'

function getPage (req, res) {
   res.status(200).send({ mesage: 'Hello world!' })
}

module.exports = getPage