import ModelOrderEdit from '../../model/order/edit';


/**
 * Создает новую запись
 * @param dispatch
 */
export function create(dispatch) {
    setTimeout(() => {
        dispatch({
            type: 'ORDER.EDIT.CREATED',
            modelOrderEdit: ModelOrderEdit()
        })
    }, 1);
}
