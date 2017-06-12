/**
 * Валидация
 * @param {ModelOrderDocBase} model
 * @returns {Boolean}
 */
export default function valid(model) {
    return model.num.length > 1;
}

