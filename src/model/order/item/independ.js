import Exception from '../../../core/Exception';
import ModelOrderItemBase from './base';

/**
 * Единица заказа, то, что заказал клиент
 * Стоимость определяется, по стоимости товара/услуги (ModelProductIndepend.cost) в данный момент
 *
 * @desc создание экземпляра делаем через фабрику
 * @constructor
 * @param {*} data
 * @return ModelOrderItemIndepend
 */
export default function ModelOrderItemIndepend(data) {
    try {
        const base = ModelOrderItemBase(data);

        /**
         * @namespace ModelOrderItemIndepend
         * @typedef ModelOrderItemIndepend
         */
        const model = {
            ...base,

            /**
             * Идентификатор класса экземпляра
             */
            _instance: 'ModelOrderItemIndepend',

            /**
             * @type Number стоимость в процентах от стоимости приобретенного товара
             */
            cost: data.cost,
        };

        return model;
    }
    catch(event) {
        Exception({
            event,
            desc: 'Объект ModelOrderItemIndepend не создан'
        });
    }
}

/**
 * Проверяет, является ли объект экземпляром класса
 * @param {ModelOrderItemIndepend|Object} obj
 * @returns Boolean
 */
ModelOrderItemIndepend.instanceOf = function(obj) {
    if ('_instance' in obj) {
        return obj._instance === 'ModelOrderItemIndepend';
    }
    return (
        ModelOrderItemBase.instanceOf(obj) &&
        'cost' in obj
    );
};
