/**
 * Форматирование вывода сумм
 * @param {String} sign текстовое подпись
 * @param {Number} sum сумма (в копейках)
 * @param {?Number} [dec] сколько знаков после запятой
 * @param {?Number} [round] округление
 * @return String
 */
export function format(sign, sum, dec, round) {
    // todo добавить форматирование числа
    return String(sum / 100);
    //return String(sum / 100).replace(/(\d){3}$/g, '.');
}
