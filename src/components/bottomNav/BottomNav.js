import React from 'react';
import styles from './BottomNav.module.css';
import { NavLink } from 'react-router-dom'


function BottomNav(props) {
  return (
    <div >
      {props.children}
      <ul className={styles.container}>
        <li>
          <NavLink exact to="/" className={styles.NavLink} activeClassName={styles.active}>
            <i className="icofont-home"></i>
            <span>首页</span>
          </NavLink>
        </li>

        <li>
          <NavLink to="shop" className={styles.NavLink} activeClassName={styles.active}>
            <i className="icofont-bank-alt"></i>
            <span>商城 (无数据)</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/life" className={styles.NavLink} activeClassName={styles.active}>
            <i className="icofont-anchor"></i>
            <span>生活服务 (无数据)</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/mine" className={styles.NavLink} activeClassName={styles.active}>
            <i className="icofont-user-alt-5"></i>
            <span>我的</span>
          </NavLink>
        </li>
      </ul>
    </div>
  )
}

export default BottomNav
