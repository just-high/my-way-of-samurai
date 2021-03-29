let initialState = {
    users: [],
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW :
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.id) {
                        return {...u, following: true}
                    }
                    return u
                }),
            }
        case UNFOLLOW :
            return {
                ...state,
                users: state.users.map(u => {
                        if (u.id === action.id) {
                            return {...u, following: true}
                        }
                        return u
                    }
                )
            }
        case SETUSERS:
            return {
                ...state,
                users: [...state.users, ...action.users]
            }
        case TGL:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, following: !u.following}
                    }
                    return u
                })
            }
        default:
            return state
    }
}

export default usersReducer


const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const TGL = "TGL"
const SETUSERS = 'SET-USERS';
export const followAC = () => ({type: FOLLOW, userId: 1})
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId: userId})
export const setUsersAC = (users) => ({type: SETUSERS, users: users})
export const tglAC = (userId) => ({type: TGL, userId: userId})
