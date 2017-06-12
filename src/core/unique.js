let qt = -1;

/**
 * Возвращает уникальное значение для временных (не сохраненных) id
 * @returns Number
 */
export function getUniqueTmpId() {
    // todo добавить проверку на переполнение
    return qt--;
}

/**
 * Возвращает уникальную строку
 * @returns String
 */
export function getUniqueStr() {}
