import React from 'react'
import {connect} from "react-redux";
import {followAC, setUsersAC, tglAC, unfollowAC} from "../../redux/usersReducer";
import Users from "./Users";


let mapStateToProps = (state)=>{
    return {
        users:state.usersPage.users
    }
}
let mapDispatchToProps = (dispatch) =>{
    return {
        follow: (userId) =>{
            dispatch (followAC(userId))
        },
        unfollow: (userId) =>{
            dispatch (unfollowAC(userId))
        },
        setUsers: (users) =>{
            dispatch (setUsersAC(users))
        },
        tgl: (userId)=>{
            dispatch(tglAC(userId))}
    }
}
export const UsersContainer = connect(mapStateToProps,mapDispatchToProps)(Users)
