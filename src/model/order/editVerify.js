import Exception from '../../core/Exception';
import orderBaseVerify from './baseVerify';

/**
 * Верификация объекта
 * для ModelOrderBase заменяем id на валидный
 *
 * @param {ModelOrderEdit} model
 * @returns Boolean
 */
export default function verify(model) {
    orderBaseVerify(model);

    let field;
    for (field in model) {
        if (!model.hasOwnProperty(field) || typeof verify[field] !== 'function') {
            continue;
        }
        try {
            verify[field](model[field]);
        }
        catch (event) {
            Exception(event, 'Исключение при верификации поля: ' + field);
        }
    }
}

/**
 * Верификация поля модели
 * @param {ModelOrderEdit.isNew} val
 */
verify.isNew = function(val) {
    typeof val === 'boolean' || Exception('Должен быть тип Boolean');
};






