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
             * @type Number
             * val !== 0
             */
            id: data.id,

            /**
             * @type ModelProductBase.id
             * можно создать экземпляр, без указания продукта
             */
            productId: 'productId' in data ? data.productId : 0,

            /**
             * @type Number кол-во
             * val > 0
             */
            qty: data.qty,

            /**
             * @type String примечание
             * val.length < 10000
             * @optional
             */
            note: 'note' in data ? data.note : '',

            /**
             * @type Number скидка
             * @optional
             * val >= 0 && val <= 100
             */
            discount: 'discount' in data ? data.discount : 0,
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
    return (
        'id' in obj &&
        'productId' in obj &&
        'qty' in obj
    );
};
