export const initalState = {
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
    postAdded: false //게시글 추가 완료시 true
}

const ADD_POST = 'ADD_POST'; 
export const addPost = {
    type: ADD_POST
}

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

const reducer = (state = initalState, action) => {
    switch(action.type){
        case ADD_POST:
            return {
                ...state,
                mainPosts: [dummyPost, ...state.mainPosts],
                postAdded: true,
            };
        default:
            return state;
    }
}
export default reducer; 