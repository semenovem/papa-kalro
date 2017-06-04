import Exception from '../../core/Exception';

/**
 * Единица товара/услуги
 * @constructor
 * @param {*} [data]
 * @return ModelProductBase
 */
export default function ModelProductBase(data) {

    try {
        /**
         * @namespace ModelProductBase
         * @typedef ModelProductBase
         */
        return {
            /**
             * @type number
             */
            id: 0,

            /**
             * @type String название товара / услуги сокращенное
             */
            nameS: '',

            /**
             * @type String название товара / услуги полное
             */
            nameF: '',

            /**
             * @type String описание товара/услуги
             */
            description: '',

            /**
             * Цена товара/услуги
             */
            cost: 0,

            /**
             * @type ModelUnit.id
             */
            unit: 0,

            /**
             * @type String
             */
            type: '',

            /**
             * @type String
             */
            section: ''
        }
    }
    catch(event) {
        Exception({
            event,
            desc: 'Объект не создан'
        });
    }
}

/**
 * список типов
 * @type String[]
 */
const typeLi = ['SERVICE', 'COMMODITY'];

/**
 * Список разделов
 * @type String[]
 */
const sectionLi = ['DELIVERY', 'ASSEMBLY'];