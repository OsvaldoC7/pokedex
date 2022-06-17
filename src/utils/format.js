export const formatCapitalizeFirstLetter = (word) => {
  return word.charAt(0).toUpperCase() + word.slice(1)
}

export const formatDamageRelations = (word) => {
  return formatCapitalizeFirstLetter(word.split('_').join(' '))
}