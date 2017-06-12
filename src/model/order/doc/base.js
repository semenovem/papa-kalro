import Exception from '../../../core/Exception';
import verify from './baseVerify';

/**
 * Документы Заказа
 * @constructor
 * @param {?Object} data
 * @return ModelOrderDocBase
 */
export default function ModelOrderDocBase(data) {

    try {
        /**
         * @namespace ModelOrderDocBase
         * @typedef ModelOrderDocBase
         */
        const model = {

            /**
             * номер документа (продажа в магазине)
             * @type String
             */
            num: (data && data.num) || ''
        };

        verify(model);
        
        return model;
    }
    catch(event) {
        Exception(event, 'Объект ModelOrderDocBase не создан');
    }
}
