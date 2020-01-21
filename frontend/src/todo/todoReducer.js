const INITIAL_STATE = { description: '', list: [] }

/** Reducer que cria um novo estado, o state envia a alteração para o React  */
export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case 'DESCRIPTION_CHANGED': 
            return { ...state, description: action.payload }
        case 'TODO_SEARCHED': 
            return { ...state, list: action.payload }
        case 'TODO_ADDED': 
        case 'TODO_CLEAR': 
            return { ...state, description: '' }
        default:
            return state
    }
}