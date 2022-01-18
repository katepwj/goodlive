const express = require("express");
const home = express.Router()
const homehot = require("./data/homehot");
const cityList = require('./data/cityList')
const searchList = require('./data/searchList')
var url = require('url');




// 热销单品
home.get("/hot1", (req, res) => {
  res.send({
    // status: 200,
    result: homehot.hot1
  })
})

// 新品推荐
home.get("/hot2", (req, res) => {
  res.send({
    status: 200,
    result: homehot.hot2
  })
})

// 城市列表
home.get("/citylist", (req, res) => {
  res.send({
    result: cityList
  })
})

//搜索页面
home.get("/searchlist", (req, res) => {
  const search = url.parse(req.url, true).query.search;
  // console.log(search);
  res.send({
    result: searchList
  })
})


//商品详情
home.get("/detail", (req, res) => {
  const id = url.parse(req.url, true).query.id
  // console.log("express-id:", id);
  const result = searchList.data.filter(x => x.id == id)
  // console.log(result);
  res.send({
    result: result
  })
})

module.exports = home
