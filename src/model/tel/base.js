import Exception from '../../core/Exception';
import verify from './baseVerify';

/**
 * Номер телефона
 * @constructor
 * @param {*} [data]
 * @return ModelTelBase
 */
export default function ModelTelBase(data) {

    try {
        /**
         * @namespace ModelTelBase
         * @typedef ModelTelBase
         */
        const model = {

            /**
             * @type Number
             */
            id: data.id,

            /**
             * @type String номер телефона
             */
            value: data.value || '',

            /**
             * @type String комментарий
             */
            note: data.note || ''
        };

        verify(model);

        return model;
    }
    catch(event) {
        Exception({
            event,
            desc: 'Объект не создан'
        });
    }
}
