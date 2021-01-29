module.exports = (data) => {
  return {
    samtaleCategories: `Elevsamtalen er${data.content.samtale ? ' ' : ' ikke '}gjennomført`
  }
}
