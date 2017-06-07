//import {compressSpacesInside, makeFirstLetterUppercase, trimLeft, leaveCyrillic} from '../../helper/text';

const initialState = {
    has: false
};

/**
 * Изменения в данных
 *
 * при каждом изменени в данных редюсер валидирует данные
 * @param state
 * @param action
 * @returns {*}
 */
export default function (state = initialState, action) {
    let newState;

    switch (action.type) {

        /**
         * создана новая запись
         */
        case 'ORDER.EDIT.CREATED':
            newState = action.modelOrderEdit;
            break;

        /**
         * изменение номера документа
         */
        case 'ORDER.EDIT.DOC.CHANGE':
            newState = {
                ...state,
                doc: action.doc
            };
            break;

        /**
         * изменение данных клиента
         */
        case 'ORDER.EDIT.CLIENT.CHANGE':
            newState = {
                ...state,
                client: action.value
            };
            break;

        /**
         * создает номер телефона
         */
        case 'ORDER.EDIT.CLIENT.TEL.CREATE':
            newState = {
                ...state,
                client: {
                    ...state.client,
                    telLi: [...state.client.telLi, action.value]
                }
            };
            break;

        /**
         * изменение номера телефона клиента
         */
        case 'ORDER.EDIT.CLIENT.TEL.VALUE.CHANGE':
            newState = {
                ...state,
                client: {
                    ...state.client,
                    telLi: state.client.telLi.map(tel => {
                        if (action.id === tel.id) {
                            tel.value = action.value;
                        }
                        return tel;
                    })
                }
            };
            break;

        /**
         * изменение описания номера телефона клиента
         */
        case 'ORDER.EDIT.CLIENT.TEL.NOTE.CHANGE':
            newState = {
                ...state,
                client: {
                    ...state.client,
                    telLi: state.client.telLi.map(tel => {
                        if (action.id === tel.id) {
                            tel.note = action.note;
                        }
                        return tel;
                    })
                }
            };
            break;

        /**
         * удаление номера телефона клиента
         */
        case 'ORDER.EDIT.CLIENT.TEL.REMOVE':
            newState = {
                ...state,
                client: {
                    ...state.client,
                    telLi: state.client.telLi.filter(tel => tel.id !== action.id)
                }
            };
            break;

        /**
         * Изменился адрес
         */
        case 'ORDER.EDIT.ADDR.CHANGE':
            newState = {
                ...state,
                addr: action.addr
            };
            break;

        /**
         * вкл/выкл доставки
         */
        case 'ORDER.EDIT.DELIVERY.HAS.CHANGE':
            newState = {
                ...state,
                delivery: {
                    ...state.delivery,
                    has: action.has
                }
            };
            break;

        /**
         * изменение комментария к доставке
         */
        case 'ORDER.EDIT.DELIVERY.NOTE.CHANGE':
            newState = {
                ...state,
                delivery: {
                    ...state.delivery,
                    note: action.note
                }
            };
            break;

        /**
         * вкл/выкл доставки
         */
        case 'ORDER.EDIT.ASSEMBLY.HAS.CHANGE':
            newState = {
                ...state,
                assembly: {
                    ...state.assembly,
                    has: action.has
                }
            };
            break;

        /**
         * изменение комментария к доставке
         */
        case 'ORDER.EDIT.ASSEMBLY.NOTE.CHANGE':
            newState = {
                ...state,
                assembly: {
                    ...state.assembly,
                    note: action.note
                }
            };
            break;

        /**
         * Добавляет товар/услугу к заказу
         */
        case 'ORDER.EDIT.ITEM.ADD':
            newState = {
                ...state,
                itemLi:  [...state.itemLi, ...action.itemLiToAdd]
            };
            break;

        /**
         * Удаляет товар/услугу в заказе
         */
        case 'ORDER.EDIT.ITEM.REMOVE':
            newState = {
                ...state,
                itemLi: state.itemLi.filter(item => !~action.itemLiToRemove.indexOf(item.id))
            };
            break;

        default: newState = state;
    }


    // валидадация данных, поле isValid
    if (newState !== state) {
        console.log('newState');



    }
    

    return newState;
}


