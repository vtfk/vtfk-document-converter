const convert = require('./lib/convert-document')
const { logger } = require('@vtfk/logger')

module.exports = (data, language = 'nb') => {
  logger('info', ['index', data._id, 'start'])
  try {
    const document = convert(data, language)
    logger('info', ['index', data._id, 'finished'])
    return document
  } catch (error) {
    logger('error', ['index', 'error', JSON.stringify(error.message)])
    throw error
  };
}
