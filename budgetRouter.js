const express = require('express')

const db = require('./data/dbConfig')
const router = express.Router()

router.get('/', (req, res) => {
    db('accounts')
        .then(account => res.status(200).json(account))
        .catch(err => res.status(500).json({error: 'Error getting data'}))
})

router.get('/:id', (req, res) => {
    db('accounts')
        .where({id: req.params.id})
            .then(account => res.status(200).json(account))
            .catch(err => res.status(500).json({error: 'error getting account'}))
})

router.post('/', (req, res) => {
    db  
        .insert(req.body, 'id')
        .into('accounts')
        .then(account => res.status(201).json(account))
        .catch(err => res.status(500).json({error: 'Error posting account'}))
})

router.put('/:id', (req, res) => {
    db('accounts')
        .where({id: req.params.id})
        .update(req.body)
        .then(account => res.status(201).json(account))
        .catch(err => res.status(500).json({error: 'Error updating account'}))  

})

router.delete('/:id', (req, res) => {
    db('accounts')
        .where({id: req.params.id})
        .del()
        .then(account => res.status(200).json(account))
        .catch(err => res.status(500).json({error: 'Error deleting the account'}))
})

module.exports = router