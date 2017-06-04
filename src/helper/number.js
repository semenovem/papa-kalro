/**
 * 
 * @param {String} text
 * @returns {string}
 */
export function onlyNumber(text) {
    return text.replace(/\D/g, '');
}
