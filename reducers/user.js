import {produce} from 'immer';

export const initialState = {
    loadMyInfoRequest:false,
    loadMyInfoSuccess:false,
    loadMyInfoFailure:null,
    followLoading: false, //follow시도중
    followDone: false,
    followError: null,
    unFollowLoading: false, //unFollow시도중
    unFollowDone: false,
    unFollowError: null,
    logInLoading: false, //login시도중
    logInDone: false,
    logInError: null,
    logOutLoading: false,//logout시도중
    logOutDone: false,
    logOutError: null,
    signUpLoading: false, //회원가입 시도중
    signUpDone: false,
    signUpError:null,
    changeNicknameLoading: false, //닉네임 시도중
    changeNicknameDone: false,
    changeNicknameError:null,
    me:null,
    signUpData:{},
    loginData:{}
}
export const LOAD_MY_INFO_REQUEST = 'LOAD_MY_INFO_REQUEST';
export const LOAD_MY_INFO_SUCCESS = 'LOAD_MY_INFO_SUCCESS';
export const LOAD_MY_INFO_FAILURE = 'LOAD_MY_INFO_FAILURE';

export const LOG_IN_REQUEST = 'LOG_IN_REQUEST';
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
export const LOG_IN_FAILURE = 'LOG_IN_FAILURE';

export const LOG_OUT_REQUEST = 'LOG_OUT_REQUEST';
export const LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS';
export const LOG_OUT_FAILURE = 'LOG_OUT_FAILURE';

export const SIGN_UP_REQUEST = 'SIGN_UP_REQUEST';
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
export const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE';

export const CHANGE_NICKNAME_REQUEST = 'CHANGE_NICKNAME_REQUEST';
export const CHANGE_NICKNAME_SUCCESS = 'CHANGE_NICKNAME_SUCCESS';
export const CHANGE_NICKNAME_FAILURE = 'CHANGE_NICKNAME_FAILURE';

export const FOLLOW_REQUEST = 'FOLLOW_REQUEST';
export const FOLLOW_SUCCESS = 'FOLLOW_SUCCESS';
export const FOLLOW_FAILURE = 'FOLLOW_FAILURE';

export const UNFOLLOW_REQUEST = 'UNFOLLOW_REQUEST';
export const UNFOLLOW_SUCCESS = 'UNFOLLOW_SUCCESS';
export const UNFOLLOW_FAILURE = 'UNFOLLOW_FAILURE';

export const ADD_POST_TO_ME = 'ADD_POST_TO_ME';
export const REMOVE_POST_OF_ME = 'REMOVE_POST_OF_ME';

export const loginAction = (data) => {
    return (dispatch) => {
        setTimeout(() => {
            dispatch(loginRequestAction());
        }, 2000);
        dispatch(loginRequestAction());
    }
}

export const loginRequestAction = (data) => {
    return {
        type: LOG_IN_REQUEST,
        data
    }
}

export const logoutRequestAction = () => {
    return {
        type: LOG_OUT_REQUEST
    }
}

const reducer = (state = initialState, action) => produce(state, (draft) => {
    switch(action.type){

        case LOAD_MY_INFO_REQUEST: 
            draft.loadMyInfoLoading = true;
            draft.loadMyInfoError = null;
            draft.loadMyInfoDone = false;
            break;
        
        case LOAD_MY_INFO_SUCCESS:
            draft.loadMyInfoLoading = false;
            draft.me = action.data;
            draft.loadMyInfoDone = true;
            break;

        case LOAD_MY_INFO_FAILURE:
            draft.loadMyInfoLoading = false;
            draft.loadMyInfoError = action.error;
            break;    

        case FOLLOW_REQUEST:
            draft.followLoading = true;
            draft.followError = null;
            draft.followDone = false;
            break;

        case FOLLOW_SUCCESS:
            draft.followLoading = false;
            draft.me.Followings.push({id: action.data});
            draft.followDone = true;
            break;

        case FOLLOW_FAILURE:
            draft.followLoading = false;
            draft.followError = action.error;
            break;

        case UNFOLLOW_REQUEST:
            draft.unFollowLoading = true;
            draft.unFollowError = null;
            draft.unFollowDone = false;
            break;

        case UNFOLLOW_SUCCESS:
            draft.unFollowLoading = false;
            draft.me.Followings = draft.me.Followings.filter((v) => v.id !== action.data); //언팔한사람만 빠지게
            draft.unFollowDone = true;
            break;

        case UNFOLLOW_FAILURE:
            draft.unFollowLoading = false;
            draft.unFollowError = action.error;
            break;    

        case LOG_IN_REQUEST:
            draft.logInLoading = true;
            draft.logInError = null;
            draft.logInDone = false;
            break;

        case LOG_IN_SUCCESS:
            draft.logInLoading = false;
            draft.logInDone = true;
            draft.me = action.data;
            break;

        case LOG_IN_FAILURE:
            draft.logInLoading = false;
            draft.logInError = action.error;
            break;

        case LOG_OUT_REQUEST:
            draft.logOutLoading = true;
            draft.logOutDone = false;
            draft.logOutError = null;
            break; 

        case LOG_OUT_SUCCESS:
            draft.logOutLoading = false;
            draft.logOutDone = true;
            draft.me = null;
            break;

        case LOG_OUT_FAILURE:
            draft.logOutLoading = false;
            draft.logOutError = action.error;
            break;
                
        case SIGN_UP_REQUEST:
            draft.signUpLoading = true;
            draft.signUpDone = false;
            draft.signUpError = null;
            break;

        case SIGN_UP_SUCCESS: 
            draft.signUpLoading = false;
            draft.signUpDone  = true;
            break;

        case SIGN_UP_FAILURE:
            draft.signUpLoading = false;
            draft.signUpError = action.error;
            break;

        case CHANGE_NICKNAME_REQUEST:
            draft.changeNicknameLoading = true;
            draft.changeNicknameDone = false;
            draft.changeNicknameError = null;
            break;

        case CHANGE_NICKNAME_SUCCESS: 
            draft.changeNicknameLoading = false;
            draft.changeNicknameDone = true;
            break;

        case CHANGE_NICKNAME_FAILURE:
            draft.changeNicknameLoading = false;
            draft.changeNicknameError = action.error;
            break;

        case ADD_POST_TO_ME:
            draft.me.Posts.unshift({id:action.data});
            break;

        case REMOVE_POST_OF_ME:
            draft.me.Posts = draft.me.Posts.filter((v) => v.id !== action.data);
            break;

        default:
            break;
    }
});

export default reducer;