import shortId from 'shortid';
import {produce} from 'immer';
import faker from 'faker';

export const initialState = {
    mainPosts:[{
        id:1,
        User:{
            id:1,
            nickname: '해지니1',
        },
        content: '첫 번째 게시글 #해시태그 #행복한집사생활',
        Images:[{
            id: shortId.generate(),
            src: 'https://cdn.pixabay.com/photo/2017/08/08/17/54/dog-2612081_1280.jpg'
        },{
            id: shortId.generate(),
            src: 'https://cdn.pixabay.com/photo/2018/07/13/10/20/kittens-3535404_1280.jpg'
        },{ 
            id: shortId.generate(),
            src: 'https://cdn.pixabay.com/photo/2017/07/25/01/22/cat-2536662_1280.jpg'
        }],
        Comments: [{
            id: shortId.generate(),
            User: {
                id: shortId.generate(),
                nickname:'해지니2'
            }, 
            content: '고양이는 다 기여벙',
        }, {
            id: shortId.generate(),
            User: {
                id: shortId.generate(),
                nickname:'해지니3'
            }, 
            content: '냥냥냥'
        }]
    }],
    imagePaths: [], //게시물 저장 경로
    addPostLoading: false, //게시글 추가 완료시 true
    addPostDone: false,
    removePostError: null,
    removePostLoading: false, //게시글 삭제 완료시 true
    removePostDone: false,
    addPostError: null,
    addCommentLoading: false,
    addCommentDone: false,
    addCommentError: null,
}
initialState.mainPosts = initialState.mainPosts.concat(
    Array(20).fill().map(() => ({
        id: shortId.generate(),
        User: {
            id: shortId.generate(),
            nickname: faker.name.findName()
        },
        content: faker.lorem.paragraph(),
        Images: [{
            src: 'https://cdn.pixabay.com/photo/2017/07/25/01/22/cat-2536662_1280.jpg' //faker.image.imageUrl(640, 480, true), lorempixel.com 고장나서 임시로
        }],
        Comments: [{
            User: { 
                id:shortId.generate(),
                nickname:faker.name.findName(),
            },
            content:faker.lorem.sentence(),
        }],
    }))
);

export const ADD_POST_REQUEST = 'ADD_POST_REQUEST';
export const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
export const ADD_POST_FAILURE = 'ADD_POST_FAILURE';

export const REMOVE_POST_REQUEST =  'REMOVE_POST_REQUEST';
export const REMOVE_POST_SUCCESS =  'REMOVE_POST_SUCCESS';
export const REMOVE_POST_FAILURE =  'REMOVE_POST_FAILURE';

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

const dummyPost = (data) => ({
    id: data.id,
    content: data.content,
    User: {
        id:1,
        nickname:'해지니',
    },
    Images: [],
    Comments: [],
});

const dummyComment = (data) => ({
    id: shortId.generate(),
    content: data,
    User: {
        id: 1,
        nickname: '제로초'
    },
});
// 이전 상태를 액션을 통해 다음 상태로 만들어내는 함수(불변성 지키면서(immer를 사용하면 알아서 다음 상태 불변성 있게 만들어주니까 불변성 안지키게 코드 작성해야함))
const reducer = (state = initialState, action) => produce(state, (draft) => {
    switch(action.type){
        case ADD_POST_REQUEST:
            draft.addPostLoading = true;
            draft.addPostDone = false;
            draft.addPostError = null;
            break;

        case ADD_POST_SUCCESS:
            draft.addPostLoading = false;
            draft.addPostDone = true;
            draft.mainPosts.unshift(dummyPost(action.data));
            break;

        case ADD_POST_FAILURE:
            draft.addPostLoading = false;
            draft.addPostError = action.error;
            break;

        case REMOVE_POST_REQUEST:
            draft.removePostLoading = true;
            draft.removePostDone = false;
            draft.removePostError = null;
            break;

        case REMOVE_POST_SUCCESS:                 
            draft.removePostLoading = false;
            draft.removePostDone = true;
            draft.mainPosts = draft.mainPosts.filter((v)=> v.id !== action.data);
            break;

        case REMOVE_POST_FAILURE:
            draft.removePostLoading = false;
            draft.removePostError = action.error;
            break;

        case ADD_COMMENT_REQUEST:
            draft.addCommentLoading = true;
            draft.addCommentDone = false;
            draft.addCommentError = null;
            break;

        case ADD_COMMENT_SUCCESS: 
            const post = draft.mainPosts.find((v) => v.id === action.data.postId);
            post.Comments.unshift(dummyComment(action.data.content));
            draft.addCommentLoading = false;
            draft.addCommentDone = true;
            break;

        case ADD_COMMENT_FAILURE:
            draft.addCommentLoading = false,
            draft.addCommentError = action.error
            break;

        default:
            break;
    }
});

export default reducer; 