import modelUnitBase from '../model/unit/base';

const initialState = {
    hash: {},

    li: [
        {
            id: 1,
            nameS: 'шт',
            nameF: 'штука',
            note: 'единица',
        },
        {
            id: 2,
            nameS: 'км',
            nameF: 'километр',
            note: '',
        },
        {
            id: 3,
            nameS: 'этаж',
            nameF: 'этаж',
            note: ''
        },
        {
            id: 4,
            nameS: '20 м',
            nameF: 'каждые 20 метров',
            note: '',
        },
        {
            id: 5,
            nameS: 'адрес',
            nameF: 'один адрес',
            note: ''
        },
        {
            id: 6,
            nameS: 'ед',
            nameF: 'единица',
            note: ''
        },
    ].map(modelUnitBase)
};

initialState.li.forEach(unit => {
    initialState.hash[unit.id] = unit;
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
