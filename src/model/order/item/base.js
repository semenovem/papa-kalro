import Exception from '../../../core/Exception';

/**
 * Единица заказа, то, что заказал клиент
 * @constructor
 * @param {*} data
 * @return ModelOrderItemBase
 */
export default function ModelOrderItemBase(data) {
    try {
        /**
         * @namespace ModelOrderItemBase
         * @typedef ModelOrderItemBase
         */
        const model = {
            /**
             * Идентификатор класса экземпляра
             */
            _instance: 'ModelOrderItemBase',

            /**
             * @type Number
             * val !== 0
             */
            id: data.id,

            /**
             * @type ModelProductBase.id
             * @optional
             * можно создать экземпляр, без указания продукта
             */
            productId: 'productId' in data ? data.productId : 0,

            /**
             * @type Number кол-во
             * @optional
             * val >= 0
             */
            qty: 'qty' in data ? data.qty : 0,

            /**
             * @type String примечание
             * @optional
             * val.length < 10000
             */
            note: 'note' in data ? data.note : '',

            /**
             * @type Number скидка
             * @optional
             * val >= 0 && val <= 100
             */
            discount: 'discount' in data ? data.discount : 0,

            /**
             * @type String раздел, в котором находится запись
             * @optional
             * Если не указано, определяется по "продукту"
             */
            section: 'section' in data ? data.section : null,
        };

        return model;
    }
    catch(event) {
        Exception({
            event,
            desc: 'Объект ModelOrderItemBase не создан'
        });
    }
}

/**
 * Проверяет, является ли объект экземпляром класса
 * @param {ModelOrderItemBase|Object} obj
 * @returns Boolean
 */
ModelOrderItemBase.instanceOf = function (obj) {
    if ('_instance' in obj) {
        return obj._instance === 'ModelOrderItemBase';
    }
    return (
        'id' in obj &&
        'productId' in obj &&
        'qty' in obj
    );
};
