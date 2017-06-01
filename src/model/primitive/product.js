import Exception from '../../core/Exception';

/**
 * Единица товара/услуги
 * @constructor
 * @param {*} [data]
 * @return ModelProduct
 */
export default function ModelProduct(data) {

    try {
        /**
         * @namespace ModelProduct
         * @typedef ModelProduct
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
            type: 'service',

            /**
             * @type String
             */
            section: 'delivery'
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
const typeLi = ['service', 'commodity'];

/**
 * Список разделов
 * @type String[]
 */
const sectionLi = ['delivery', 'assembly'];
