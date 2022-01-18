// 初始化城市
const init_city = (cityName) => {
  return {
    type: "INIT_CITY",
    cityName
  }
}

// 切换城市
const changeCity = (cityName) => {
  return {
    type: "CHANGE_CITY",
    cityName
  }
}

// 查找
const changeSearch = (search) => {
  return {
    type: "CHANGE_SEARCH",
    search
  }
}


//添加收藏
const favorite = (item) => {
  return {
    type: "FAVORITE",
    item
  }
}

//取消收藏
const unfavorite = (id) => {
  return {
    type: "UNFAVORITE",
    id
  }
}

// 清空所有收藏
const clearFavorite=()=>{
  return {
    type:"CLEARFAVORITE"
  }
}