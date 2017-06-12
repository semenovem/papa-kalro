import telBaseValid from '../tel/baseValid';

/**
 * Валидация модели
 * @param {ModelClientBase} model
 * @returns Boolean
 */
export default function valid(model) {

    if (model.fio.length < 2) {
        return false;
    }

    if (!model.telLi.length) {
        return false;
    }

    if (!model.telLi.some(tel => telBaseValid(tel))) {
        return false;
    }

    return true;
}
