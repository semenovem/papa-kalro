let tmpId = -1;
let int = 1;

/**
 * Возвращает уникальное значение для временных (не сохраненных) id
 * @returns Number
 */
export function getTmpId() {
    // todo добавить проверку на переполнение
    return tmpId--;
}

/**
 * Возвращает уникальную строку
 * @returns String
 */
export function getStr() {}


/**
 * Возвращает уникальное целое число
 * @returns Number
 */
export function getInt() {
    return int++;
}
