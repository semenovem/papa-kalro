/**
 * Сделать заглавными первые буквы всех слов
 * @param {String} text
 * @returns {string}
 */
export function makeFirstLetterUppercase(text) {
    return text.toLowerCase().replace(/\s.|^./g, (v) => v.toUpperCase());
}

/**
 * Заменяет любые пробельные символы на пробелы внутри текста
 * заменяет два и более вхождения проблельных символов на один пробел
 * @param text
 */
export function compressSpacesInside(text) {
    return text.replace(/\s+/g, ' ');
}

/**
 * Удаляет пробельные символы с левого края текста
 * @param text
 */
export function trimLeft(text) {
    return text.replace(/^\s+/g, '');
}

/**
 * Вырезает цифры из текста
 * @param text
 */
export function cutDigit(text) {
    return text.replace(/\d/g, '');
}

/**
 * Оставляет только кириллические символы и пробельные символы
 * @param text
 */
export function leaveCyrillic(text) {
    return text.replace(/[^а-яё\s]+/gi, '');
}




