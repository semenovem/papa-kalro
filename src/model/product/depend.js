import Exception from '../../core/Exception';
import ModelProductBase from './base';

/**
 * Единица товара/услуги с зависимостью от цены приобретаемых товаров в магазине
 * @constructor
 * @param {*} data
 * @return ModelProductDepend
 */
export default function ModelProductDepend(data) {
    try {
        const base = ModelProductBase(data);

        /**
         * @namespace ModelProductDepend
         * @typedef ModelProductDepend
         */
        const obj = {
            ...base,

            /**
             * Идентификатор класса экземпляра
             */
            _instance: 'ModelProductDepend',

            /**
             * @type Number стоимость в процентах от стоимости приобретенного товара
             */
            costPercent: data.costPercent,

            /**
             * @type Number|null минимальная стоимость при подсчете в процентах
             * @optional
             */
            costMin: 'costMin' in data ? data.costMin : null,

            /**
             * @type Number|null максимальная стоимость при подсчете в процентах
             * @optional
             */
            costMax: 'costMax' in data ? data.costMax : null,
        };

        return obj;
    }
    catch(event) {
        Exception(event, {
            desc: 'Объект ModelProductDepend не создан',
            data
        });
    }
}

/**
 * Проверяет, является ли объект экземпляром класса
 * @param {ModelProductDepend|Object} obj
 * @returns Boolean
 */
ModelProductDepend.instanceOf = function(obj) {
    if ('_instance' in obj) {
        return obj._instance === 'ModelProductDepend';
    }
    return (
        ModelProductBase.instanceOf(obj) &&
        'costPercent' in obj
    );
};
