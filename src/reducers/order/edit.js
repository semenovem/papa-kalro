//import {compressSpacesInside, makeFirstLetterUppercase, trimLeft, leaveCyrillic} from '../../helper/text';
import orderEditValid from '../../model/order/editValid';

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
    const type = action.type;
    let newState;
    
    if (!Array.prototype.every.call('ORDER.EDIT', (char, index) => char === type[index])) {
        return state;
    }

    switch (type) {

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
                    telLi: [...state.client.telLi, action.tel]
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
         * Добавляет позицию к заказу
         * @param {ModelOrderItemBase[]|ModelOrderItemDepend[]|ModelOrderItemIndepend[]} action.itemLi
         */
        case 'ORDER.EDIT.ITEM.ADD':
            newState = {
                ...state,
               itemLi:  [...state.itemLi, ...action.itemLi]
            };
            break;

        /**
         * Удаляет продукт в заказе
         * @param {ModelOrderBase[]} action.itemLi
         */
        case 'ORDER.EDIT.ITEM.REMOVE':
            newState = {
                ...state,
                itemLi: state.itemLi.filter(item => !~action.itemLiToRemove.indexOf(item.id))
            };
            break;

        /**
         * Начало сохранения записи
         */
        case 'ORDER.EDIT.SAVE.RUN':
            newState = {
                ...state,
                isSaved: true
            };
            break;

        /**
         * Завершение сохранения записи
         */
        case 'ORDER.EDIT.SAVE.END':
            newState = {
                ...state,
                isSaved: false
            };
            break;


        /**
         * Изменяет кол-во в позиции заказа
         * @param {Number} action.id изменяемая запись
         * @param {Number} action.qty кол-во
         */
        case 'ORDER.EDIT.ITEM.QTY.CHANGE':
            newState = {
                ...state,
                itemLi: state.itemLi.map(item => {
                    if (action.id === item.id) {
                        item = {
                            ...item,
                            qty: action.qty
                        }
                    }
                    return item;
                })
            };
            break;

        /**
         * Изменяет стоимость товара/услуги в заказе
         * @param {Number} action.id изменяемая запись
         * @param {Number} action.cost стоимость
         */
        case 'ORDER.EDIT.ITEM.COST.CHANGE':

            console.log('ORDER.EDIT.ITEM.COST.CHANGE', action);

            newState = {
                ...state,
                itemLi: state.itemLi.map(item => {
                    if (action.id === item.id) {
                        item = {
                            ...item,
                            cost: action.cost
                        }
                    }
                    return item;
                })
            };
            break;







        /**
         * Отчистка данных
         * todo пока не используется
         */
        case 'ORDER.EDIT.CLEAR':
            newState = initialState;
            break;

        default: newState = state;
    }

    /*
     * валидадация данных, поле isValid
     */
    if (newState !== state) {
        const isValid = orderEditValid(newState);
        if (newState.isValid ^ isValid) {
            newState.isValid = isValid;
        }
    }

    return newState;
}


