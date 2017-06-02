import ModelTelBase from '../../model/tel/base';

/**
 * Создает новую запись телефона при редактирования заказа
 * @param dispatch
 * @param getState
 */
export function clientTelCreate(dispatch, getState) {
    setTimeout(() => {
        const telLi = getState().order.edit.client.telLi;
        const id = Math.min.apply(null, telLi.filter(i => i.id < 0).map(i => i.id)) - 1;

        dispatch({
            type: 'ORDER.EDIT.CLIENT.TEL.CREATE',
            value: ModelTelBase({ id })
        })
    }, 1);
}

