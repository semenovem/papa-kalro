import Exception from '../../core/Exception';

/**
 * Адрес
 * @constructor
 * @param {*} [data]
 * @return ModelAddr
 */
export default function ModelAddr(data) {

    try {
        /**
         * @namespace ModelAddr
         * @typedef ModelAddr
         */
        return {

            /**
             * @type Number
             */
            id: 0,

            /**
             * @type String
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
        }
    }
    catch(event) {
        Exception({
            event,
            desc: 'Объект не создан'
        });
    }
}
