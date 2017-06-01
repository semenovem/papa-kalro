const initialState = [
    {
        id: 1,
        name: 'По Москве в пределах МКАД, крупногабаритную мебель',
        cost: 1400,
        unit: 'адрес',
        type: 'service',
        section: 'delivery'
    },
    {
        id: 2,
        name: 'По Москве в пределах МКАД, мелкогабаритную мебель (до 10 кг)',
        cost: 1000,
        unit: 'адрес',
        type: 'service',
        section: 'delivery'
    },
    {
        id: 3,
        name: 'С выездом за МКАД (прибавляется к доставке в пределах МКАД)',
        cost: 35,
        unit: 'км',
        type: 'service',
        section: 'delivery'
    },
    {
        id: 4,
        name: 'Занос в квартиру (первый этаж или на лифте)',
        cost: 300,
        unit: 'шт',
        type: 'service',
        section: 'delivery'
    },
    {
        id: 5,
        name: 'Подьем без лифта',
        cost: 250,
        unit: 'этаж',
        type: 'service',
        section: 'delivery'
    },
    {
        id: 6,
        name: 'Пронос товара более 20 метров',
        cost: 150,
        unit: 'каждые 20 метров',
        type: 'service',
        section: 'delivery'
    },
    {
        id: 7,
        name: 'Выезд сборщика за МКАД до 10 км',
        cost: 350,
        unit: 'заказ',
        type: 'service',
        section: 'assembly'
    },
];

export default function(state = initialState, action) {
    //switch (action.type) {
    //    /**
    //     * Выбирает пункт меню
    //     */
    //    case 'MENU.SELECT.ITEM':
    //        return {
    //            ...state,
    //            selectedId: action.id
    //        };
    //
    //    /**
    //     * Изменяет видимость меню
    //     */
    //    case 'MENU.CHANGE.VISIBILITY':
    //        if (state.visibility === action.visibility) break;
    //        return {
    //            ...state,
    //            visibility: action.visibility
    //        };
    //    default: break;
    //}
    return state;
}
