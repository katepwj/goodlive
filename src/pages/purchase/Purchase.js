import React from 'react';
import styles from "./Purchase.module.css"
import PubHeader from '../../components/pubheader/PubHeader'

function Purchase(props) {
  console.log(props);
  return (
    <div className={styles.container} >
      <PubHeader title="结算页面"/>
      Purchase page
      
    </div>
  )
}

export default Purchase
