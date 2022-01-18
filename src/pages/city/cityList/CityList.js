import React, { useState } from 'react';
import styles from './CityList.module.css';
import { useSelector, useDispatch } from "react-redux";
import { withRouter } from "react-router-dom"
import { init_city, changeCity } from '../../../redux/actions/actions'

function CityList(props) {
  
  const [cityClicked, setcityClicked] = useState()

  const dispatch = useDispatch()
  const cityReducer = useSelector(state => state.cityReducer)

  const changeCity = (val) => {
    setcityClicked(val)
    dispatch({ type: "CHANGE_CITY", cityName: val })
    // setTimeout(()=>{ props.history.push("/")},300)
   
  }

  const activeStyle = (val) => {
    return cityClicked == val ? styles.active : ""}

  return (
    <div className={styles.container}>
      {/* <h2>当前城市： {props.match.params.cityName}</h2> */}
      <h2>当前城市： <span>{cityReducer.cityName}</span></h2>
      <h3>热门城市</h3>
      <ul >
        {props.cityList.map((val, index) => {
          return (<div>
            <li
              key={index}
              onClick={() => changeCity(val)}
              className={activeStyle(val)}>
              {val}
            </li>
          </div>
          )
        })}
      </ul>
    </div>
  )
}

export default withRouter(CityList)
