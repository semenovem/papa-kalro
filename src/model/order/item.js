import Exception from '../../core/Exception';

/**
 * Единица заказа, то, что заказал клиент
 * @constructor
 * @param {*} [data]
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
            id: 0,

            /**
             * @type ModelProduct.id
             */
            idProduct: 0,

            /**
             * @type Number кол-во
             */
            qty: 0,

            /**
             * @type String примечание
             */
            note: '',

            /**
             * @type Number стоимость без скидки
             */
            cost: 0,

            /**
             * @type Number скидка
             */
            discount: 0,
        }
    }
    catch(event) {
        Exception({
            event,
            desc: 'Объект не создан'
        });
    }
}
