import React from 'react';
import PubHeader from '../../components/pubheader/PubHeader';
import styles from './MyFavorites.module.css';
import { useSelector, useDispatch } from "react-redux";
import SearchListView from '../../components/searchListView/SearchListView';
import SplitLine from '../../components/splitLine/SplitLine';

function MyFavorites() {
  const favoriteReducer = useSelector(state => state.favoriteReducer)
  const dispatch = useDispatch()

  return (
    <div className={styles.container} >

      <PubHeader title="我的收藏" />

      {favoriteReducer.length > 0 && <div className={styles.right}>
        <h4 onClick={() => { dispatch({ type: "CLEARFAVORITE" }) }}>清空收藏 </h4>
        <i className="icofont-bin icofont-2x"></i>
      </div>}


      {favoriteReducer.length > 0 ? < SearchListView searchList={favoriteReducer} /> : <h2 className={styles.content}>你还未有任何收藏，请添加收藏！</h2>}


    </div>
  )
}

export default MyFavorites
