/**
 * Любое целое число
 * @param {*} val
 * @returns {boolean}
 */
function is(val) {
    return isFinite(val) && Math.floor(val) === val;
}

/**
 * Положительное целое число
 * @param val
 * @returns {boolean}
 */
function isPositiveAndNotZero(val) {
    return is(val) && val > 0;
}

/**
 * Не ноль
 * @param val
 * @returns {boolean}
 */
function isNotZero(val) {
    return is(val) && val !== 0;
}




export {
    is,
    isPositiveAndNotZero,
    isNotZero,
}
