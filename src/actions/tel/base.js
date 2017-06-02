import ModelTelBase from '../../model/tel/base';

/**
 * Создает новую запись
 * @param dispatch
 */
export function create(dispatch) {
    setTimeout(() => {
        dispatch({
            type: 'ORDER.EDIT.CLIENT.TEL.CREATE',
            value: ModelTelBase({ id: -1 })
        })
    }, 1);
}





