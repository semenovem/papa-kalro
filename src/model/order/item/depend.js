import Exception from '../../../core/Exception';
import ModelOrderItemBase from './base';

/**
 * Единица заказа, то, что заказал клиент
 * расширяет базовый класс, добавляя зависимость от стоимости приобретенного товара
 *
 * для такого товара/услуги можно указать:
 * - стоимость товара, от которого рассчитывается стоимость
 *      - при этом, если указана минимальная стоимость - и
 * - конечную стоимость, вне зависимости от
 *
 * @desc создание экземпляра делаем через фабрику
 *
 * @constructor
 * @param {*} data
 * @return ModelOrderItemDepend
 */
export default function ModelOrderItemDepend(data) {
    try {
        const base = ModelOrderItemBase(data);

        /**
         * @namespace ModelOrderItemDepend
         * @typedef ModelOrderItemDepend
         * @augments ModelOrderItemBase
         */
        const model = {
            ...base,

            /**
             * Идентификатор класса экземпляра
             */
            _instance: 'ModelProductDepend',

            /**
             * @type Number стоимость в процентах от стоимости приобретенного товара
             * val >= 0 && val <= 100
             */
            costPercent: data.costPercent,

            /**
             * @type Number стоимость вещей(товаров), от которых считается стоимость
             * @optional
             * val >= 0
             */
            thingCost: 'thingCost' in data ? data.thingCost : 0,
        };
        

        return model;
    }
    catch(event) {
        Exception({
            event,
            desc: 'Объект ModelOrderItemDepend не создан'
        });
    }
}

/**
 * Проверяет, является ли объект экземпляром класса
 * @param {ModelOrderItemDepend|Object} obj
 * @returns Boolean
 */
ModelOrderItemDepend.instanceOf = function(obj) {
    if ('_instance' in obj) {
        return obj._instance === 'ModelProductDepend';
    }
    return (
        ModelOrderItemBase.instanceOf(obj) &&
        'costPercent' in obj
    );
};
