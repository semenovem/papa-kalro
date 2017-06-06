const initialState = {

    /**
     * Выбранный пункт меню
     */
    selectedId: 2,

    /**
     * Видимость меню
     */
    visibility: false,

    /**
     * Список пунктов меню
     */
    items: [
        { name: 'Заказы', id: 1, path: 'order.list' },
        { name: 'Новый Заказ', id: 2, path: 'order.create' },
        { name: 'Клиенты', id: 3, path: 'clientList' },
        { name: 'Доставки', id: 5, path: 'deliveryList' },
        { name: 'Сборки', id: 7, path: 'assembly' },
    ]
};

export default function (state = initialState, action) {
    switch (action.type) {
        /**
         * Выбирает пункт меню
         */
        case 'MENU.SELECT.ITEM':
            return {
                ...state,
                selectedId: action.id
            };

        /**
         * Изменяет видимость меню
         */
        case 'MENU.CHANGE.VISIBILITY':
            if (state.visibility === action.visibility) break;
            return {
                ...state,
                visibility: action.visibility
            };
        default: break;
    }
    return state;
}



