const getContentValues = require('./get-content-values')

module.exports = (data, language) => {
  const coursesList = data.classes.map(item => {
    const idSplit = item.id.split('_')
    idSplit.splice(0, 1)
    const school = idSplit.pop().split('@')[0]
    const id = idSplit.join('_')
    return `${school}:${id} - ${item[language]}`
  })

  return {
    period: data.period[language],
    gradesCategories: getContentValues(data.reasons, language),
    coursesList: coursesList.join('\n')
  }
}
