import Exception from '../../core/Exception';

/**
 * Единица измерения
 * @constructor
 * @param {*} [data]
 * @return ModelUnit
 */
export default function ModelUnit(data) {

    try {
        /**
         * @namespace ModelUnit
         * @typedef ModelUnit
         */
        return {

            /**
             * @type Number
             */
            id: 0,

            /**
             * @type String название сокращенное
             */
            nameS: '',

            /**
             * @type String название полное
             */
            nameF: '',
        }
    }
    catch(event) {
        Exception({
            event,
            desc: 'Объект не создан'
        });
    }
}
