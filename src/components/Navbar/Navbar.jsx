import React from 'react';
import s from './Navbar.module.css';
import { Link, NavLink } from "react-router-dom";

console.log(s);
// let s = {
//     'nav': 'Navbar_nav__3ou9Q',
//     'item': 'Navbar_item__3qaF3',
//     'active' : 'Baksndakdn_actve'
// }

let c1 = "item";
let c2 = "active";
// "item active"
let classes = c1 + " " + c2;
let classesNew = `${s.item} ${c2}`;


const Navbar = () => {
    return <nav className={s.nav}>
        <div className={s.item}>
            <NavLink to='/profile' activeClassName={s.activeLink}>Profile</NavLink>
        </div>
        <div className={`${s.item} ${s.active}`} >
            <Link to='/dialog' activeClassName={s.activeLink}>Dialogs</Link>
        </div>
        <div className={s.item}>
            <Link to='/news' activeClassName={s.activeLink}>News</Link>
        </div>
        <div className={s.item}>
            <Link to='/music' activeClassName={s.activeLink}>Music</Link>
        </div>
        <div className={s.item}>
            <Link to='/settings' activeClassName={s.activeLink}>Settings</Link>
        </div>
    </nav>
}

export default Navbar;