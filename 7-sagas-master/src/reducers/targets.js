const defaultState = {
    list: []
}
const backgroundColor = ['#b32400', '#ff3300', '#ff5c33', '#ffcc66', '#ffad33', '#ff9900', '#00ff00', '#00cc00', '#009933']

const targets = (state = defaultState, action) => {
    switch (action.type) {
        case 'ADD_TARGET':
            const x = Math.floor(Math.random() * 80) + 10;
            const y = Math.floor(Math.random() * 80) + 10;
            const value = Math.floor(Math.random() * 9) + 3;
            return {
                list: [...state.list, { id: action.id, x, y, value, backgroundColor: backgroundColor[0] }],
                lastElementId: action.id
            }
        case 'DECREMENT_TARGET_VALUE':
            const list = state.list;
            list.forEach(elt =>
                elt.id === action.id ? (elt.value = elt.value - 1, elt.backgroundColor = backgroundColor[elt.value]) : elt
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
