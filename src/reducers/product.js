const initialState = {
    hash: {},

    /**
     * По разделам
     */
    section: {
        'DELIVERY': [],
        'ASSEMBLY': [],
    },
    
    li: [
        {
            id: 1,
            nameS: 'По Москве в пределах МКАД, крупногабаритную мебель',
            nameL: 'По Москве в пределах МКАД, крупногабаритную мебель',
            cost: 140000,
            unitId: 5,
            type: 'SERVICE',
            section: 'DELIVERY'
        },
        {
            id: 2,
            nameS: 'По Москве в пределах МКАД, мелкогабаритную мебель (до 10 кг)',
            nameL: 'По Москве в пределах МКАД, мелкогабаритную мебель (до 10 кг)',
            cost: 100000,
            unitId: 5,
            type: 'SERVICE',
            section: 'DELIVERY'
        },
        {
            id: 3,
            nameS: 'С выездом за МКАД (прибавляется к доставке в пределах МКАД)',
            nameL: 'С выездом за МКАД (прибавляется к доставке в пределах МКАД)',
            cost: 3500,
            unitId: 2,
            type: 'SERVICE',
            section: 'DELIVERY'
        },
        {
            id: 4,
            nameS: 'Занос в квартиру (первый этаж или на лифте)',
            nameL: 'Занос в квартиру (первый этаж или на лифте)',
            cost: 30000,
            unitId: 1,
            type: 'SERVICE',
            section: 'DELIVERY'
        },
        {
            id: 5,
            nameS: 'Подъем без лифта',
            nameL: 'Подъем без лифта',
            cost: 25000,
            unitId: 3,
            type: 'SERVICE',
            section: 'DELIVERY'
        },
        {
            id: 6,
            nameS: 'Пронос товара более 20 метров',
            nameL: 'Пронос товара более 20 метров',
            cost: 15000,
            unitId: 4,
            type: 'SERVICE',
            section: 'DELIVERY'
        },
        {
            id: 7,
            nameS: 'Выезд сборщика за МКАД до 10 км',
            nameL: 'Выезд сборщика за МКАД до 10 км',
            cost: 35000,
            unitId: 5,
            type: 'SERVICE',
            section: 'ASSEMBLY'
        },
    ],
};

initialState.li.forEach(product => {
    initialState.hash[product.id] = product;
});

initialState.li.forEach(product => {
    initialState.section[product.section][product.id] = product;
});

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
