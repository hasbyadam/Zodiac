const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const routes = require("./routes");
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api/v1", routes);

app.get('/', (req,res) =>{
    res.render('form.ejs') 
});
app.get('/result', (req,res) =>{
  res.render('result.ejs') 
});


app.listen(port, () => {
  console.log(`app is running at port ${port}`);
});