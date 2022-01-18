
import axios from "axios";

//路径地址
const base = {
  baseURL: "http://localhost:809",
  homehot1: "/home/hot1",
  homehot2: "/home/hot2",
  cityList: "/home/cityList",
  searchList: "/home/searchList",
  detail:"/home/detail"

}


//请求方法
const api = {

  //获取首页热销单品
  getHomeHot1() {
    return axios.get(base.baseURL + base.homehot1)
  },

    //获取首页新品推荐
  getHomeHot2() {
    return axios.get(base.baseURL + base.homehot2)
  },

  // 获取城市列表
  getCityList() {
    return axios.get(base.baseURL + base.cityList)
  },

  // 获取搜索返回
  getSearchList(params) {
    return axios.get(base.baseURL + base.searchList,{params})
  },

  // 获取产品详情
  getDetail(params) {
    return axios.get(base.baseURL + base.detail,{params})
  },
}

export default api;