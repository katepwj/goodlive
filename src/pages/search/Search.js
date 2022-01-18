import React from 'react';
import SearchInput from '../../components/searchInput/SearchInput';
import SearchList from './searchList/SearchList';
import styles from './Search.module.css'

function Search(props) {
  return (
    <div>
      <div className={styles.container} >
        <i className="icofont-arrow-left icofont-2x"
          onClick={() => { window.history.back() }}></i>
        <div className={styles.s}>
          <SearchInput search={props.match.params.keywords} />
        </div>

      </div>
      <h2 className={styles.h2}>当前搜索: {props.match.params.keywords}</h2>
      <SearchList search={props.match.params.keywords} />
    </div>
  )
}

export default Search


