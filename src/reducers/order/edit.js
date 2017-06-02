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
         * создает номер телефона
         */
        case 'ORDER.EDIT.CLIENT.TEL.CREATE':
            return {
                ...state,
                client: {
                    ...state.client,
                    telLi: [...state.client.telLi, action.value]
                }
            };

        /**
         * изменение номера телефона клиента
         */
        case 'ORDER.EDIT.CLIENT.TEL.VALUE.CHANGE':
            return {
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


        /**
         * изменение описания номера телефона клиента
         */
        case 'ORDER.EDIT.CLIENT.TEL.NOTE.CHANGE':
            return {
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



        /**
         * удаление номера телефона клиента
         */
        case 'ORDER.EDIT.CLIENT.TEL.REMOVE':
            return {
                ...state,
                client: {
                    ...state.client,
                    telLi: state.client.telLi.filter(tel => tel.id !== action.id)
                }
            };











        default: break;
    }
    return state;
}


