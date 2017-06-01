import Exception from '../../core/Exception';
import {isPositiveAndNotZero as isIntPositiveAndNotZero, isNotZero as isIntNotZero} from '../../validation/int'

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
        const obj = {

            /**
             * @type Number
             */
            id: data.id,

            /**
             * @type String номер телефона
             */
            value: '',

            /**
             * @type String комментарий
             */
            note: ''
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

// валидатор телефонного номера
