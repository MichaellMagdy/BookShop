export default (state = { allBooks: [] }, action) => {
    switch (action.type) {
        case 'GET_ALL_BOOKS':
            return { ...state, allBooks: action.payload };
       
        default:
            return state
    }
}