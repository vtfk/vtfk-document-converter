const getContentValues = require('./get-content-values')

module.exports = (data, language) => {
  return {
    period: data.period[language],
    gradesCategories: getContentValues(data.reasons, language),
    coursesList: getContentValues(data.classes, language)
  }
}
