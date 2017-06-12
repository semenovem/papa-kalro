import Exception from '../../../core/Exception';

/**
 * Верификация
 * @param {ModelOrderDocBase} model
 */
export default function verify(model) {
    let field;
    for (field in model) {
        if (!model.hasOwnProperty(field) || typeof verify[field] !== 'function') {
            return;
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
 * Верификация поля в модели
 * @param {ModelOrderDocBase.num} val
 * @throws {Exception}
 */
verify.num = function(val) {
    typeof val === 'string' || Exception('Должен быть тип String');
};

