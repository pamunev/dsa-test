/*
  Given:
    a linked list of words
    a concordance
    the original data set
  Return:  
    an array of all sentences containing words in the list
*/
function searchLines(words, concordance, data) {
  // The concordance tells us which sentences to get from data. 
  // words tells us which words we want to use the concordance to 
  // search for. 
  // for every number in the array that is the value of a word in 
  // the concordance, 
  // we want to find the corresponding sentence in the data array.
  // by matching the index in data array to the number. 
  // so first we cycle through the linked list of words. But can we?

  const lines = []

  for (let word of words) {
    if (concordance[word]) {
      let lineNumbers = concordance[word]
      for (let num of lineNumbers) {
        lines.push(data[num])
      }
    }
  }
  return lines
}

module.exports = searchLines;