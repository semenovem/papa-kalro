let qt = -1;

/**
 * Возвращает уникальное значение для временных (не сохраненных) id
 * @returns Number
 */
export default function getUniqueId() {
    // todo добавить проверку на переполнение
    return qt--;
}

/**
 * Возврашает уникальную строку
 * @returns String
 */
export function getUniqueStr() {

}
