const express = require('express');
const exphbs = require('express-handlebars');

const app = express();
const PORT = 3000;

const hbs = exphbs.create({})
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res)=>{
    res.render('main')
})

app.listen(PORT, ()=>{
    console.log(`app listening`)
})