import Exception from '../../../core/Exception';

/**
 * Единица заказа, то, что заказал клиент
 * @constructor
 * @param {*} data
 * @return ModelOrderBase
 */
export default function ModelOrderBase(data) {

    try {
        /**
         * @namespace ModelOrderBase
         * @typedef ModelOrderBase
         */
        const model = {
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
        };
        

        return model;
    }
    catch(event) {
        Exception({
            event,
            desc: 'Объект не создан'
        });
    }
}
