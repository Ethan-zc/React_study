const express = require('express');
const app = express()
const axios = require('axios')


app.get('/',(req,res)=>{
  res.send('返回抗议数据的api服务器')
})

app.get('/api/newsdata',async (req,res)=>{
  //解决ajax跨域问题
  res.append("Access-Control-Allow-Origin","*")
  res.append("Access-Control-Allow-content-type","*")
  let result = await axios.get('https://i.snssdk.com/toutiao/normandy/pneumonia_trending/city_dist/?activeWidget=1')
  let data = result.data;

  res.send(data)
})

app.get('/api/news', async (req,res)=>{
  //解决ajax跨域问题
  res.append("Access-Control-Allow-Origin","*")
  res.append("Access-Control-Allow-content-type","*")
  let httpURL='https://i.snssdk.com/toutiao/normandy/pneumonia_trending/list/?local_id=1000000&device_id=&offset=0'
  let result = await axios.get(httpURL)
  let data = result.data.data;

  res.send(data)
})

app.listen(8080,()=>{
  console.log("server Start:")
  console.log("http://localhost:8080")
  console.log("http://localhost:8080/api/newsdata")
})