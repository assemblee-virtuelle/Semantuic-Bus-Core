'use strict';

var mongoose = require('../db/mongo_client');
var transactionSchema = require('../model_schemas/transaction_schema');

module.exports = mongoose.model('transaction', transactionSchema);