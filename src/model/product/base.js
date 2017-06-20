import Exception from '../../core/Exception';

/**
 * Единица товара/услуги
 * нет необходимости разработчику создавать экземпляры этого класса
 *
 * @constructor
 * @param {*} data
 * @return ModelProductBase
 */
export default function ModelProductBase(data) {

    try {
        /**
         * @namespace ModelProductBase
         * @typedef ModelProductBase
         */
        const obj = {
            /**
             * @type Number
             * целое, > 0
             */
            id: data.id,

            /**
             * @type String название товара / услуги сокращенное
             * val.length > 1
             */
            nameS: data.nameS,

            /**
             * @type String название товара / услуги полное
             * val.length > 1
             */
            nameF: data.nameF,

            /**
             * @type String описание товара/услуги
             */
            desc: data.desc,

            /**
             * @type ModelUnitBase.id
             */
            unitId: data.unitId,

            /**
             * @type String
             */
            type: data.type,

            /**
             * @type String
             */
            section: data.section
        };

      //  verify(obj);

        return obj;
    }
    catch(event) {
        Exception(event, {
            desc: 'Объект ModelProductBase не создан',
            data
        });
    }
}

/**
 * Проверяет, является ли объект экземпляром класса
 * @param {ModelProductBase|Object} obj
 * @returns Boolean
 */
ModelProductBase.instanceOf = function (obj) {
   return (
       'id' in obj &&
       'nameS' in obj &&
       'nameF' in obj &&
       'desc' in obj &&
       'unitId' in obj &&
       'type' in obj &&
       'section' in obj
   );
};



// /**
//  * Валидация
//  * @param {ModelProductBase} model
//  * @returns Boolean
//  */
// export function valid(model) {
//     return true;
// }
//
// /**
//  * Верификация
//  * @param {ModelProductBase} model
//  * @throws {Exception}
//  */
// export const verify = function _f(model) {
//     let field;
//
//     for (field in model) {
//         if (!model.hasOwnProperty(field) || typeof _f[field] !== 'function') {
//             return;
//         }
//         try {
//            _f[field](model[field]);
//         }
//         catch (event) {
//             Exception(event, 'Исключение при верификации поля: ' + field);
//             throw event;
//         }
//     }
// };
//
// /**
//  * Верификация поля в модели id
//  * @param {*} id
//  * @throws {Exception}
//  */
// verify.id = function(id) {
//     !isFinite(id) && Exception({
//         desc: 'значение должно быть числом'
//     });
//
//     id <= 0 && Exception({
//         desc: 'должно быть больше 0'
//     });
// };










///**
// * список типов
// * @type String[]
// */
//const typeLi = ['SERVICE', 'COMMODITY'];
//
///**
// * Список разделов
// * @type String[]
// */
//const sectionLi = ['DELIVERY', 'ASSEMBLY'];



