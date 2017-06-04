import Exception from '../../core/Exception';
import ModelClientBase from '../client/base';
import ModelAddrBase from '../addr/base';
import ModelOrderDocBase from './doc/base';

/**
 * Заказ
 * @constructor
 * @param {Object} data
 * @return ModelOrderBase
 */
export default function ModelOrderBase(data) {

    try {
        /**
         * @namespace ModelOrderBase
         * @typedef ModelOrderBase
         */
        const obj = {

            /**
             * @type Number отрицательные значения для новых записей
             */
            id: 0,

            /**
             * Исходные документы
             */
            doc: ModelOrderDocBase(),

            /**
             * @type ModelClientBase
             */
            client: ModelClientBase.apply(null, data && [data.client]),

            /**
             * @type ModelAddrBase
             */
            addr: ModelAddrBase.apply(null, data && data.addr),

            /**
             * @type ModelOrderItem.id[] содержимое заказа клиента
             */
            itemLi: [],

            /**
             * Данные для доставки
             */
            delivery: {
                /**
                 * Комментарий для доставки
                 * например: за сколько позвонить
                 */
                note: ''
            },

            /**
             * Данные для сборки
             */
            assembly: {
                /**
                 * Комментарий для сборки
                 * например: за сколько позвонить
                 */
                note: ''
            }
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
