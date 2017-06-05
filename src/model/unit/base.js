import Exception from '../../core/Exception';

/**
 * Единица измерения
 * @constructor
 * @param {*} [data]
 * @return ModelUnitBase
 */
export default function ModelUnitBase(data) {

    try {
        /**
         * @namespace ModelUnitBase
         * @typedef ModelUnitBase
         */
        return {

            /**
             * @type Number
             */
            id: data.id,

            /**
             * @type String название сокращенное
             */
            nameS: data.nameS || '',

            /**
             * @type String название полное
             */
            nameF: data.nameF || '',

            /**
             * @type String описание единицы измерения
             */
            note: data.note || ''
        }
    }
    catch(event) {
        Exception({
            event,
            desc: 'Объект не создан'
        });
    }
}
