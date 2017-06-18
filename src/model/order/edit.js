import Exception from '../../core/Exception';
import ModelOrderBase from './base';
import valid from './baseValid';
import verify from './editVerify';

/**
 * Новый заказ
 * @constructor
 * @param {Object} data
 * @return ModelOrderEdit
 */
export default function ModelOrderEdit(data) {

    try {
        /**
         * @type {ModelOrderBase}
         */
        const base = ModelOrderBase(data);

        /**
         * @namespace ModelOrderEdit
         * @typedef ModelOrderEdit
         */
        const model = {
            /**
             * @type ModelOrderBase
             */
            ...base,

            delivery: {
                ...base.delivery,
                has: true   // todo изменить на false
            },

            assembly: {
                ...base.assembly,
                has: false
            },

            /**
             * @type Boolean Имеет ли изменение, нуждающееся в сохранении
             * для новой записи - true, для существующей - false
             */
            isModify: null,

            /**
             * @type Boolean запись true = новая, false = существующая
             * при сохранении в процессе редактирования - запись остается в статусе "новая"
             */
            isNew: data.isNew,

            /**
             * @type Boolean валидность данных
             */
            isValid: null,

            /**
             * Флаг для проверки, в reducer - в state объект с данными или пустая заглушка начального состояния
             */
            has: true,

            /**
             * @type Boolean флаг - запись сохраняется
             */
            isSaved: false
        };

        verify(model);

        model.isValid = valid(model);
        model.isModify = model.isNew;

        return model;
    }
    catch(event) {
        Exception(event, {
            desc: 'Объект ModelOrderEdit не создан',
            data
        });
    }
}
