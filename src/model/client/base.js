import Exception from '../../core/Exception';

/**
 * клиент
 * @constructor
 * @type Function
 * @param {Object} data
 * @return ModelClientBase
 */
export default function ModelClientBase(data) {

    try {
        /**
         * @namespace ModelClientBase
         * @typedef ModelClientBase
         */
        return {
            /**
             * @type Number
             */
            id: 0,

            /**
             * @type String
             */
            fio: '',

            /**
             * @type ModelTelBase.id[] id номеров телефонов
             */
            telLi: [],
        }
    }
    catch(event) {
        Exception({
            event,
            desc: 'Объект не создан'
        });
    }
}
