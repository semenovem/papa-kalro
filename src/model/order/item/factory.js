import Exception from '../../../core/Exception';
import ModelOrderItemDepend from './depend';
import ModelOrderItemIndepend from './independ';

/**
 * Фабрика создания экземпляров (объект данных) классов ModelOrderItem...
 * @constructor
 * @param {*} data
 * @return ModelOrderItemFactory
 */
export default function ModelOrderItemFactory(data) {
    try {
        switch (ModelOrderItemFactory.getInstanceClass(data)) {
            case 'ModelOrderItemDepend':
                return ModelOrderItemDepend(data);
            case 'ModelOrderItemIndepend':
                return ModelOrderItemIndepend(data);
            default:
                Exception({
                    desc: 'ModelOrderItemFactory: не удалось определить класс, экземпляр которого нужно создать',
                    data
                })
        }
    }
    catch(event) {
        Exception(event, 'ModelOrderItemFactory: не удалось создать экземпляр класса');
    }
}

/**
 * Определить класс экземпляра
 * @param {ModelOrderItemDepend | ModelOrderItemIndepend | null} obj
 * @return String название класса
 */
ModelOrderItemFactory.getInstanceClass = function(obj) {
    try {
        if (ModelOrderItemDepend.instanceOf(obj)) {
            return 'ModelOrderItemDepend';
        }
        if (ModelOrderItemIndepend.instanceOf(obj)) {
            return 'ModelOrderItemIndepend';
        }
    }
    catch(e) {}
    return null;
};
