import React from 'react';
import styles from "./HomeListView.module.css"
import { NavLink } from "react-router-dom";

function HomeListView(props) {
  return (
    <div className={styles.container}>
      <h3>{props.title}</h3>
      <ul >
        {props.data.map(value => {
          return (<li
            key={value.id}>
            <NavLink to={`/search/` + value.title}>
              <img src={value.img} />
              <p>{value.title}</p>
            </NavLink>

          </li>
          )
        })}
      </ul>
    </div>
  )
}

export default HomeListView
