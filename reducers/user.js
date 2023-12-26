export const initalState = {
    isLoggedIn: false,
    me:null,
    signUpData:{},
    loginData:{}
}

export const loginAction = (data) => {
    return (dispatch, getState) => {
        const state = getState();
        setTimeout(() => {
            dispatch(loginRequestAction());
        }, 2000);
        dispatch(loginRequestAction());
        axios.post('/api/login')
            .then((res) => {
                dispatch(loginSuccessAction(res.data));
            })
            .catch((err) => {
                dispatch(loginFailureAction(err));
            });
    }
}

export const loginRequestAction = (data) => {
    return {
        type: 'LOG_IN_REQUEST',
         data
    }
}

export const loginSuccessAction = (data) => {
    return {
        type: 'LOG_IN_SUCCESS'
    }
}

export const loginFailureAction = (data) => {
    return {
        type: 'LOG_IN_FAILURE'
    }
}

export const logoutRequestAction = () => {
    return {
        type: 'LOG_OUT_REQUEST'
    }
}

export const logoutSuccessAction = () => {
    return {
        type: 'LOG_OUT_SUCCESS'
    }
}

export const logutFailureAction = () => {
    return {
        type: 'LOG_OUT_FAILURE'
    }
}

const reducer = (state = initalState, action) => {
    switch(action.type){
        case 'LOG_IN':
            return {
                ...state,
                isLoggedIn: true,
                me:action.data
            };
        case 'LOG_OUT':
            return {
                ...state,
                isLoggedIn: false,
                me:null
            };
        default:
            return state;
    }
}
export default reducer;