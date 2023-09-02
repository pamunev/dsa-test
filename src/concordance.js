/*
 Given an array of sentences making up a body of text,
 output a concordance of words that appear in the text.
 If the same word appears multiple times on a line it should
 list the line only once.
*/
function concordance(data) {
   // create a set?
    // we split each string up into an array of individual words
    // Then we iterate through the sentence-arrays
    // if word[i] exists in given array, add array number to word array (that we created).
    // The concordance is an object. The word is a key, and the number of sentence-array is its value. 
    // So first we loop through every sentence, and if the word does not exist in concordance, we add it to the concordance object in lowercase.
    // But first we loop through the data array and transform each sentence into an array of words. 
    let result = {}
    let sentenceArrays = []
    
    for (let i = 0; i < data.length; i++) {
      let line = data[i]
      const words = line.split(/[\s.,';]/).filter((word) => word !== '')
      const uniqueWords = new Set(words.map(word => word.toLowerCase()))
      
      for (let word of uniqueWords) {
        if (!result[word]) {
          result[word] = []
        }
        result[word].push(i)
      }
    }
    return result
  }
  
  module.exports = concordance;