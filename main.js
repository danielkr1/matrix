

const utils = require("./utils");
const mat1 = [[5,6,7], [8,9,10]];
const mat2 = [[1,2], [3,4], [5,6]];

let resultMatrix = utils.multiplyMatrices(mat1, mat2);

console.log(utils.outputResult(resultMatrix));