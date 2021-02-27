const express = require('express')
const router = express.Router()

// OPTIONAL => ?
//router.get('/Cont?act', (req, res) => res.send('Contact World!'))
//router.get('/Co(nta)?ct', (req, res) => res.send('Contact World!'))
//router.get('/Con?t?a?ct', (req, res) => res.send('Contact World!'))
// ANY TEXT => *
//router.get('/Con*tact', (req, res) => res.send('Contact World!'))
// PLUS  => +
//router.get('/Conta+ct', (req, res) => res.send('Contact World!'))
// ? * +
router.get('/C?on+ta*ct', (req, res) => res.send('Contact World!'))

module.exports = router;
