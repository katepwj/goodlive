import React from 'react'
import SplitLine from '../../components/splitLine/SplitLine'
import {
  Link,
} from "react-router-dom";
import PubHeader from '../../components/pubheader/PubHeader';
import styles from './Mine.module.css'
import HeaderNav from '../../components/headerNav/HeaderNav';
import BottomNav from '../../components/bottomNav/BottomNav';

function Mine() {
  return (
    <div >
      <PubHeader title="我的主页" />
      <div className={styles.container}>
        <div className={styles.user}>
          <img src="https://p.nanrenwo.net/uploads/allimg/190515/8507-1Z515163304.png" />
          <div className={styles.info}>
            <h3>用户名: Kate</h3>
            <h3 style={{ color: 'grey' }}>用户id: 12345678</h3>
          </div>


        </div>
        <SplitLine />
        <div className={styles.link}>
          <Link to="/myfavorites" className={styles.link}>
            <h2>查看我的收藏</h2>
          </Link>
        </div>
      </div>
      {/* <div className={styles.BottomNav}>
        <BottomNav />
      </div> */}
    </div>
  )
}

export default Mine
