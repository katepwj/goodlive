import React from 'react';
import styles from "./BuyAndStore.module.css"
import { useSelector, useDispatch } from "react-redux";


function BuyAndStore(props) {

  //从redux中获取收藏列表
  const favoriteReducer = useSelector(state => state.favoriteReducer)

  const dispatch = useDispatch()

  //检查当前商品是否已收藏
  const isFavorited = (id) => {
    return favoriteReducer.some(item => item.id == id)
  }

  //将当前商品添加到收藏列表中
  const addFavorites = (item, id) => {
    if (isFavorited(id)) {
      unFavorites(id)
    }
    else {
      dispatch({ type: "FAVORITE", item })
    }
  }

  //将当前商品从收藏列表中移除
  const unFavorites = (id) => {
    dispatch({ type: "UNFAVORITE", id: props.id })

  }

 

  //根据当前商品是否已收藏显示不同收藏button
  const favoriteBtn = () => {
    return isFavorited(props.id) ?
      <button className={styles.favorited} onClick={() => unFavorites(props)}>已收藏</button> :
      <button onClick={() => addFavorites(props, props.id)}>收藏</button>
  }

   //如果需要购买当前商品
   const toPurchase = () => {
    alert("如需购买，请联系销售，谢谢！")
  }

  return (
    <div className={styles.container}>
      {favoriteBtn()}
      <button onClick={toPurchase}>购买</button>
    </div>
  )
}

export default BuyAndStore
