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
        const obj = {
            /**
             * @type Number
             */
            id: data.id,

            /**
             * @type String
             */
            fio: data.fio || '',

            /**
             * @type ModelTelBase.id[] id номеров телефонов
             */
            telLi: data.telLi || [],
        };



        return obj;
    }
    catch(event) {
        Exception({
            event,
            desc: 'Объект не создан'
        });
    }
}
