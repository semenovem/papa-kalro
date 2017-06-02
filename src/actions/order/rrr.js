const ROM = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 100,
    'M': 1000,
};

/**
 * Пеобразование римских цифр в десятичную систему
 * @param {String} str
 * @returns Number
 */
function rom (str) {
    let preVal,
        sum = 0;

    for (let i = str.length - 1; i >= 0; i--) {
        let val = ROM[str[i]];

        if (preVal && preVal > val) {
            sum -= val;
            preVal = null;
        } else {
            preVal = val;
            sum += val;
        }
    }
    return sum;
}
