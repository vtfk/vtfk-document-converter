const getContentValues = require('./get-content-values');

module.exports = (data, language) => {
    return {
        "period": data.period[language],
        "orderCategories": getContentValues(data.reasons, language)
    }
}
