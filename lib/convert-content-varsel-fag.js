const getContentValues = require('./get-content-values')

module.exports = (data, language) => {
  const coursesList = data.content.classes.map(item => {
    const idSplit = item.id.split('_')
    const school = idSplit.pop().split('@')[0]
    const id = idSplit.join('_')
    return `${school}:${id} - ${item[language]}`
  })

  return {
    period: data.content.period[language],
    gradesCategories: getContentValues(data.content.reasons, language),
    coursesList: coursesList.join('\n')
  }
}
