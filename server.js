const express = require('express');
const path = require('path');
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./Controllers/index');
const sequelize = require('./Config/connection');

const app = express();
const PORT = process.env.PORT || 3001;

const sess = {
    secret: 'Super secret',
    resave: false,
    saveUninitialized: false
}
app.use(session(sess));

const hbs = exphbs.create({});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
//app.set( 'views', path.join(__dirname + '/views/layouts'));


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

sequelize.sync({force: false}).then(() =>{
    app.listen(PORT, () =>{console.log('Now Listening')})
})