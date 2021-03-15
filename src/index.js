module.exports = function towelSort(matrix) {
  if (!matrix) return [];
  let arrow = [];
  let arrowNew = [];
  for (let i = 0; i < matrix.length; i++) {
    if (i % 2) arrow.push(matrix[i].reverse());
    else arrow.push(matrix[i]);
  }
  for (let i = 0; i < arrow.length; i++) {
    for (let ii = 0; ii < arrow[i].length; ii++) {
      arrowNew.push(arrow[i][ii]);
    }
  }
  return arrowNew;
}


