import {getAuthUserData} from "./auth-reducer";

const SET_INIT = "SET_INIT";

let initialState = {
    init: false,
};

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_INIT:
            return {
                ...state,
                init: true,
            }
        default:
            return state;
    }
}

export const setInit = () => ({type: SET_INIT})

export const initApp = () => (dispatch) => {
    let promise = dispatch(getAuthUserData());
    promise.then(() => {
        dispatch(setInit());
    })
}

export default appReducer;