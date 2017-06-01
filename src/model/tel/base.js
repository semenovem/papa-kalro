import Exception from '../../core/Exception';

/**
 * Номер телефона
 * @constructor
 * @param {*} [data]
 * @return ModelTel
 */
export default function ModelTelBase(data) {

    try {
        /**
         * @namespace ModelTelBase
         * @typedef ModelTelBase
         */
        return {

            /**
             * @type Number
             */
            id: 0,

            /**
             * @type String номер телефона
             */
            value: '',

            /**
             * @type String комментарий
             */
            note: ''
        }
    }
    catch(event) {
        Exception({
            event,
            desc: 'Объект не создан'
        });
    }
}

// валидатор телефонного номера
