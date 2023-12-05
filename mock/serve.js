const Mock = require('mockjs')
const express = require('express')

const app = express()

const loginRes = require('./common/mock.json')
const port = 3030
app.post('/sys/login', (req, res) => {
  res.send(Mock.mock(loginRes))
})

app.listen(port, () => {
  console.log(`监听端口${port}`)
})
