export const initalState = {
    isLoggingIn: false, //login시도중
    isLoggedIn: false,
    isLoggingOut: false, //logout시도중
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

export const logoutRequestAction = () => {
    return {
        type: 'LOG_OUT_REQUEST'
    }
}

const reducer = (state = initalState, action) => {
    switch(action.type){
        case 'LOG_IN_REQUEST':
            console.log('reducer logIn');
            return {
                ...state,
                isLoggingIn: true,
            };
        case 'LOG_IN_SUCCESS':
            return {
                ...state,
                isLoggingIn: false,
                isLoggedIn: true,
                me:{ ...action.data, nickname: 'zerocho'}
            }; 
        case 'LOG_IN_FAILURE':
            return {
                ...state,
                isLoggingIn: false,
                isLoggedIn: false,
            }; 
        case 'LOG_OUT_REQUEST':
            return {
                ...state,
                isLoggingOut: true,
            };
        case 'LOG_OUT_SUCCESS':
            return {
                ...state,
                isLoggingOut:false,
                isLoggedIn: false,
                me:null
            };
        case 'LOG_OUT_FAILURE':
            return {
                ...state,
                isLoggingOut:false,
                isLoggedIn: false,
            };
        default:
            return state;
    }
}
export default reducer;