import transport from '../transport';

/**
 * Сохраняет данные
 * @param {modelOrderEdit} model
 * @returns {Promise}
 */
export function save(model) {
    return transport('order.edit.save', model)
        .then(data => {
            // todo валидация входных даных

            return data;
        })
}
