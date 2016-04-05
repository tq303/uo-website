import fetch from 'isomorphic-fetch'

const config = require('../../config');

// global
export const reset = () => ({
    type: 'RESET'
})