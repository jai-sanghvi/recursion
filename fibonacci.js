// takes a number & returns an array containing "num" numbers from the fibonacci sequence
// nth element in the sequence is (n-1)th element + (n - 2)th element

function fibs(num) {
  let fibseq = [0, 1];

  for (let i = 2; i < num; i++) {
    fibseq.push( fibseq[i - 1] + fibseq[i - 2] );
  }

  console.log(fibseq);
}

function fibsRec(num) {
  console.log("This was printed recursively");

  if (num < 1) return 'Number of elements can\'t be less than 1';
  if (num === 1) return [0];
  if (num === 2) return [0, 1];

  const fibSeries = fibsRec(num - 1);

  return [...fibSeries, fibSeries[num - 2] + fibSeries[num - 3]];
}

console.log( fibsRec(8) );
