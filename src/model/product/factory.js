import Exception from '../../core/Exception';
import ModelProductDepend from './depend';
import ModelProductIndepend from './independ';

/**
 * Фабрика создания экземпляров (объект данных) классов ModelProduct...
 * @constructor
 * @param {*} data
 * @return ModelProductFactory
 */
export default function ModelProductFactory(data) {
    try {
        switch (ModelProductFactory.getInstanceClass(data)) {
            case 'ModelProductDepend':
                return ModelProductDepend(data);
            case 'ModelProductIndepend':
                return ModelProductIndepend(data);
            default:
                Exception({
                    desc: 'ModelProductFactory: не удалось определить класс, экземпляр которого нужно создать',
                    data
                })
        }
    }
    catch(event) {
        Exception(event, 'ModelProductFactory: не удалось создать экземпляр класса');
    }
}

/**
 * Определить класс экземпляра
 * @param {ModelProductDepend | ModelProductIndepend | null} obj
 * @return String название класса
 */
ModelProductFactory.getInstanceClass = function(obj) {
    try {
        if (ModelProductDepend.instanceOf(obj)) {
            return 'ModelProductDepend';
        }
        if (ModelProductIndepend.instanceOf(obj)) {
            return 'ModelProductIndepend';
        }
    }
    catch(e) {}
    return null;
};
