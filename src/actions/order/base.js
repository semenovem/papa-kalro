import ModelOrderEdit from '../../model/order/edit';
import ModelTelBase from '../../model/tel/base';
import ModelClientBase from '../../model/client/base';
import ModelAddrBase from '../../model/addr/base';
import {getUniqueTmpId} from '../../core/unique';

/**
 * Создает новую запись заказа
 */
export function create() {
    return (dispatch) => {
        setTimeout(() => {
             dispatch({
                 type: 'ORDER.EDIT.CREATED',
                 modelOrderEdit: ModelOrderEdit({
                     id: getUniqueTmpId(),
                     doc: {
                         num: '3453453'
                     },

                     itemLi: [
                         {
                             id: getUniqueTmpId(),
                             productId: 2,
                             qty: 1,
                             note: '',
                             cost: 0,
                             discount: 0,
                         }
                     ],

                     isNew: true,
                     client: ModelClientBase({
                         id: getUniqueTmpId(),
                         fio: 'Иванов Иван',
                         telLi: [
                             ModelTelBase({
                                 id: getUniqueTmpId(),
                                 value: '+7(926)453-23-13',
                                 note: 'с 3-х до 5 утра не звонить'
                             })
                         ]
                     }),

                     addr: ModelAddrBase({
                         id: getUniqueTmpId(),
                         value: 'Москва Проспект Юбилейный 40 608'
                     })
                 })
             })
         }, 1);
    }
}
