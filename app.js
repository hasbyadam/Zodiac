const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.get('/', (req,res) =>{
    res.render('form.ejs') 
 });


app.listen(port, () => {
  console.log(`app is running at port ${port}`);
});