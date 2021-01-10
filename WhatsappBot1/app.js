const express = require('express')
const app = express()
const morgan = require('morgan')

const port = 3001
//allowing requests from outside of the domain 
app.use(morgan('dev'))
app.use(express.json())
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type,Accept");
  next();
});

app.post('/api/incoming-webhook', (req, res) => {
  console.log(req.body);
  if (req.body.user == '97200556670208-1575232286@g.us') {
    res.send(
      [{
        "text": req.body.text,
        "type": "message"
      }]
    )
  }
  
  if (req.body.user === '972556672220208-1555340143@g.us' || 
      req.body.user === '972509123321@c.us' ||
      req.body.user === '972546667973@c.us' ||
      req.body.user === '97250222317866-1435169958@g.us'
      ) {
    res.send(
      [{
        "text": " שו " +req.body.text+ '?',
        "type": "message"
      }]
    )
  }
})

app.get('/', (req, res) => res.send('sHellddddo World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))