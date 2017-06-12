import Exception from '../../core/Exception';
import verify from './baseVerify';
import ModelClientBase from '../client/base';
import ModelAddrBase from '../addr/base';
import ModelOrderDocBase, {valid as orderDocValid} from './doc/base';

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
        const model = {

            /**
             * @type Number
             * !== 0
             */
            id: data.id,

            /**
             * Исходные документы
             */
            doc: ModelOrderDocBase(data.doc),

            /**
             * @type ModelClientBase
             */
            client: ModelClientBase(data.client),

            /**
             * @type ModelAddrBase
             */
            addr: ModelAddrBase(data.addr),

            /**
             * @type ModelOrderBase.id[] содержимое заказа клиента
             */
            itemLi: data.itemLi || [],

            /**
             * Данные для доставки
             */
            delivery: {
                /**
                 * Комментарий для доставки
                 * например: за какое время позвонить
                 * @type String
                 */
                note: (data.delivery && data.delivery.note) || ''
            },

            /**
             * Данные для сборки
             */
            assembly: {
                /**
                 * Комментарий для сборки
                 * например: за какое время позвонить
                 * @type String
                 */
                note: (data.assembly && data.assembly.note) || ''
            }
        };

        verify(model);

        return model;
    }
    catch(event) {
        Exception(event, {
            desc: 'Объект ModelOrderBase не создан',
            data
        });
    }
}
