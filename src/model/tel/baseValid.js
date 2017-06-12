/**
 * Валидация модели
 * @param {ModelTelBase} model
 * @returns Boolean
 */
export default function valid(model) {

    if (model.value.length < 2) {
        
        // todo сделать валидацию телефоного номера
        return false;
    }

    return true;
}
