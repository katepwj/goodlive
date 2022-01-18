import React, { useState } from 'react';
import styles from './SearchInput.module.css';
import { withRouter } from "react-router-dom"

function SearchInput(props) {
  const [keywords, setKeywords] = useState("")

  const changeHandle = (e) => {
    setKeywords(e.target.value)
  }

  const submitHandle = (e) => {
    e.preventDefault()
  }
  const keyUpHandle = (e) => {
    if (keywords.length > 0) {
      if (e.keyCode === 13) {
        props.history.push("/search/" + keywords)
      }
    }

  }
  return (
    <div className={styles.container}>
      <i className="icofont-search-1" style={{color:'orangered'}}></i>
      <form onSubmit={submitHandle}>
        <input
          placeholder="请输入搜索内容"
          type="text"
          onKeyUp={keyUpHandle}
          value={keywords}
          onChange={changeHandle}
        />
      </form>
    </div>

  )
}

export default withRouter(SearchInput)
