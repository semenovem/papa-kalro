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
    const type = action.type;
    let newState;

    if (!Array.prototype.every.call('MENU', (char, index) => char === type[index])) {
        return state;
    }

    switch (action.type) {
        /**
         * Выбирает пункт меню
         */
        case 'MENU.SELECT.ITEM':
            newState = {
                ...state,
                selectedId: action.id
            };
            break;

        /**
         * Изменяет видимость меню
         */
        case 'MENU.CHANGE.VISIBILITY':
            if (state.visibility === action.visibility) break;
            newState = {
                ...state,
                visibility: action.visibility
            };
            break;

        /**
         * Вернуться на предыдущий пункт меню
         */
        case 'MENU.MOVE.BACK':
            if (state.visibility === action.visibility) break;
            newState = {
                ...state
            };
            break;

        /**
         * Выбирает пункт меню по названию todo временно, подобрать нормальное название
         */
        case 'MENU.SELECT.ITEM.AT.PATH':
            newState = {
                ...state,
                selectedId: state.items.find(item => item.path === action.path).id
            };
            break;


        default: newState = state;
    }

    return newState;
}



