function sortArray(sentence) {
  return sentence.split(' ').sort().sort((a, b) => a.length - b.length);
}