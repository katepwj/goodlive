import React from 'react';
import styles from'./PubHeader.module.css'

function PubHeader(props) {
  let goBack = () => {
    window.history.back()
  }

  return (
    <div className={styles.container} >
      <i className="icofont-arrow-left icofont-2x" onClick={goBack}></i>
      <h3>{props.title}</h3>
    </div>
  )
}

export default PubHeader
