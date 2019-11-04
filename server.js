const express = require('express');
const BudgetRouter = require('./budgetRouter')

// const db = require('./data/dbConfig.js');

const server = express();

server.use(express.json());
server.use('/api/budget', BudgetRouter)

server.get('/', (req, res) => {
    res.status(200).json({message: "Budgets DB"})
})

module.exports = server;