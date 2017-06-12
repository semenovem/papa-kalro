import orderDocValid from './doc/baseValid';


/**
 * Валидация
 * @param {ModelOrderBase} model
 * @returns {Boolean}
 */
export default function valid(model) {
    // валидность документа
    if (!orderDocValid(model.doc)) {
        return false;
    }

    // нет выбранных продуктов
    if (!model.itemLi.length) {
        return false;
    }

    return true;
}
