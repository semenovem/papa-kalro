const initialState = {
    has: false
};

export default function (state = initialState, action) {

    switch (action.type) {

        /**
         * 
         */
        case 'ORDER.LIST.CREATED':
            return action.modelOrderEdit;



        default: break;
    }
    return state;
}
