﻿if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
  }
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'
  
  module.exports = {
    PAPERTRAIL_HOSTNAME: process.env.PAPERTRAIL_HOSTNAME || 'minelev-robot',
    PAPERTRAIL_HOST: process.env.PAPERTRAIL_HOST || 'logs.papertrailapp.com',
    PAPERTRAIL_PORT: process.env.PAPERTRAIL_PORT || 12345
  }
  