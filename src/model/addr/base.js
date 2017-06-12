import Exception from '../../core/Exception';
import verify from './baseVerify';

/**
 * Адрес
 * @constructor
 * @param {Object} data
 * @return ModelAddrBase
 */
export default function ModelAddrBase(data) {

    try {
        /**
         * @namespace ModelAddrBase
         * @typedef ModelAddrBase
         */
        const model = {

            /**
             * @type Number
             */
            id: data.id,

            /**
             * @type String текстовое написание адреса: город, улица и т.д.
             */
            value: data.value || '',

            /**
             * @type String комментарий к адресу
             * например: как заехать, какой ориентир
             */
            note: data.note || '',

            /**
             * Геокоординаты
             */
            geo: {

                /**
                 * @type Number Широта
                 */
                lat: (data.geo && data.geo.lat) || 0,

                /**
                 * @type Number Долгота
                 */
                long: (data.geo && data.geo.long) || 0
            }
        };

        verify(model);
        
        return model;
    }
    catch (event) {
        Exception(event, {
            desc: 'Объект ModelAddrBase не создан',
            data
        });
    }
}
