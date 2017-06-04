import Exception from '../../core/Exception';

/**
 * Адрес
 * @constructor
 * @param {*} [data]
 * @return ModelAddrBase
 */
export default function ModelAddrBase(data) {

    try {
        /**
         * @namespace ModelAddrBase
         * @typedef ModelAddrBase
         */
        const obj = {

            /**
             * @type Number
             */
            id: 0,

            /**
             * @type String текстовое написание адреса: город, улица и т.д.
             */
            value: '',

            /**
             * @type String комментарий к адресу
             * например: как заехать, какой ориентир
             */
            note: '',

            /**
             * Геокоординаты
             */
            geo: {

                /**
                 * @type Number Широта
                 */
                lat: 0,

                /**
                 * @type Number Долгота
                 */
                long: 0
            }
        };

        return obj;
    }
    catch (event) {
        Exception({
            event,
            desc: 'Объект не создан'
        });
    }
}
