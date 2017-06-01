import {compressSpacesInside, makeFirstLetterUppercase, trimLeft, leaveCyrillic} from '../helper/text';

const initialState = {

    /**
     * Исходные документы
     */
    sourceDoc: {
        /**
         * номер документа (продажа в магазине)
         */
        num: ''
    },

    client: {
        fio: '',

        /**
         * Номера телефонов
         */
        telLi: [
            {
                id: 1,
                value: '',
                note: ''
            }
        ],

        /**
         * Адрес
         */
        addr: {
            value: '',

            geo: {
                /**
                 * геокоординаты. Широта
                 * @type {?Number}
                 */
                lat: 0,

                /**
                 * геокоординаты. Долгота
                 * @type {?Number}
                 */
                long: 0
            }
        },
    },

    /**
     * Доставка
     */
    delivery: {

    },

    /**
     * Сборка
     */
    assembly: {

    }

};


export default function (state = initialState, action) {
    let telLi, value;

    switch (action.type) {
        /**
         * Изменяет номер документа
         */
        case 'ORDER.CREATE.SOURCE_DOC.NUM.CHANGE':
            return {
                ...state,
                sourceDoc: {
                    ...state.sourceDoc,
                    num: action.value
                }
            };

        /**
         * Изменяет ФИО
         */
        case 'ORDER.CREATE.CLIENT.FIO.CHANGE':
            value = makeFirstLetterUppercase(compressSpacesInside(trimLeft(leaveCyrillic(action.value))));
            if (state.client.fio === value) break;
            return {
                ...state,
                client: {
                    ...state.client,
                    fio: value
                }
            };

        /**
         * Создает новый объект телефона
         * action {}
         */
        case 'ORDER.CREATE.CLIENT.TEL.CREATE':
            return {
                ...state,
                client: {
                    ...state.client,
                    telLi: [...state.client.telLi, createTel(state.client.telLi)]
                }
            };

        /**
         * Изменяет номер телефона
         * action { id: Number, value: String }
         */
        case 'ORDER.CREATE.CLIENT.TEL.VALUE.CHANGE':
            telLi = state.client.telLi.map(tel => {
                if (tel.id === action.id) {
                    tel.value = action.value;
                }
                return tel;
            });

            return {
                ...state,
                client: {
                    ...state.client,
                    telLi
                }
            };

        /**
         * Изменяет описание телефона
         * action { id: Number, note: String }
         */
        case 'ORDER.CREATE.CLIENT.TEL.NOTE.CHANGE':
            telLi = state.client.telLi.map(tel => {
                if (tel.id === action.id) {
                    tel.note = action.note;
                }
                return tel;
            });
            return {
                ...state,
                client: {
                    ...state.client,
                    telLi
                }
            };

        case 'ORDER.CREATE.CLIENT.TEL.REMOVE':
            return {
                ...state,
                client: {
                    ...state.client,
                    telLi: state.client.telLi.filter(tel => tel.id !== action.id)
                }
            };

        /**
         * Изменение адреса
         */
        case 'ORDER.CREATE.CLIENT.ADDR.VALUE.CHANGE':
            return {
                ...state,
                client: {
                    ...state.client,
                    addr: {
                        ...state.client.addr,
                        value: action.value
                    }
                }
            };











        default: break;
    }
    return state;
}

/**
 * Создает новый объект телефонного номера
 * @param {Array} telLi
 * @returns {{id: *, value: string, note: string}}
 */
function createTel(telLi) {
    const id = telLi.length ? Math.max.apply(null, telLi.map(t => t.id)) + 1 : 1;
    return {
        id,
        value: '',
        note: ''
    }
}



