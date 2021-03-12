let ADD_POST = 'ADD-POST';
let NEW_POST_TEXT = 'NEW-POST-TEXT';

const store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likesCount: 12},
                {id: 2, message: 'It\'s my first post', likesCount: 11},
                {id: 3, message: 'Blabla', likesCount: 11},
                {id: 4, message: 'Dada', likesCount: 11}
            ],
            postTextInput: ''
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Dimych'},
                {id: 2, name: 'Andrew'},
                {id: 3, name: 'Sveta'},
                {id: 4, name: 'Sasha'},
                {id: 5, name: 'Viktor'},
                {id: 6, name: 'Valera'}
            ],
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How is your it-kamasutra?'},
                {id: 3, message: 'Yo'},
                {id: 4, message: 'Yo'},
                {id: 5, message: 'Yo'}
            ]
        },
        sidebar: {}
    },
    getState() {
        return this._state
    },
    _callSubscriber() {
        console.log('dwadawdwa');

    },
    subscribe(observer) {
        this._callSubscriber = observer
    },

    dispatch(action) {
        if (action.type === "ADD-POST") {
            let newPost = {id: 5, message: this._state.profilePage.postTextInput, likesCount: 111}
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.postTextInput = ''
            this._callSubscriber(this._state)
        } else if (action.type === "NEW-POST-TEXT") {
            this._state.profilePage.postTextInput = action.newText
            this._callSubscriber(this._state)
        }

    }
}
export const addPostActionCreator = () => ({type: ADD_POST,})
export const newPostTextActionCreator = (text) => ({type: NEW_POST_TEXT,newText: text,})

export default store


