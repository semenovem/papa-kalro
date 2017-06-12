import ModelTelBase from '../../model/tel/base';
import {getUniqueTmpId} from '../../core/unique';
import {save as orderEditSave} from '../../provider/order/edit';
import modelOrderBase from '../../model/order/base';

/**
 * Создает новую запись телефона при редактирования заказа
 * @param dispatch
 * @param getState
 */
export function clientTelCreate(dispatch, getState) {
    setTimeout(() => {
        dispatch({
            type: 'ORDER.EDIT.CLIENT.TEL.CREATE',
            tel: ModelTelBase({ id: getUniqueTmpId() }),
        })
    }, 1);
}

/**
 * Сохраняет запись
 * @param {ModelOrderEdit} model
 */
export function save(model) {
    return (dispatch, getState) => {

        const isNew = model.isNew;

        if (model.isSaved) {
            // todo если запись уже сохраняется - поставить в очередь
            // и после окончания предыдущего запроса на сохранение - проверить, есть ли изменения, которые нужно сохранить
            console.warn ('запись уже в состоянии сохранения');
            return false
        }

        dispatch({
            type: 'ORDER.EDIT.SAVE.RUN'
        });


        orderEditSave(model)
            .then(modelSave => {

                // todo заменить временные id на возвращенные сервером

                dispatch({
                    type: 'ORDER.LIST.ADD',
                    model: modelOrderBase(model)
                });
                dispatch({
                    type: 'ORDER.EDIT.SAVE.END'
                });

            });

        console.log ('save', getState());
    }
}


/**
 * Добавляет запись в список заказов
 * @param modelOrderEdit
 */
export function addList(modelOrderEdit) {

}
