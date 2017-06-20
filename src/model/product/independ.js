import Exception from '../../core/Exception';
import ModelProductBase from './base';

/**
 * Единица товара/услуги
 * @constructor
 * @param {*} [data]
 * @return ModelProductIndepend
 */
export default function ModelProductIndepend(data) {
    try {
        const base = ModelProductBase(data);

        /**
         * @namespace ModelProductIndepend
         * @typedef ModelProductIndepend
         */
        const obj = {
            ...base,

            /**
             * Идентификатор класса экземпляра
             */
            _instance: 'ModelProductIndepend',

            /**
             * @type Number Цена товара/услуги. Цена указана в копейках.
             * целое, >= 0
             */
            cost: data.cost,
        };

        return obj;
    }
    catch(event) {
        Exception(event, {
            desc: 'Объект ModelProductIndepend не создан',
            data
        });
    }
}

/**
 * Проверяет, является ли объект экземпляром класса
 * @param {ModelProductIndepend|Object} obj
 * @returns Boolean
 */
ModelProductIndepend.instanceOf = function(obj) {
    if ('_instance' in obj) {
        return obj._instance === 'ModelProductIndepend';
    }
    return (
        ModelProductBase.instanceOf(obj) &&
        'cost' in obj
    );
};
