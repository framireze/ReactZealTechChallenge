const initialState = {
    users: [],
}

interface Action {
    type: string;
    paylod: any;
  }

export const userReducer = (state= initialState, action: Action) => {
    switch (action.type) {
        case 'load':
            return {
                ...state,
                users: [...action.paylod]
            }
        default:
            return state
    }

}