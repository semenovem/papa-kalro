import ModelOrderEdit from '../../model/order/edit';
import ModelTelBase from '../../model/tel/base';
import ModelClientBase from '../../model/client/base';
import ModelAddrBase from '../../model/addr/base';
import ModelOrderItemFactory from '../../model/order/item/factory';
import {getTmpId as getUniqueTmpId} from '../../core/unique';

/**
 * Создает новую запись заказа
 */
export function create() {
    return (dispatch, getState) => {
        setTimeout(() => {
             dispatch({
                 type: 'ORDER.EDIT.CREATED',
                 modelOrderEdit: ModelOrderEdit({
                     id: getUniqueTmpId(),
                     doc: {
                         num: '3453453'
                     },

                     itemLi: [
                         ModelOrderItemFactory({
                             id: getUniqueTmpId(),
                             productId: 3,
                             qty: 3,
                             cost: getState().product.hash[3].cost,
                         }),
                         ModelOrderItemFactory({
                             id: getUniqueTmpId(),
                             productId: 3,
                             qty: 3,
                             costPercent: getState().product.hash[3].cost,
                         }),
                         {
                             id: getUniqueTmpId(),
                             productId: 2,
                             qty: 1,
                             note: '',
                             cost: getState().product.hash[2].cost,
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
