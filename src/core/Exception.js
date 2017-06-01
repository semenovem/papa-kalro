/**
 * Работа с исключениями
 *
 */
const Exception = (params) => {
    console.warn('Exception', params);
    throw params.event instanceof ExceptionEvent ? params : new ExceptionEvent(params);
};

/**
 * Объект события
 * @param {Object} params
 * @constructor
 */
function ExceptionEvent(params) {
    Object.keys(params).forEach(key => this[key] = params[key], this);
}

export default Exception;
