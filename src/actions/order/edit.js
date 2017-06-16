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

export function createItem() {
    
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
                // для идентификации записи можем использововать временный id:
                // если id существует в state - все ок
                // если id не существует - игнорировать

                // искать запись в state.order.edit
                // искать запись в state.order.list

                // за время сохранения, в записи могут произойти изменения:
                // могут измениться данные
                // запись может быть удалена и стать не актуальной
                // запись может быть сохранена в другой операции

                dispatch({
                    type: 'ORDER.LIST.ADD',
                    model: modelOrderBase(model)
                });
                dispatch({
                    type: 'ORDER.EDIT.SAVE.END'
                });
                dispatch({
                    type: 'MENU.SELECT.ITEM.AT.PATH',
                    path: 'order.list'
                });
            });                      
        console.log ('save', getState());
    }
}

/**
 * Получает из ModelOrderEdit -> MdelOrderBase
 * @param {ModelOrderEdit} modelEdit
 * @returns ModelOrderBase
 */
function transformToModelBase(modelEdit) {
    return modelOrderBase(modelEdit);
}


/**
 * Добавляет запись в список заказов
 * @param modelOrderEdit
 */
export function addList(modelOrderEdit) {

}
