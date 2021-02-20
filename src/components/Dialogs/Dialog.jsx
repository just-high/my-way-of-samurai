import React from 'react';
import s from './Dialog.module.css';
import { Link, NavLink } from "react-router-dom";


const Dialog = () => {
  return (
    <div className={s.wraper}>
      <div className={s.dialogItems}>
        <div className={s.dialog}><NavLink to="/dialog/1" activeClassName={s.active}>Riki</NavLink></div>
        <div className={s.dialog}><NavLink to="/dialog/2" activeClassName={s.active}>Kano</NavLink></div>
        <div className={s.dialog}><NavLink to="/dialog/3" activeClassName={s.active}>Lara</NavLink></div>
        <div className={s.dialog}><NavLink to="/dialog/4" activeClassName={s.active}>Lukas</NavLink></div>
      </div>
      <div className={s.messagesItems}>
        <div className={s.messages}>Hello</div>
        <div className={s.messages}>what abou you?</div>
        <div className={s.messages}>do not ignore me!!!!!!!</div>
      </div>
    </div>
  )
}

export default Dialog;