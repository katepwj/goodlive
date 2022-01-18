import React, { useState } from 'react';
import {
  Link,
} from "react-router-dom";
import styles from './HeaderNav.module.css';
import { useSelector, useDispatch } from "react-redux";
import SearchInput from '../searchInput/SearchInput';


function HeaderNav() {
  const cityReducer = useSelector(state => state.cityReducer)

  return (
    <div className={styles.container}>
      <div>
        <Link to="/city" className={styles.link}>
          {cityReducer.cityName}
        </Link>
        <i className="icofont-simple-down"></i>
      </div>
      <SearchInput />
      <div>
        <Link to="/myfavorites" className={styles.link}>
          <i className="icofont-favourite icofont-2x"></i>
        </Link>
      </div>

    </div>
  )
}

export default HeaderNav
