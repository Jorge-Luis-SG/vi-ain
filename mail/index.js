

const express = require('express');
const app = express();
const path = require('path')
var cors = require('cors');


app.use(cors());
app.use(express.urlencoded({extended:false}));
app.use(express.json())
app.use(require('./routes/index'));

app.use(express.static(path.join(__dirname, 'public')))



app.listen(3000,()=>{
  console.log("Server en puerto 3000")
})
