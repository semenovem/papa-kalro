import Exception from '../../core/Exception';
import ModelOrderBase from './base';

/**
 * Новый заказ
 * @constructor
 * @param {Object} data
 * @return ModelOrderEdit
 */
export default function ModelOrderEdit(data) {

    try {
        const base = ModelOrderBase(data);

        /**
         * @namespace ModelOrderEdit
         * @typedef ModelOrderEdit
         */
        return {
            ...base,

            delivery: {
                ...base.delivery,
                has: false
            },

            assembly: {
                ...base.assembly,
                has: false
            },

            /**
             * Имеет ли изменение
             */
            hasModify: false,

            /**
             * @type Boolean запись true = новая, false = существующая
             */
            isNew: false,

            /**
             * Флаг для проверки, в reducer - в state объект с данными или пустая заглушка начального состояния
             */
            has: true,
        }
    }
    catch(event) {
        Exception({
            event,
            desc: 'Объект не создан'
        });
    }
}
