const initialState = {
    has: false,

    /**
     * Список заказов
     */
    li: [],

    
    filter: {
        

    },

    sort: {}
};

export default function (state = initialState, action) {
    const type = action.type;
    let newState;

    if (!Array.prototype.every.call('ORDER.LIST', (char, index) => char === type[index])) {
        return state;
    }

    switch (type) {
        
        /**
         * Добавляет новую запись в список
         */
        case 'ORDER.LIST.ADD':
            return {
                ...state,
                li: [...state.li, action.model]
            };

        /**
         * Обновляет данные записи
         */
        case 'ORDER.LIST.UPDATE':
            return {
                ...state,
                li: [...state.li]
            };



        default: newState = state;
    }

    return newState;
}
