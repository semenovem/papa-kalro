import Exception from '../../core/Exception';

/**
 *
 * @param {ModelClientBase} model
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
 * @param {ModelClientBase.id} val
 * @throws {Exception}
 */
verify.id = function(val) {
    typeof val === 'number' || Exception('Должен быть тип Number');
    isFinite(val) || Exception('Не может быть Infinity, NaN');
    (val ^ 0) === val || Exception('Число должно быть натуральным');
    val !== 0 || Exception('Не может быть 0');
};
