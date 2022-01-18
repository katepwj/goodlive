import React from 'react';
import { Link } from "react-router-dom";
import styles from "./SearchListView.module.css";
import BuyAndStore from '../buyAndStore/BuyAndStore';
import SplitLine from './../splitLine/SplitLine'

function SearchListView(props) {
  return (
    <div>
      <ul className={styles.container}>
        {props.searchList.map((val, index) => {
          return (
            <li key={index}>
              <Link to={`/detail/${val.id}`} className={styles.link}>
                <li><img src={val.img} /></li>
                <div className={styles.content}>
                  <li> House ID : <span>{val.id}</span></li>
                  <li> 售价：￥ <span>{val.price}</span></li>
                  <li> 房子类型：<span>{val.houseType}</span></li>
                  <li> 租房类型：<span>{val.rentType}</span></li>
                </div>
              </Link>
              <SplitLine />
            </li>

          )
        })}
      </ul>
    </div>
  )
}

export default SearchListView
