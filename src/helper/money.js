/**
 * Форматирование вывода сумм
 * @param {Number} sum сумма (в копейках)
 * @param {String} [currency] текстовое подпись
 * @param {?Number} [dec] сколько знаков после запятой
 * @param {?Number} [round] округление
 * @return String
 */
export function format(sum, currency, dec, round) {
    // todo добавить форматирование числа
    return (sum / 100).toLocaleString();
}


/**
 * Перевести в рубли
 * @param {Number} sum сумма (в копейках)
 * @param {String} [currency]
 * @return Number
 */
export function transformToRub(sum, currency) {
    return sum / 100;
}

/**
 * Перевести в копейки
 * @param {Number} sum сумма (в рублях)
 * @param {String} [currency]
 * @return Number
 */
    export function transformToKop(sum, currency) {
    return sum * 100;
}