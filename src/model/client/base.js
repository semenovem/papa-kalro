import Exception from '../../core/Exception';
import verify from './baseVerify';

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
        const model = {
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
             * todo создать из "сырых данных" объекты номеров телефонов
             */
            telLi: data.telLi || [],
        };

        verify(model);

        return model;
    }
    catch(event) {
        Exception(event, {
            desc: 'Объект ModelClientBase не создан',
            data
        });
    }
}
