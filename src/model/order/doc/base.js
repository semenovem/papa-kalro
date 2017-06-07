import Exception from '../../../core/Exception';


/**
 * Документы Заказа
 * @constructor
 * @param {Object} data
 * @return ModelOrderDocBase
 */
export default function ModelOrderDocBase(data) {

    try {
        /**
         * @namespace ModelOrderDocBase
         * @typedef ModelOrderDocBase
         */
        const obj = {

            /**
             * номер документа (продажа в магазине)
             */
            num: ''
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

/**
 * Валидация
 * @param {ModelOrderDocBase} obj
 * @returns {Boolean}
 */
export function valid(obj) {
    return obj.num.length > 1;
}
