import ModelProductFactory from '../model/product/factory';

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
            nameS: 'Крупногабаритная мебель, в пределах МКАД (1-2 ед.мебели)',
            nameF: '',
            desc: '',
            cost: 120000,
            unitId: 5,
            type: 'SERVICE',
            section: 'DELIVERY'
        },
        {
            id: 2,
            nameS: 'Крупногабаритная мебель, в пределах МКАД (от 3 до 5 ед.мебели)',
            nameF: '',
            desc: '',
            cost: 160000,
            unitId: 5,
            type: 'SERVICE',
            section: 'DELIVERY'
        },
        {
            id: 3,
            nameS: 'Крупногабаритная мебель, в пределах МКАД (более 5 ед.мебели)',
            nameF: '',
            desc: '',
            cost: 220000,
            unitId: 5,
            type: 'SERVICE',
            section: 'DELIVERY'
        },
        {
            id: 4,
            nameS: 'Диван, в пределах МКАД',
            nameF: '',
            desc: '',
            cost: 140000,
            unitId: 5,
            type: 'SERVICE',
            section: 'DELIVERY'
        },
        {
            id: 5,
            nameS: '2-х диванов, в пределах МКАД',
            nameF: '',
            desc: '',
            cost: 180000,
            unitId: 5,
            type: 'SERVICE',
            section: 'DELIVERY'
        },
        {
            id: 6,
            nameS: 'от 3-х до 5-и диванов, в пределах МКАД',
            nameF: '',
            desc: '',
            cost: 180000,
            unitId: 5,
            type: 'SERVICE',
            section: 'DELIVERY'
        },
        {
            id: 7,
            nameS: 'С выездом за МКАД (прибавляется к доставке в пределах МКАД)',
            nameF: '',
            desc: '',
            cost: 3500,
            unitId: 2,
            type: 'SERVICE',
            section: 'DELIVERY'
        },

        // Подъем и занос мебели
        {
            id: 8,
            nameS: 'Занос в квартиру корпусной мебели (первый этаж или на лифте, за единицу мебели)',
            nameF: '',
            desc: '',
            cost: 30000,
            unitId: 5,
            type: 'SERVICE',
            section: 'DELIVERY'
        },
        {
            id: 9,
            nameS: 'Занос в квартиру дивана (первый этаж или на лифте)',
            nameF: '',
            desc: '',
            cost: 50000,
            unitId: 5,
            type: 'SERVICE',
            section: 'DELIVERY'
        },

        {
            id: 10,
            nameS: 'Подъем без лифта (за единицу)',
            nameF: '',
            desc: '',
            cost: 25000,
            unitId: 3,
            type: 'SERVICE',
            section: 'DELIVERY'
        },

        {
            id: 11,
            nameS: 'Пронос товара более 20 метров',
            nameF: '',
            desc: '',
            cost: 15000,
            unitId: 4,
            type: 'SERVICE',
            section: 'DELIVERY'
        },



        // работы при доставке грузчиками
        {
            id: 12,
            nameS: 'Сборка (5% от стоимости мебели)',
            nameF: '',
            desc: '',
            costMin: 800,
            costMax: 100000,
            costPercent: 5,
            unitId: 6,
            type: 'SERVICE',
            section: 'DELIVERY'
        },
        {
            id: 13,
            nameS: 'Разбор дивана с целью уменьшения габаритов (для вноса в помещение) (2.5% от стоимости)',
            nameF: '',
            desc: '',
            costMin: 400,
            costPercent: 2.5,
            unitId: 4,
            type: 'SERVICE',
            section: 'DELIVERY'
        },



        {
            id: 100,
            nameS: 'Выезд сборщика за МКАД до 10 км',
            nameF: '',
            desc: '',
            cost: 25000,
            unitId: 5,
            type: 'SERVICE',
            section: 'ASSEMBLY'
        },

        {
            id: 101,
            nameS: 'Выезд сборщика за МКАД свыше 10 км',
            nameF: '',
            desc: '',
            cost: 25,
            unitId: 2,
            type: 'SERVICE',
            section: 'ASSEMBLY'
        },

        {
            id: 101,
            nameS: 'Корпусная мебель (прихожая, комод, кресло, кровать, тумба) 10%',
            nameF: '',
            desc: '',
            cost: 120000,
            unitId: 6,
            type: 'SERVICE',
            section: 'ASSEMBLY'
        },

    ].map(ModelProductFactory),
};



initialState.li.forEach(product => {
    initialState.hash[product.id] = product;
});

initialState.li.forEach(product => {
    initialState.section[product.section].push(product);
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
