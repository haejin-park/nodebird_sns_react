export const initialState = {
    mainPosts:[{
        id:1,
        User:{
            id:1,
            nickname: '해지니1',
        },
        content: '첫 번째 게시글 #해시태그 #행복한집사생활',
        Images:[{
            src: 'https://cdn.pixabay.com/photo/2017/08/08/17/54/dog-2612081_1280.jpg'
        },{
            src: 'https://cdn.pixabay.com/photo/2018/07/13/10/20/kittens-3535404_1280.jpg'
        },{ 
            src: 'https://cdn.pixabay.com/photo/2017/07/25/01/22/cat-2536662_1280.jpg'
        }],
        Comments: [{
            User: {
                nickname:'해지니2'
            }, 
            content: '고양이는 다 기여벙',
        }, {
            User: {
                nickname:'해지니3'
            }, 
            content: '냥냥냥'
        }]
    }],
    imagePaths: [], //게시물 저장 경로
    addPostLoading: false, //게시글 추가 완료시 true
    addPostDone: false,
    addPostError: null,
}
export const ADD_POST_REQUEST = 'ADD_POST_REQUEST';
export const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
export const ADD_POST_FAILURE = 'ADD_POST_FAILURE';

export const ADD_COMMENT_REQUEST = 'ADD_COMMENT_REQUEST';
export const ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS';
export const ADD_COMMENT_FAILURE = 'ADD_COMMENT_FAILURE';

export const addPost = (data) => ({
    type: ADD_POST_REQUEST,
    data
});

export const addComment = (data) => ({
    type: ADD_COMMENT_REQUEST,
    data
});

const dummyPost = {
    id: 2,
    content: '더미데이터',
    User: {
        id:1,
        nickname:'해지니',
    },
    Images: [],
    Comments: [],
};

const reducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_POST_REQUEST:
            return {
                ...state,
                addPostLoading: true,
                addPostDone: false,
                addPostError: null,
            };
        case ADD_POST_SUCCESS:
            return {
                ...state,
                mainPosts: [dummyPost, ...state.mainPosts],
                addPostLoading: false,
                addPostDone: true
            };
        case ADD_POST_FAILURE:
            return {
                ...state,
                addPostLoading: false,
                addPostError: action.error
            }
        case ADD_COMMENT_REQUEST:
            return {
                ...state,
                addCommentLoading: true,
                addCommentDone: false,
                addCommentError: null,
            };
        case ADD_COMMENT_SUCCESS:
            return {
                ...state,
                addCommentLoading: false,
                addCommentDone: true
            };
        case ADD_COMMENT_FAILURE:
            return {
                ...state,
                addCommentLoading:false,
                addCommentError: action.error
            }
    
        default:
            return state;
    }
}
export default reducer; 