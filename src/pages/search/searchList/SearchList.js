import React, { useState, useEffect } from 'react';
import api from '../../../api/api';
// import SearchListView from '../searchListView/SearchListView';
import SearchListView from '../../../components/searchListView/SearchListView';


function SearchList(props) {
  const [searchList, setsearchList] = useState([]);

  useEffect(() => {
    api.getSearchList({ search: props.search }).then(res => {
      if (res.status == 200) {
        setsearchList(res.data.result.data)
      }
    }).catch(err => console.log("search page err is:", err))
    return () => { setsearchList([]) }
  }
    , [])

  return (<div>
    {searchList.length > 0 ? < SearchListView searchList={searchList} /> : "still loading...."}
  </div>)
}

export default SearchList
