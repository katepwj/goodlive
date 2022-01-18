import React, { useState, useEffect } from 'react';
import styles from './Detail.module.css';
import api from '../../api/api'
import BuyAndStore from '../../components/buyAndStore/BuyAndStore';
import PubHeader from '../../components/pubheader/PubHeader';
import Carousel from '../../components/carousel/Carousel'

function Detail(props) {
  const [detail, setdetail] = useState("");

  useEffect(() => {
    api.getDetail({ id: props.match.params.id }).then(res => {
      setdetail(res.data.result[0])
    }).catch(err => console.log("detail err:", err))
  }, [])



  return (
    <div className={styles.container}>
      <PubHeader title="详情页" />
      <Carousel />
      <ul className={styles.content}>
        <li><h2>{detail.title}</h2></li>
        <li> House ID : <span>{detail.id}</span></li>
        <li> 售价：￥ <span>{detail.price}</span></li>
        <li> 房子类型：<span>{detail.houseType}</span></li>
        <li> 租房类型：<span>{detail.rentType}</span></li>
        <li><BuyAndStore {...detail} /></li>
      </ul>
    </div>
  )
}

export default Detail
