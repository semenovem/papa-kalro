import ModelOrderEdit from '../../model/order/edit';
import {compressSpacesInside, makeFirstLetterUppercase, trimLeft, leaveCyrillic} from '../../helper/text';

const initialState = {
    has: false
};

/**
 *
 * @param state
 * @param action
 * @returns {*}
 */
export default function (state = initialState, action) {

    switch (action.type) {

        /**
         * создана новая запись
         */
        case 'ORDER.EDIT.CREATED':
            return action.modelOrderEdit;

        /**
         * изменение номера документа
         */
        case 'ORDER.EDIT.DOC.CHANGE':
            return {
                ...state,
                doc: action.doc
            };

        /**
         * изменение данных клиента
         */
        case 'ORDER.EDIT.CLIENT.CHANGE':
            return {
                ...state,
                client: action.value
            };

        /**
         * изменение данных номера телефона клиента
         */
        case 'ORDER.EDIT.CLIENT.TEL.CHANGE':
            return {
                ...state,
                client: {
                    ...state.client,
                    telLi: action.value
                }
            };

        /**
         * создает номер телефона
         */
        case 'ORDER.EDIT.CLIENT.TEL.CREATE':
            console.log(action)
            return {
                ...state,
                client: {
                    ...state.client,
                    telLi: [...state.client.telLi, action.value]
                }
            };











        default: break;
    }
    return state;
}


