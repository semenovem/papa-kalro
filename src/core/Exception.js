/**
 * Работа с исключениями
 *
 * @use
 *
 * Создать исключение
 *
 *
 * Exception(event, {
 *      desc: ''            // описание
 * })
 *
 *
 *
 *
 *
 */
export default function Exception (...args) {
    if (this instanceof Exception) {

        /**
         * @type {Array} массив событий catch, через которые прошло исключение
         */
        this._li = [];
        return this;
    }
    
    if (args[0] instanceof Exception) {
        args[0]._li.push(prepareParams(args[1]));

        throw args[0];
    }

    const event = new Exception();

    switch (args.length) {
        case 1:
            event._li.push(prepareParams(args[0]));
            break;
        case 2:
            event._li.push({
                event: args[0],
                ...args[1]
            });
            break;

        default:
    }

    throw event;
}

/**
 * Статический метод
 * Проверяет, является ли переданный объект экземпляром класса Exception
 * @param {*} obj
 * @returns Boolean
 */
Exception.is = function(obj) {
    return obj instanceof Exception;
};

/**
 * Прототипные методы
 * @namespace Exception
 */
Exception.prototype = {};

/**
 * Подготовка переданного значения в исключение
 * @param params
 * @param event
 * @returns {*}
 */
function prepareParams(params, event) {
    // <debug>
    if (!params || (typeof params === 'object' && Array.isArray(params))) {
        console.warn('params должен быть объектом');
        return params;
    }
    // </debug>

    let obj;

    switch (typeof params) {
        case 'string':
            obj = {
                desc: params
            };
            break;

        case 'object':
            // <debug>
            if ('desc' in params === false) {
                console.warn('в объекте params должно быть поле desc, с описанием исключения');
            }
            // </debug>
            obj = {
                ...params
            };
            break;

        default:
            // <debug>
            console.warn('params должен быть объектом');
            // </debug>
            return params;
    }

    
    if (event) {
        obj.event = event;
    }
    return obj;
}
