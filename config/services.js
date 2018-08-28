const axios = require('axios');
const IGDB_API_USER_KEY = '996f7cfd5d3e93d00d8de7968961eb64';

const igdbApi = axios.create({
  baseURL: 'https://api-endpoint.igdb.com/',
  headers: {
    'user-key': IGDB_API_USER_KEY,
    'Accept': 'application/json',
  },
});

module.exports = { igdbApi };
