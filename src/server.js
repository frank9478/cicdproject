import express from 'express'
const app = express()
const port = 3000

// 提供靜態檔案服務 (例如 HTML, CSS, JS)
app.use(express.static('public'));

// 接收表單資料
app.use(express.urlencoded({ extended: true })); 

app.get('/', (req, res) => {
  res.send('Hello World!')
  console.log("啟動囉") 
})   

app.get('/test', (req, res) => {
  res.send('Test endpoint is working!')
  console.log("Test endpoint 被呼叫")
})

app.post('/messages', (req, res) => {
  const msg = req.body.msg;
   // ← 拿到前端 input name="msg" 的內容
  res.send(`<div>你傳來的訊息：${msg}</div>`);
});
 
app.put('/messages', (req, res) => {
    res.get('')
    console.log("Test endpoint 被呼叫") 
})
   
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})