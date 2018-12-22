const defaultState = {
    list: []
}
const backgroundColor = ['#ff0000','#993300','#ff6600','#ffff66','#ff99cc','#ff33cc','#0066ff','#009900','#ffffff']

const targets = (state = defaultState, action) => {
    switch (action.type) {
        case 'ADD_TARGET':
            const x = Math.floor(Math.random() * 80) + 10;
            const y = Math.floor(Math.random() * 80) + 10;
            const value = Math.floor(Math.random() * 6) + 3;
            return {
                list: [...state.list, { id: action.id, x, y, value, backgroundColor: backgroundColor[value - 1] }],
                lastElementId: action.id
            }
        case 'DECREMENT_TARGET_VALUE':
            const list = state.list;
            list.forEach(elt =>
                elt.id === action.id ? (elt.value = elt.value - 1, elt.backgroundColor = backgroundColor[elt.value - 1]) : elt
            );
            return {
                ...state,
                list: list
            }
        case 'DELETE_TARGET':
            return {
                ...state,
                list: state.list.filter(target => target.id !== action.id)
            }
        case 'RESET':
            return {
                ...state,
                list: []
            }
        default:
            return state;
    }
};

export default targets;
