function ziplist(arrOne, arrTwo) {
  const result = [];
  for (let i = 0; i < arrOne.length; i++) {
    result.push(arrOne[i]);
    result.push(arrTwo[i]);
  }
  return result;
}

console.log(ziplist([1, 2, 3, 4], ['a', 'b', 'c', 'd']));
console.log('hello');

function ziplistTheEasyWay(arrOne, arrTwo) {
  return _.flatten(_.zip(arrOne, arrTwo));
}
console.log(ziplistTheEasyWay([1, 2, 3, 4], ['a', 'b', 'c', 'd']));
