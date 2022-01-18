import React from 'react';
import styles from "./Test.module.css"

function Test(props) {
  let arr = Array(props.num).fill(1)

  // console.log(arr);
  return (
    <div >
      
      <ul className={styles.container}>
        {arr.map((val, index) => {
          return (
            <li key={index}>
              <img src="https://p.nanrenwo.net/uploads/allimg/190515/8507-1Z515163304.png" />
              <h4>无数据</h4>
            </li>
          )

        })}
      </ul>
    </div>
  )
}

export default Test
