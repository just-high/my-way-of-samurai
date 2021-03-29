import React from 'react'
import s from './Users.module.css'
import axios from "axios";

class Users extends React.Component {
    getUsers = () => {
        if (this.props.users.length === 0) {
            axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
                debugger
                this.props.setUsers(response.data.items)
            })
        }
    }

    render() {
        return (
            <div>
                <button onClick={this.getUsers}>get users</button>
                {this.props.users.map((u) => (
                    <div key={u.id} className={s.wrapper}>
                        <div className={s.left}>
                            <img alt='ddd' src={u.photos.small}
                                 className={s.avatar}/>
                            <div>
                                <button id={u.id} className={s.button} onClick={btn}>{btnText(u.following)}</button>
                            </div>
                        </div>
                        <div className={s.right}>
                            <div className={s.right_left}>
                                <div>{u.name}</div>
                                <div>{u.status}</div>
                            </div>
                            <div className={s.right_right}>
                                <div>{"u.location.country"}</div>
                                <div>{"u.location.city"}</div>
                            </div>
                        </div>
                    </div>)
                )
                }
            </div>
        )
    }
}

export default Users;