import React, { useState, useEffect } from 'react';
import HomeListView from '../homeListView/HomeListView';
import api from '../../../api/api';
import styles from './HomeList.module.css'

function HomeList() {
  const [hotList1, sethotList1] = useState([])
  const [hotList2, sethotList2] = useState([])

  useEffect(() => {
    api.getHomeHot1().then(res => {
         if (res.status == 200) {
        sethotList1(res.data.result)
        }
    }).catch(err => console.log("err is ", err))
  }, []);


  useEffect(() => {
    api.getHomeHot2().then(res => {
      if (res.status == 200) {
        sethotList2(res.data.result);
       }
    }).catch()
  }, [])

  return (
    <div >
      {hotList1.length ? <HomeListView data={hotList1} title="热销单品" /> : "loading....."}

      {hotList2.length ? <HomeListView data={hotList2} title="新品推荐" item={hotList2[0]}/> : "loading....."}
    </div>
  )
}

export default HomeList
