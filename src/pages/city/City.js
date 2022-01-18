import React, { useState, useEffect } from 'react';
import PubHeader from '../../components/pubheader/PubHeader';
import styles from './City.module.css';
import api from '../../api/api';
import CityList from './cityList/CityList';

export default function City(props) {
  const [cityList, setcityList] = useState([])

  useEffect(() => {
    api.getCityList().then(res => {
      if (res.status == 200) {
        setcityList(res.data.result)
      }
    }).catch(err => console.log("err is ", err))
  }, []);

  return (
    <div className={styles.container}>
      <PubHeader title="城市选择" />
      <CityList cityList={cityList} />
    </div>
  )
}
