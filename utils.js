module.exports = {
    multiplyMatrices: function(mat1, mat2) {
        let result = [];
        for(let i = 0; i < mat1.length; i++) {
            result.push([]);
        }
        let sum = 0;
        for(let r = 0; r < mat1.length; r++) {
            for(let c = 0; c < mat2[0].length; c++) {
                for(let d = 0; d < mat2.length; d++) {
                    sum += mat1[r][d] * mat2[d][c];
                }
                result[r].push(sum);
                sum = 0;
            }
        }
        return result
    },

    outputResult: function(resultMatrix) {
        let result = "";
        for(let row = 0; row < resultMatrix.length; row++) {
            for(let column = 0; column < resultMatrix[0].length; column++) {
                result = result + resultMatrix[row][column] + "\t"
            }
            result += "\n"
        }
        return result;
    }
}