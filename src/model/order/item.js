import Exception from '../../core/Exception';

/**
 * Единица заказа, то, что заказал клиент
 * @constructor
 * @param {*} data
 * @return ModelOrderItem
 */
export default function ModelOrderItem(data) {

    try {
        /**
         * @namespace ModelOrderItem
         * @typedef ModelOrderItem
         */
        return {
            /**
             * @type Number
             */
            id: data.id,

            /**
             * @type ModelProductBase.id
             */
            productId: data.productId,

            /**
             * @type Number кол-во
             */
            qty: data.qty || 0,

            /**
             * @type String примечание
             */
            note: data.note || '',

            /**
             * @type Number стоимость без скидки
             */
            cost: data.cost || 0,

            /**
             * @type Number скидка
             */
            discount: data.discount || 0,
        }
    }
    catch(event) {
        Exception({
            event,
            desc: 'Объект не создан'
        });
    }
}
